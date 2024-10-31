import React from 'react';
import {Card} from "primereact/card";
import event from "../../images/event.jpg";

function LocationContainer(props) {
    return (
        <div style={{marginBottom: "-6vh", textAlign: "center"}}>
            <div style={{display: "inline-block", position: "relative"}}>
                <Card style={{
                    width: "35vh",
                    height: "35vh",
                    outline: '2px solid black',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <img src={event} alt="Book Cover" style={{width: "100%"}}/>
                </Card>
                <div style={{marginTop: "0.1vh", fontSize: "3vh"}}>
                    Event Text (MM/DD/YYYY)
                </div>
            </div>
        </div>
    );
}

export default LocationContainer;