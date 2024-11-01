import React from 'react';
import { Card } from 'primereact/card';
import cover from '../../images/cover.jpg';
import {Button} from "primereact/button"; // Correctly import the image

function ItemContainer(props) {
    return (
        <div style={{ height: "100%"}}>
            <Card style={{ width: "100%", height: "90%", outline: '2px solid black' }}>
                <div className="grid">
                    <div className="col-2">
                        <img src={cover} alt="Book Cover" style={{ width: "70%" }} />
                    </div>
                    <div className="col-9">
                        <div style={{fontSize: "3vw", textAlign: "left"}}>
                            Book Name
                        </div>
                        <div style={{fontSize: "2vw", textAlign: "left"}}>
                            Author Name
                        </div>
                        <div style={{fontSize: "1vw", textAlign: "left", marginTop: "3vh"}}>
                            <div>
                                <div> Borrowed Branch: Main Branch</div>
                                <div> Due Date: 11/04/2024</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <Button style={{backgroundColor: "red"}} label="Renew" />
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default ItemContainer;