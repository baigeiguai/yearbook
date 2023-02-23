import React, { Component } from 'react';
import NumericInput from 'react-numeric-input';
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
        this.setState({
            inputYear:event,
        })
    }
    handleClickButton = ()=>{
        this.props.funcs.CrawlEvents(this.state.inputYear)
    }
    render() { 
        return (
<div className="input-group start-off">
    <NumericInput className='form-control' min={this.nowYear-3} max={this.nowYear} value={this.state.inputYear} onChange={this.handleGetInputValue}/>
    <Link to={`/app/events_display?year=${this.state.inputYear}`}>
        <button onClick={this.handleClickButton} className="btn btn-outline-secondary" type="button">生成</button>
    </Link>
</div>
        );
    }
}
 
export default StartOff;