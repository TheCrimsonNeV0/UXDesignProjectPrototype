import React from 'react';
import TopMenu from "./TopMenu";
import SearchBarEvents from "./events/SearchBarEvents";
import ContentTypeFilter from "./library/ContentTypeFilter";
import BookContainer from "./library/BookContainer";
import EventContainer from "./library/EventContainer";
import EventContainerGrid from "./library/EventContainerGrid";

function EventsPage(props) {
    return (
        <div>
            <TopMenu/>
            <div className="grid" style={{marginTop: "3vh"}}>
                <div className="col-5"/>
                <div className="col-2" style={{fontSize: "10vh"}}>
                    Events
                </div>
                <div className="col-5"/>
            </div>
            <div style={{marginTop: "2vh"}}>
                <SearchBarEvents/>
            </div>
            <div className="grid">
                <div className="col-1" style={{marginTop: "5vh", marginLeft: "2vw"}}>
                    <ContentTypeFilter/>
                </div>
                <div className="col-1"/>
                <div className="col-9" style={{marginTop: "5vh", marginBottom: "3vh", marginLeft: "3vw"}}>
                    <EventContainerGrid/>
                </div>
            </div>
            <div className="grid" style={{marginTop: "5vh"}}>
                <div className="col-1" style={{marginTop: "5vh", marginLeft: "2vw"}}>

                </div>
                <div className="col-1"/>
                <div className="col-9" style={{marginTop: "5vh", marginBottom: "3vh", marginLeft: "3vw"}}>
                    <EventContainerGrid/>
                </div>
            </div>
        </div>
    );
}

export default EventsPage;