import React from 'react';
import { Card } from 'primereact/card';
import {Button} from "primereact/button"; // Correctly import the image

function ResearchContainer(props) {
    return (
        <div style={{marginBottom: "3vh"}}>
            <Card style={{ width: "100%", height: "70%", outline: '2px solid black' }}>
                <div className="grid">
                    <div className="col-2">
                        <img src={props.research.cover} alt="Research Cover" style={{ width: "100%" }} />
                    </div>
                    <div className="col-9">
                        <div style={{fontSize: "5vw", textAlign: "left"}}>
                            {props.research.name}
                        </div>
                        <div style={{fontSize: "3vw", textAlign: "left"}}>
                            {props.research.author}
                        </div>
                        <div style={{fontSize: "2vw", textAlign: "left"}}>
                            {props.research.conference}
                        </div>
                        <div style={{fontSize: "1vw", textAlign: "left", marginTop: "3vh"}}>
                            {props.research.summary}
                        </div>
                        <div style={{marginTop: "2vh"}}>
                            <div className="grid">
                                <div className="col-11"/>
                                <div className="col-1">
                                    <Button style={{width: "10vw", height: "8vh"}} label="Download" onClick={() => {alert("Download Started Successfully");}}/>
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

export default ResearchContainer;