import React, {useState} from 'react';
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {Dropdown} from "primereact/dropdown";
import { useNavigate } from 'react-router-dom';

let locations = ["All Branches", "Main Branch", "Beaches Branch", "Mandarin Branch", "Regency Square Branch", "University Park Branch"]
let age_groups = ["0-7", "7-14", "14-21", "21 and older"]

function SearchBarEvents(props) {
    const [location, setLocation] = useState("");
    const [ageGroup, setAgeGroup] = useState("");

    const navigate = useNavigate();

    const homeClick = () => {
        navigate("/");
    }

    return (
        <div>
            <div className="grid" style={{height: "12vh"}}>
                <div className="col-1">
                    <Button icon="pi pi-home" style={{width: "5vw", height: "5vw"}} onClick={homeClick}/>
                </div>
                <div className="col-7" style={{position: "relative"}}>
                    <InputText style={{width: "100%", height: "100%", paddingRight: "8vh"}}/>
                    <Button
                        icon="pi pi-search"
                        style={{
                            height: "60%",
                            width: "6%",
                            position: "absolute",
                            right: "1vw",
                            top: "50%",
                            transform: "translateY(-50%)"
                        }}
                    />
                </div>
                <div className="col-2">
                    <Dropdown style={{width: "80%", marginTop: "3vh"}} options={locations}
                              value={location} placeholder="Location"
                              onChange={(e) => {setLocation(e.value)}}/>
                </div>
                <div className="col-2">
                    <Dropdown style={{width: "80%", marginTop: "3vh", marginLeft: "-7vh"}} options={age_groups}
                              value={ageGroup} placeholder="Age Group"
                              onChange={(e) => {setAgeGroup(e.value)}}/>
                </div>
            </div>
        </div>
    );
}

export default SearchBarEvents;