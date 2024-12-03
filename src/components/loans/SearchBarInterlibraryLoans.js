import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";

function SearchBarInterlibraryLoans(props) {
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
                <div className="col-1"/>
                <div className="col-2">
                    <Button label="Request New Loan" style={{width: "100%", height: "6vh", top: "10%", backgroundColor: "lightcoral"}}
                    onClick={(e) => {
                        alert("Feature not implemented");
                    }}/>
                </div>
            </div>
        </div>
    );
}

export default SearchBarInterlibraryLoans;