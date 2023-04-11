import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class StartOff extends Component {
    state = {
        inputYear:new Date().getFullYear(),
    } 
    constructor(){
        super()
        this.nowYear = new Date().getFullYear()
    }
    handleGetInputValue = (event)=>{
        console.log(event.target.value)
        this.setState({
            inputYear:parseInt(event.target.value),
        })
    }
    handleClickButton = ()=>{
        console.log(this.state.inputYear)
        this.props.funcs.CrawlEvents(this.state.inputYear)
    }
    render() { 
        return (
<React.Fragment>
    <div className='start-off-half start-off-left'>
        <div className='start-off-left-title'>
            <h1 className='display-4 mb-3'>
                <strong className="text-primary">志书编撰<br></br></strong>
                平台
            </h1>
        </div>
        <div className="start-off-left-year">
            {/* <NumericInput  className='start-off-left-year-input' min={this.nowYear-3} max={this.nowYear} value={this.state.inputYear} onChange={this.handleGetInputValue}/> */}
            <input type="number" className='start-off-left-year-input' min={this.nowYear-3} max={this.nowYear} defaultValue={this.nowYear} onChange={this.handleGetInputValue}/>
            <br />
            {/* <input type="range" min={this.nowYear-3} max={this.nowYear} value={this.state.inputYear} defaultValue={this.nowYear} id="start-off-year-input"/> */}
            <Link className='start-off-left-year-button' to={`/app/events_display?year=${this.state.inputYear}`}>
                <button onClick={this.handleClickButton} className="btn btn-outline-dark" type="button">开始</button>
            </Link>
        </div>
    </div>
    <div className='start-off-half'>
        right
    </div>
</React.Fragment>
        );
    }
}
 
export default StartOff;