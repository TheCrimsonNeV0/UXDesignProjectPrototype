import React, {useState} from 'react';
import { Card } from 'primereact/card';
import cover from '../../images/cover.jpg';
import {Button} from "primereact/button"; // Correctly import the image

function ItemContainer(props) {
    const initialDueDate = new Date();
    const [dueDate, setDueDate] = useState(initialDueDate);

    const extendDueDate = () => {
        const newDueDate = new Date(dueDate);
        newDueDate.setDate(newDueDate.getDate() + 14); // Add 14 days
        setDueDate(newDueDate);
    };

    return (
        <div style={{ height: "100%"}}>
            <Card style={{ width: "100%", height: "90%", outline: '2px solid black' }}>
                <div className="grid">
                    <div className="col-2">
                        <img src={props.item.cover} alt="Book Cover" style={{ width: "70%" }} />
                    </div>
                    <div className="col-9">
                        <div style={{fontSize: "3vw", textAlign: "left"}}>
                            {props.item.name}
                        </div>
                        <div style={{fontSize: "2vw", textAlign: "left"}}>
                            {props.item.author}
                        </div>
                        <div style={{fontSize: "1vw", textAlign: "left", marginTop: "3vh"}}>
                            <div>
                                <div> Requested Branch: {props.item.borrowed_branch}</div>
                                <div> Expected Arrival: {dueDate.toLocaleDateString('en-US')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default ItemContainer;