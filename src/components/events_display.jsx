import React, { Component } from 'react';
import {useSearchParams} from 'react-router-dom'

class EventsDisplay extends Component {
    state = {  
        searchParams: this.props.params[0],
        setSearchParams: this.props.params[1],
    } 
    mySleep = (delay)=>{
        var start = (new Date()).getTime();
        while((new Date()).getTime() - start < delay) {
            continue;
        }
    }
    render() { 
        return (
            <h1>{this.state.searchParams.get("year")}</h1>
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
