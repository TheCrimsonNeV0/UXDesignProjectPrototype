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
                                <div> Borrowed Branch: {props.item.borrowed_branch}</div>
                                <div> Due Date: {dueDate.toLocaleDateString('en-US')}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <Button style={{backgroundColor: "red"}} label="Renew" onClick={(e) => {
                            extendDueDate();
                            alert("Due date extended for 2 weeks");
                        }}/>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default ItemContainer;