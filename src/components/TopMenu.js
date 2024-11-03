import React, {useContext} from 'react';
import {Button} from "primereact/button";
import logo from "../images/logo.png";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

function TopMenu(props) {
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);

    const navigate = useNavigate();

    const logoClick = () => {
        navigate("/");
    };

    const userClickLogin = () => {
        navigate("/login");
    };

    const userClickProfile = () => {
        navigate("/profile");
    };

    const notImplementedClick = () => {
        alert("Feature not implemented");
    }

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
                            backgroundColor: "green"}} icon="pi pi-phone"
                                onClick={notImplementedClick}/>
                    </div>
                    <div className={"col-3"}>
                        <Button style={{width: "6vh", height: "6vh", marginTop: "1vh",
                            backgroundColor: "lightgray"}} icon="pi pi-envelope"
                                onClick={notImplementedClick}/>
                    </div>

                    <div className={"col-3"}>
                        <Button style={{width: "6vh", height: "6vh", marginTop: "1vh",
                            backgroundColor: "orange"}} icon="pi pi-question"
                                onClick={notImplementedClick}/>
                    </div>

                    <div className={"col-3"}>
                        <Button style={{width: "6vh", height: "6vh", marginTop: "1vh"}} icon="pi pi-user"
                        onClick={isLoggedIn ? userClickProfile : userClickLogin}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopMenu;