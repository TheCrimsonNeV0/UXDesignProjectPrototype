import React from 'react';
import {Button} from "primereact/button";

function MenuSelection(props) {
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
                        <Button style={{width: "15vw", height: "10vh"}} label="Location Hours"/>
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