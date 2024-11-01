import React from 'react';
import TopMenu from "./TopMenu";
import LocationContainerGrid from "./locations/LocationContainerGrid";
import SearchBarLocations from "./locations/SearchBarLocations";

function LocationHours(props) {
    return (
        <div>
            <TopMenu/>
            <div className="grid" style={{marginTop: "3vh"}}>
                <div className="col-2"/>
                <div className="col-8" style={{fontSize: "10vh"}}>
                    Locations & Hours
                </div>
                <div className="col-2"/>
            </div>
            <div style={{marginTop: "2vh"}}>
                <SearchBarLocations/>
            </div>
            <div className="grid">
                <div className="col-12" style={{marginTop: "5vh", marginBottom: "1vh", marginLeft: "3vw"}}>
                    <LocationContainerGrid/>
                </div>
            </div>
            <div className="grid" style={{marginTop: "5vh"}}>
                <div className="col-12" style={{marginBottom: "3vh", marginLeft: "3vw"}}>
                    <LocationContainerGrid/>
                </div>
            </div>
        </div>
    );
}

export default LocationHours;