import React from 'react';
import {Card} from "primereact/card";
import {Menu} from 'primereact/menu';
import {Button} from "primereact/button";

function UserStatsCard(props) {
    let items = [{label: 'Book1'}, {label: 'Book2'}, {label: 'Book3'}];

    return (
        <div>
            <Card style={{width: "100%", height: "100%", outline: '2px solid black', textAlign: "left", fontSize: "1vw"}}>
                <div>
                    Checkouts: 1
                </div>
                <div>
                    Holds: 0
                </div>
                <div>
                    Fines and Fees: $0.00
                </div>
                <div>
                    Interlibrary Loans:
                    <div className="grid">
                        <div className="col-3" style={{verticalAlign: "center"}}>
                            <Menu style={{marginTop: "1.5vh", marginLeft: "2vw"}} model={items} />
                        </div>
                        <div className="col-3">
                            <Button label="Request New Loan" style={{backgroundColor: "lightcoral", marginTop: "1.5vh"}}/>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default UserStatsCard;