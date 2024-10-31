import React from 'react';
import LocationContainer from "./LocationContainer";

function LocationContainerGrid(props) {
    return (
        <div className="grid">
            <div className="col-6">
                <LocationContainer/>
            </div>
            <div className="col-6">
                <LocationContainer/>
            </div>
        </div>
    );
}

export default LocationContainerGrid;