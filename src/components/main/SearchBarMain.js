import React from 'react';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {useNavigate} from "react-router-dom";

function SearchBarMain(props) {
    const navigate = useNavigate();

    const searchClick = () => {
        navigate('/library');
    }

    return (
        <div className="grid">
            <div className="col-2"/>
            <div className="col-1">
                <Button icon="pi pi-search" style={{height: "8vh", width: "8vh"}}
                onClick={searchClick}/>
            </div>
            <div className="col-6">
                <InputText style={{width: "100%", height: "8vh"}}/>
            </div>
            <div className="col-1">
                <Button label="Filters" style={{width: "100%", height: "8vh"}}/>
            </div>
            <div className="col-2"/>
        </div>
    );
}

export default SearchBarMain;