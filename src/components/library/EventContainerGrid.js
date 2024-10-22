import React from 'react';
import EventContainer from "./EventContainer";

function EventContainerGrid(props) {
    return (
        <div className="grid">
            <div className="col-6">
                <EventContainer />
            </div>
            <div className="col-6">
                <EventContainer />
            </div>
        </div>
    );
}

export default EventContainerGrid;