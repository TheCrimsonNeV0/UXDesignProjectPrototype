import React from 'react';
import {Button} from "primereact/button";
import {useNavigate} from "react-router-dom";

function MenuSelectionMain(props) {
    const navigate = useNavigate();

    return (
        <div className="grid">
            <div className="col-2"/>
            <div className="col-8">
                <div className="grid">
                    <div className="col-2"/>
                    <div className="col-3">
                        <Button style={{width: "15vw", height: "6vh"}} label="Articles"/>
                    </div>
                    <div className="col-3">
                        <Button style={{width: "15vw", height: "6vh"}} label="Digital Collections"/>
                    </div>
                    <div className="col-3">
                        <Button style={{width: "15vw", height: "6vh"}} label="Databases"/>
                    </div>
                </div>
            </div>
            <div className="col-2"/>
        </div>
    );
}

export default MenuSelectionMain;