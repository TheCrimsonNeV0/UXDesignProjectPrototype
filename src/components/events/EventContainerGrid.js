import React from 'react';
import EventContainer from "./EventContainer";

function EventContainerGrid(props) {
    return (
        <div className="grid">
            <div className="col-6">
                <EventContainer event={props.event1}/>
            </div>
            <div className="col-6">
                <EventContainer event={props.event2}/>
            </div>
        </div>
    );
}

export default EventContainerGrid;