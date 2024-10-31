import React from 'react';
import {Card} from "primereact/card";

function UserStatsCard(props) {
    return (
        <div>
            <Card style={{width: "100%", height: "100%", outline: '2px solid black', textAlign: "left"}}>
                <div>
                    Checkouts:
                </div>
                <div>
                    Holds:
                </div>
                <div>
                    Fines and Fees:
                </div>
                <div>
                    Interlibrary Loans:
                </div>
            </Card>
        </div>
    );
}

export default UserStatsCard;