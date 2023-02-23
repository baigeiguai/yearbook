import React, { Component } from 'react';
import {useSearchParams} from 'react-router-dom'
import { Link } from 'react-router-dom';

class EventsDisplay extends Component {
    state = {  
        searchParams: this.props.params[0],
        setSearchParams: this.props.params[1],
        events:[],
    }
    handleClickButton = (event)=>{
        this.props.funcs.MultigetEventDetails()
    }
    handleRadioClick = (id)=>{
        this.props.funcs.ChangeEventSelected(id)
    }
    render() { 
        return (
        <React.Fragment>
        <Link to="/app/events_edit">
            <button onClick={this.handleClickButton} type="button" className="btn btn-light pull-right">提交</button>
        </Link>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>时间</th>
                    <th>标题</th>
                    <th>链接</th>
                    <th className="w-10">是否选择</th>
                </tr>
            </thead>
            <tbody>
                {this.props.events.map((element) => (
                    <tr key={`events_${element.id}`}>
                       <td>{element.publish_time}</td>
                       <td>{element.title}</td>
                       <td>{`https://www.suda.edu.cn${element.uri}`}</td>
                       <td>
                        <div className="form-check">
                            <input onClick={()=>this.handleRadioClick(element.id)} className="form-check-input" type="checkbox" id="flexCheckDefault" />
                        </div>
                       </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </React.Fragment>
        )
    }
}
let EventDisplayWithRouter = (props) => (
    <EventsDisplay
        {...props}
        params={useSearchParams()}
    />
)
export default EventDisplayWithRouter;
