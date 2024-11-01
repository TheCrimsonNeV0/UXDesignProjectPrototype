import React, {useState} from 'react';
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {Dropdown} from "primereact/dropdown";
import {useNavigate} from "react-router-dom";


let branches = ["All Branches", "Main Branch", "Beaches Branch", "Mandarin Branch", "Regency Square Branch", "University Park Branch"]

function SearchBarCheckouts(props) {
    const navigate = useNavigate();

    const homeClick = () => {
        navigate("/");
    }

    return (
        <div>
            <div className="grid" style={{height: "12vh"}}>
                <div className="col-1">
                    <Button icon="pi pi-home" style={{width: "3.5vw", height: "3.5vw"}} onClick={homeClick}/>
                </div>
                <div className="col-7" style={{position: "relative"}}>
                    <InputText style={{width: "100%", height: "80%", paddingRight: "8vh"}}/>
                    <Button
                        icon="pi pi-search"
                        style={{
                            height: "50%",
                            width: "5%",
                            position: "absolute",
                            right: "1vw",
                            top: "45%",
                            transform: "translateY(-50%)"
                        }}
                    />
                </div>
                <div className="col-1">
                    <Button label="Filters" style={{width: "100%", height: "6vh", top: "10%"}}/>
                </div>
            </div>
        </div>
    );
}

export default SearchBarCheckouts;