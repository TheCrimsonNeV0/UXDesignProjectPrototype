import React from 'react';
import TopMenu from "./TopMenu";
import SearchBarEvents from "./events/SearchBarEvents";
import EventContainerGrid from "./events/EventContainerGrid";
import ContentTypeFilterEvents from "./events/ContentTypeFilterEvents";
import storytelling from '../images/events/storytelling.jpg'
import crafting from '../images/events/crafting.webp'
import puzzle from '../images/events/puzzle.jpg'
import cartoon_club from '../images/events/cartoon_club.jpg'

function EventsPage(props) {
    const events = [
        {
            image: storytelling,
            name: "Storytelling Course",
            date: "12/03/2024",
            type: "Online"
        },
        {
            image: crafting,
            name: "Crafting Course",
            date: "12/15/2024",
            type: "In-person"
        },
        {
            image: puzzle,
            name: "Puzzle Day",
            date: "12/18/2024",
            type: "In-person"
        },
        {
            image: cartoon_club,
            name: "Cartoon Club",
            date: "12/21/2024",
            type: "Online"
        }
    ];

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
                    <ContentTypeFilterEvents/>
                </div>
                <div className="col-1"/>
                <div className="col-9" style={{marginTop: "5vh", marginBottom: "3vh", marginLeft: "3vw"}}>
                    <EventContainerGrid event1={events[0]} event2={events[1]}/>
                </div>
            </div>
            <div className="grid" style={{marginTop: "5vh"}}>
                <div className="col-1" style={{marginTop: "5vh", marginLeft: "2vw"}}>

                </div>
                <div className="col-1"/>
                <div className="col-9" style={{marginTop: "5vh", marginBottom: "3vh", marginLeft: "3vw"}}>
                    <EventContainerGrid event1={events[2]} event2={events[3]}/>
                </div>
            </div>
        </div>
    );
}

export default EventsPage;