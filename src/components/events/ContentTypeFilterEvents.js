import React, {useState} from 'react';
import {Checkbox} from "@mui/material";
import {Button} from "primereact/button";
import {Calendar} from "primereact/calendar";

function ContentTypeFilter(props) {
    const [date, setDate] = useState("");

    return (
        <div>
            <div>
                On-site Events: <Checkbox/>
            </div>
            <div>
                Event Date: <Calendar style={{marginBottom: "1vh"}} value={date} onChange={(e) => setDate(e.value)} />
            </div>
            <div style={{marginBottom: "1vh"}}> <Button label="Today" style={{backgroundColor: "blueviolet"}}/> </div>
            <div style={{marginBottom: "1vh"}}> <Button label="Tomorrow" style={{backgroundColor: "blueviolet"}}/> </div>
            <div style={{marginBottom: "1vh"}}> <Button label="This Week" style={{backgroundColor: "blueviolet"}}/> </div>
            <div style={{marginBottom: "1vh"}}> <Button label="This Month" style={{backgroundColor: "blueviolet"}}/> </div>
            <div style={{marginTop: "1vh"}}> <Button label="Show Available" style={{backgroundColor: "gray"}}/> </div>
        </div>
    );
}

export default ContentTypeFilter;