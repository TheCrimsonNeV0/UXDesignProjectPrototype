import React from 'react';
import { Card } from 'primereact/card';
import cover from '../../images/cover.jpg';
import {Button} from "primereact/button"; // Correctly import the image

function ResearchContainer(props) {
    return (
        <div style={{marginBottom: "3vh"}}>
            <Card style={{ width: "100%", height: "70%", outline: '2px solid black' }}>
                <div className="grid">
                    <div className="col-2">
                        <img src={cover} alt="Book Cover" style={{ width: "100%" }} />
                    </div>
                    <div className="col-9">
                        <div style={{fontSize: "5vw", textAlign: "left"}}>
                            Research Title
                        </div>
                        <div style={{fontSize: "3vw", textAlign: "left"}}>
                            Author Name(s)
                        </div>
                        <div style={{fontSize: "2vw", textAlign: "left"}}>
                            Published Conference
                        </div>
                        <div style={{fontSize: "1vw", textAlign: "left", marginTop: "3vh"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <div style={{marginTop: "2vh"}}>
                            <div className="grid">
                                <div className="col-11"/>
                                <div className="col-1">
                                    <Button style={{width: "10vw", height: "8vh"}} label="Download"/>
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