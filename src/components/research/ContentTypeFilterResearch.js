import React from 'react';
import {Checkbox} from "@mui/material";
import {Button} from "primereact/button";
import {Calendar} from "primereact/calendar";

function ContentTypeFilterResearch(props) {
    return (
        <div>
            <div> Peer-reviewed: <Checkbox/></div>
            <div>
                <div>
                    Publication Date:
                </div>
                <div className="grid" style={{marginTop: "1vh"}}>
                    <div className={"col-5"}>
                        <Calendar selectionMode="range"/>
                    </div>
                    <div className="col-2"> — </div>
                    <div className={"col-5"}>
                        <Calendar selectionMode="range"/>
                    </div>
                </div>
            </div>
            <div style={{marginTop: "1vh"}}><Button label="Apply Filters"/></div>
        </div>
    );
}

export default ContentTypeFilterResearch;