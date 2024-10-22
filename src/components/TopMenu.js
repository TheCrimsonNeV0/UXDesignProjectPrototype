import React from 'react';
import {Button} from "primereact/button";
import {SearchIcon} from "primereact/icons/search";
import logo from "../images/logo.png";

function TopMenu(props) {
    return (
        <div className="grid">
            <div className="col-1">
                <img src={logo} alt="Logo" style={{width: "100%", marginTop: "1vh"}}/>
            </div>
            <div className="col-5" style={{fontSize: "3vw", textAlign: "left", marginTop: "3vh"}}>
                Jacksonville Public Library
            </div>
            <div className={"col-4"}/>
            <div className="col-2">
                <div className={"grid"}>
                    <div className={"col-3"}>
                        <Button style={{width: "6vh", height: "6vh", marginTop: "1vh",
                            backgroundColor: "green"}} icon="pi pi-phone"/>
                    </div>
                    <div className={"col-3"}>
                        <Button style={{width: "6vh", height: "6vh", marginTop: "1vh",
                            backgroundColor: "lightgray"}} icon="pi pi-envelope"/>
                    </div>

                    <div className={"col-3"}>
                        <Button style={{width: "6vh", height: "6vh", marginTop: "1vh",
                            backgroundColor: "orange"}} icon="pi pi-question"/>
                    </div>

                    <div className={"col-3"}>
                        <Button style={{width: "6vh", height: "6vh", marginTop: "1vh"}} icon="pi pi-user"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopMenu;