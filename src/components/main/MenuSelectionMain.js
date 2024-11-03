import React from 'react';
import {Button} from "primereact/button";
import {useNavigate} from "react-router-dom";

function MenuSelectionMain(props) {
    const navigate = useNavigate();

    const registerClick = () => {
        navigate("/login");
    }

    const locationsClick = () => {
        navigate("/locations");
    }

    const notImplementedClick = () => {
        alert("Feature not implemented");
    }

    return (
        <div className="grid">
            <div className="col-2"/>
            <div className="col-8">
                <div className="grid">
                    <div className="col-3">
                        <Button style={{width: "15vw", height: "10vh"}} label="Home"/>
                    </div>
                    <div className="col-3">
                        <Button style={{width: "15vw", height: "10vh"}} label="Get a Library Card" onClick={registerClick}/>
                    </div>
                    <div className="col-3">
                        <Button style={{width: "15vw", height: "10vh"}} label="Locations & Hours" onClick={locationsClick}/>
                    </div>
                    <div className="col-3">
                        <Button style={{width: "15vw", height: "10vh"}} label="Connect" onClick={notImplementedClick}/>
                    </div>
                </div>
            </div>
            <div className="col-2"/>
        </div>
    );
}

export default MenuSelectionMain;