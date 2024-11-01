import React from 'react';
import LocationContainer from "./LocationContainer";

function LocationContainerGrid(props) {
    return (
        <div className="grid">
            <div className="col-6">
                <LocationContainer location={props.location1}/>
            </div>
            <div className="col-6">
                <LocationContainer location={props.location2}/>
            </div>
        </div>
    );
}

export default LocationContainerGrid;