import React from 'react';
import {Card} from "primereact/card";
import event from "../../images/event.jpg";

function LocationContainer(props) {
    return (
        <div style={{marginBottom: "-6vh", textAlign: "center"}}>
            <div style={{display: "inline-block", position: "relative"}}>
                <div className="grid">
                    <div className="col-6">
                        <Card style={{
                            width: "35vh",
                            height: "35vh",
                            outline: '2px solid black',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <img src={event} alt="Location Picture" style={{width: "100%"}}/>
                        </Card>
                    </div>

                    <div className="col-1"/>

                    <div className="col-5" style={{marginTop: "2vh"}}>
                        <div style={{fontSize: "3vh"}}>
                            Branch Name
                        </div>

                        <div style={{fontSize: "2.5vh"}}>
                            Library Address
                        </div>

                        <div style={{fontSize: "2.5vh"}}>
                            (904) 555-5555
                        </div>

                        <div style={{fontSize: "2.5vh", marginTop: "2vh"}}>
                            <div>
                                Operation Hours
                            </div>
                            <div>
                                M-F 8AM-5PM
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LocationContainer;