import React from 'react';
import {Card} from "primereact/card";
import event from "../../images/event.jpg";
import {Button} from "primereact/button";

function EventContainer(props) {
    return (
        <div style={{textAlign: "center"}}>
            <div style={{display: "inline-block", position: "relative"}}>
                <Card style={{
                    width: "35vh",
                    height: "35vh",
                    outline: '2px solid black',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <img src={props.event.image} alt="Event Image" style={{width: "100%"}}/>
                </Card>
                <div style={{marginTop: "0.1vh", fontSize: "3vh"}}>
                    <div style={{fontSize: "2vw"}}>
                        {props.event.name}
                    </div>
                    <div style={{fontSize: "1.5vw"}}>
                        {props.event.date}
                    </div>
                    <div style={{fontSize: "1.5vw"}}>
                        Type: {props.event.type}
                    </div>
                    <div style={{marginTop: "1vh", fontSize: "1.5vw"}}>
                        <Button style={{width: "15vh"}} label="Enroll" onClick={() => {
                            alert("Enrolled Successfully");
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventContainer;