import React from 'react';
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {useNavigate} from "react-router-dom";

function SearchBarResearch(props) {
    const navigate = useNavigate();

    const homeClick = () => {
        navigate("/");
    }

    return (
        <div>
            <div className="grid" style={{height: "8vh"}}>
                <div className="col-2"/>
                <div className="col-1">
                    <Button icon="pi pi-home" style={{width: "4vw", height: "4vw"}} onClick={homeClick}/>
                </div>
                <div className="col-7" style={{position: "relative"}}>
                    <InputText style={{width: "100%", height: "100%", paddingRight: "8vh"}}/>
                    <Button
                        icon="pi pi-search"
                        style={{
                            height: "60%",
                            width: "5%",
                            position: "absolute",
                            right: "1vw",
                            top: "50%",
                            transform: "translateY(-50%)"
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchBarResearch;