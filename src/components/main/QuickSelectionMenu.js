import React from 'react';
import {Button} from "primereact/button";
import { useNavigate } from 'react-router-dom';

function QuickSelectionMenu(props) {
    const navigate = useNavigate();

    const libraryClick = () => {
        navigate("/library");
    };

    const eventsClick = () => {
        navigate("/events");
    }

    const researchClick = () => {
        navigate("/research");
    }

    return (
        <div className="grid" style={{height: "7vh"}}>
            <div className="col-2"/>
            <div className="col-8">
                <div className="grid">
                    <div className="col-3">
                        <div style={{textAlign: "center"}}>
                            <Button style={{backgroundColor: "green", height: "20vh", width: "20vh"}}
                                    icon={<i className="pi pi-book" style={{fontSize: "12vh"}}
                                    onClick={libraryClick}></i>}/>
                            <p>Library Catalog</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div style={{textAlign: "center"}}>
                            <Button style={{backgroundColor: "gray", height: "20vh", width: "20vh"}}
                                    icon={<i className="pi pi-tablet" style={{fontSize: "12vh"}}></i>}/>
                            <p>Digital Library</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div style={{textAlign: "center"}}>
                            <Button style={{backgroundColor: "brown", height: "20vh", width: "20vh"}}
                                    icon={<i className="pi pi-clipboard" style={{fontSize: "12vh"}}></i>}
                                    onClick={researchClick}/>
                            <p>Research Database</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div style={{textAlign: "center"}}>
                            <Button style={{backgroundColor: "#BA8E23", height: "20vh", width: "20vh"}}
                                    icon={<i className="pi pi-calendar" style={{fontSize: "12vh"}}
                                    onClick={eventsClick}></i>}/>
                            <p>Events</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-2"/>
        </div>
    );
}

export default QuickSelectionMenu;