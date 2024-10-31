import React from 'react';
import {Button} from "primereact/button";
import {useNavigate} from "react-router-dom";

function MenuSelection(props) {
    const navigate = useNavigate();

    const locationsClick = () => {
        navigate("/locations");
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
                        <Button style={{width: "15vw", height: "10vh"}} label="Get a Library Card"/>
                    </div>
                    <div className="col-3">
                        <Button style={{width: "15vw", height: "10vh"}} label="Locations & Hours" onClick={locationsClick}/>
                    </div>
                    <div className="col-3">
                        <Button style={{width: "15vw", height: "10vh"}} label="Connect"/>
                    </div>
                </div>
            </div>
            <div className="col-2"/>
        </div>
    );
}

export default MenuSelection;