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
            <div style={{marginBottom: "1vh"}}> <Button label="Today"/> </div>
            <div style={{marginBottom: "1vh"}}> <Button label="Tomorrow"/> </div>
            <div style={{marginBottom: "1vh"}}> <Button label="This Week"/> </div>
            <div style={{marginBottom: "1vh"}}> <Button label="This Month"/> </div>
            <div style={{marginTop: "1vh"}}> <Button label="Show Available" /> </div>
        </div>
    );
}

export default ContentTypeFilter;