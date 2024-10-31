import React from 'react';
import {Button} from "primereact/button";
import {Dropdown} from "primereact/dropdown";

let languages = ["English", "Spanish", "French", "Italian", "Japanese"]

function BottomMenu(props) {
    return (
        <div className="grid">
            <div className="col-10">
                <div className="grid">
                    <div className="col-2">
                        <Button label="News" style={{width: "10vw", height: "4vh", fontSize: "1vw"}}/>
                    </div>
                    <div className="col-2">
                        <Button label="FAQ" style={{width: "10vw", height: "4vh", fontSize: "1vw"}}/>
                    </div>
                    <div className="col-2">
                        <Button label="Blog" style={{width: "10vw", height: "4vh", fontSize: "1vw"}}/>
                    </div>
                    <div className="col-2">
                        <Button label="Meeting Rooms" style={{width: "10vw", height: "4vh", fontSize: "1vw"}}/>
                    </div>
                    <div className="col-2">
                        <Button label="About Policies" style={{width: "10vw", height: "4vh", fontSize: "1vw"}}/>
                    </div>
                    <div className="col-2">
                        <Button label="Volunteer" style={{width: "10vw", height: "4vh", fontSize: "1vw"}}/>
                    </div>
                </div>
            </div>
            <div className="col-2">
                <Dropdown style={{width: "100%", height: "4vh"}} options={languages} placeholder="Select Language"> </Dropdown>
            </div>
        </div>
    );
}

export default BottomMenu;