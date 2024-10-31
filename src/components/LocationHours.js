import React from 'react';
import TopMenu from "./TopMenu";
import SearchBarEvents from "./events/SearchBarEvents";
import ContentTypeFilterEvents from "./events/ContentTypeFilterEvents";
import EventContainerGrid from "./events/EventContainerGrid";
import LocationContainer from "./locations/LocationContainer";
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
                <div className="col-1" style={{marginTop: "5vh", marginLeft: "2vw"}}>
                    <ContentTypeFilterEvents/>
                </div>
                <div className="col-1"/>
                <div className="col-9" style={{marginTop: "5vh", marginBottom: "3vh", marginLeft: "3vw"}}>
                    <LocationContainerGrid/>
                </div>
            </div>
            <div className="grid" style={{marginTop: "5vh"}}>
                <div className="col-1" style={{marginTop: "5vh", marginLeft: "2vw"}}>

                </div>
                <div className="col-1"/>
                <div className="col-9" style={{marginTop: "5vh", marginBottom: "3vh", marginLeft: "3vw"}}>
                    <LocationContainerGrid/>
                </div>
            </div>
        </div>
    );
}

export default LocationHours;