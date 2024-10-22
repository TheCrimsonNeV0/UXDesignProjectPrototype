import React from 'react';
import {Checkbox} from "@mui/material";
import {Button} from "primereact/button";

function ContentTypeFilter(props) {
    return (
        <div>
            <div> Books: <Checkbox/></div>
            <div> Audiobooks: <Checkbox/></div>
            <div> eBooks: <Checkbox/></div>
            <div> eAudiobooks: <Checkbox/></div>
            <div> CD / DVD: <Checkbox/></div>
            <div> Research: <Checkbox/></div>
            <div style={{marginTop: "1vh"}}> <Button label="Show Available" /> </div>
        </div>
    );
}

export default ContentTypeFilter;