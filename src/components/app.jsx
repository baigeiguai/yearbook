import React, { Component } from 'react';
import StartOff from './startoff';
import { Route, Routes } from 'react-router-dom';
import EventsDisplay from './events_display'
class App extends Component {
    state = {  } 
    render() { 
        return (
    <React.Fragment>
        <div className='container'>
            <Routes>
                <Route path='/app'>
                    <Route path='start_off' element={<StartOff />} />
                    <Route path='events_display' element={<EventsDisplay />}></Route>
                </Route>
            </Routes>
        </div>
      </React.Fragment>
        );
    }
}
 
export default App;