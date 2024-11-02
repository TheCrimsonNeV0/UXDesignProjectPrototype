import React from 'react';
import { Card } from 'primereact/card';
import {Button} from "primereact/button"; // Correctly import the image

function BookContainer(props) {
    return (
        <div style={{ height: "70vh", marginBottom: "3vh" }}>
            <Card style={{ width: "100%", height: "70vh", outline: '2px solid black' }}>
                <div className="grid">
                    <div className="col-2">
                        <img src={props.cover} alt="Book Cover" style={{ width: "100%" }} />
                    </div>
                    <div className="col-9">
                        <div style={{fontSize: "5vw", textAlign: "left"}}>
                            {props.name}
                        </div>
                        <div style={{fontSize: "3vw", textAlign: "left"}}>
                            {props.author}
                        </div>
                        <div style={{fontSize: "1vw", textAlign: "left", marginTop: "3vh"}}>
                            {props.description}
                        </div>
                        <div style={{marginTop: "2vh"}}>
                            <div className="grid">
                                <div className="col-11"/>
                                <div className="col-1">
                                    <Button style={{position: "relative", bottom: 2, left: 0, width: "10vw", height: "8vh"}}
                                            label="Place Hold" onClick={() => {alert("Hold Placed Successfully")}} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <Button icon="pi pi-bookmark"/>
                    </div>

                </div>
            </Card>
        </div>
    );
}

export default BookContainer;