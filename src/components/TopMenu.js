import React from 'react';
import {Button} from "primereact/button";
import logo from "../images/logo.png";
import {useNavigate} from "react-router-dom";

function TopMenu(props) {
    const navigate = useNavigate();

    const logoClick = () => {
        navigate("/");
    };

    const userClick = () => {
        navigate("/profile");
    };

    return (
        <div className="grid">
            <div className="col-1">
                <img src={logo} alt="Logo" style={{width: "100%", marginTop: "1vh"}}
                onClick={logoClick}/>
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
                        <Button style={{width: "6vh", height: "6vh", marginTop: "1vh"}} icon="pi pi-user"
                        onClick={userClick}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopMenu;