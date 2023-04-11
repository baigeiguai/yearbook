import React, { Component } from 'react';
import StartOff from './startoff';
import { Route, Routes } from 'react-router-dom';
import EventsDisplay from './events_display'
import EventsEdit from './events_edit';
import axios from 'axios';
import Editor from './editor';

class App extends Component {
    state = {
        events:[],
        details:[],
        process_detail_done:false,
        process_detail_time:0,
        finalText:""
    } 
    FormatFinalText = (details)=>{
        let res = "## 年鉴\n"
        for (let obj of details){
            res+='- '+obj.detail.trim()+'\n\n'
        }
        console.log(res)
        return  res
    }
    AppFuncs= {
        MultiGetEventsByYear:(year)=>{
            axios.get(`http://0.0.0.0:8000/api/year2events?year=${year}`).then((response)=>{
                response.data.events.forEach(e=>{
                    e.selected = 0 
                })
                this.setState({
                    events:response.data.events,
                })
            }).catch(function(error){
                console.log(error)
            })
        },
        ChangeEventSelected:(id)=>{
            let newEvents = JSON.parse(JSON.stringify(this.state.events))
            newEvents.forEach(e=>{
                if (e.id===id){
                    e.selected = 1-e.selected
                    console.log(e.selected)
                }
            })
            this.setState({
                events:newEvents,
            })
        },
        CrawlEvents : (year)=>{
            axios.post(`http://0.0.0.0:8000/api/crawl?year=${year}`).then((response)=>{
                this.AppFuncs.MultiGetEventsByYear(year)
            }).catch(function(error){
                console.log(error)
            })
        },
        MultigetEventDetails: ()=>{
            let selectedEvents = this.state.events.filter(event=>(event.selected===1))
            this.process_detail_interval = setInterval(() => {
                this.setState({
                    process_detail_time:this.state.process_detail_time+1,
                })
            }, 1000);
            let details = []
            let finished = {}
            selectedEvents.forEach(e=>{
                axios.get(`http://0.0.0.0:8000/api/event_detail?uri=${e.uri}`).then((resp)=>{
                    console.log(e.title,resp.data)
                    details.push({
                        title : e.title,
                        uri: e.uri,
                        detail: resp.data,
                    })
                    finished[e.uri] = true
                }).catch(e=>{
                    console.log(e)
                })
            })
            let tempInterval = setInterval(() => {
                for (let e of selectedEvents){
                    if (!(e.uri in finished)){
                        return 
                    }
                }
                this.setState({
                    process_detail_done: true,
                    details: details,
                    finalText: this.FormatFinalText(details)
                })
                console.log(this.FormatFinalText(details))
                clearInterval(this.process_detail_interval)
                clearInterval(tempInterval)
            }, 1000);
        },
    }
    
    render() { 
        return (
    <React.Fragment>
        <div className='container'>
            <Routes>
                <Route path='/app'>
                    <Route path='start_off' element={<StartOff funcs={this.AppFuncs}/>} />
                    <Route path='events_display' element={<EventsDisplay funcs={this.AppFuncs} events={this.state.events}/>}></Route>
                    <Route path='events_edit' element={<EventsEdit 
                    funcs={this.state.AppFuncs}
                    process_done={this.state.process_detail_done}
                    process_detail_time  = {this.state.process_detail_time}
                    details = {this.state.details}
                    />}></Route>
                    <Route path='editor' element={<Editor funcs={this.AppFuncs} finalText={this.state.finalText}/>} />
                </Route>
            </Routes>
        </div>
    </React.Fragment>
        );
    }
}
 
export default App;