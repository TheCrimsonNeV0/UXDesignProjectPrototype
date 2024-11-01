import React from 'react';
import {Button} from "primereact/button";
import {useNavigate} from "react-router-dom";

function MenuSelectionProfile(props) {
    const navigate = useNavigate();

    const homeClick = () => {
        navigate("/");
    }

    const checkoutsClick = () => {
        navigate("/checkouts");
    }

    return (
        <div className="grid">
            <div className="col-2"/>
            <div className="col-8">
                <div className="grid">
                    <div className="col-3">
                        <Button style={{width: "15vw", height: "5vh"}} label="Home" onClick={homeClick}/>
                    </div>
                    <div className="col-3">
                        <Button style={{width: "15vw", height: "5vh"}} label="Checkouts" onClick={checkoutsClick}/>
                    </div>
                    <div className="col-3">
                        <Button style={{width: "15vw", height: "5vh"}} label="Bookmarks"/>
                    </div>
                    <div className="col-3">
                        <Button style={{width: "15vw", height: "5vh"}} label="History"/>
                    </div>
                </div>
            </div>
            <div className="col-2"/>
        </div>
    );
}

export default MenuSelectionProfile;