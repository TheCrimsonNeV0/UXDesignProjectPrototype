import React, {useState} from 'react';
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {Dropdown} from "primereact/dropdown";
import {useNavigate} from "react-router-dom";


let branches = ["All Branches", "Main Branch", "Beaches Branch", "Mandarin Branch", "Regency Square Branch", "University Park Branch"]

function SearchBarLibrary(props) {
    const [branch, setBranch] = useState("All branches");

    const navigate = useNavigate();

    const homeClick = () => {
        navigate("/");
    }

    const interlibraryLoansClick = () => {
        navigate("/loans"); // To view the interlibrary loans in the prototype
    }

    const notImplementedClick = () => {
        alert("Feature not implemented");
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
                <div className="col-1">
                    <Button label="Filters" style={{width: "100%", height: "8vh", top: "10%"}} onClick={notImplementedClick}/>
                </div>
                <div className="col-1"/>
                <div className="col-2">
                    <Button label="Interlibrary Loans" style={{
                        width: "90%", height: "8vh", right: "1vw",
                        top: "10%", fontSize: "1vw"
                    }} onClick={interlibraryLoansClick}/>
                </div>
            </div>

            <div>
                <Dropdown style={{width: "60%", marginTop: "3vh"}} value={branch} options={branches}
                          placeholder="Select Branch" onChange={(e) => {
                              setBranch(e.value);}}/>
            </div>
        </div>
    );
}

export default SearchBarLibrary;