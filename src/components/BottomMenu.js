import React, {useState} from 'react';
import {Button} from "primereact/button";
import {Dropdown} from "primereact/dropdown";

const languages = ["English", "Spanish", "French", "Italian", "Japanese"]

function BottomMenu(props) {
    const [language, setLanguage] = useState("English");

    const notImplementedClick = () => {
        alert("Feature not implemented");
    }


    return (
        <div className="grid">
            <div className="col-10">
                <div className="grid">
                    <div className="col-2">
                        <Button label="News" style={{width: "10vw", fontSize: "1vw"}} onClick={notImplementedClick}/>
                    </div>
                    <div className="col-2">
                        <Button label="FAQ" style={{width: "10vw", fontSize: "1vw"}} onClick={notImplementedClick}/>
                    </div>
                    <div className="col-2">
                        <Button label="Blog" style={{width: "10vw", fontSize: "1vw"}} onClick={notImplementedClick}/>
                    </div>
                    <div className="col-2">
                        <Button label="Meeting Rooms" style={{width: "10vw", fontSize: "1vw"}} onClick={notImplementedClick}/>
                    </div>
                    <div className="col-2">
                        <Button label="About Policies" style={{width: "10vw", fontSize: "1vw"}} onClick={notImplementedClick}/>
                    </div>
                    <div className="col-2">
                        <Button label="Volunteer" style={{width: "10vw", fontSize: "1vw"}} onClick={notImplementedClick}/>
                    </div>
                </div>
            </div>
            <div className="col-2">
                <Dropdown style={{width: "100%"}} value={language} options={languages} placeholder="Select Language"
                onChange={(e) => {
                    setLanguage(e.value);
                }}/>
            </div>
        </div>
    );
}

export default BottomMenu;