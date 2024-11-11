import React, {useContext} from 'react';
import {Card} from "primereact/card";
import {Menu} from 'primereact/menu';
import {Button} from "primereact/button";
import {AuthContext} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";

function UserStatsCard(props) {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    const navigate = useNavigate();

    let items = [{label: 'Titanic (Main Branch)'}, {label: 'Just for the Summer (Brentwood Branch)'}, {label: 'Wicked (Mandarin Branch)'}];

    const logoutClick = () => {
        setIsLoggedIn(false);
        alert("Logged out successfully");
        navigate('/');
    };

    const notImplementedClick = () => {
        alert("Feature not implemented");
    }

    return (
        <div>
            <Card style={{width: "100%", height: "100%", outline: '2px solid black', textAlign: "left", fontSize: "1vw"}}>
                <div className="grid">
                    <div className="col-10">
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
                                <div className="col-8" style={{verticalAlign: "center"}}>
                                    <Menu style={{ width: "100%", marginTop: "1.5vh", marginLeft: "2vw"}} model={items}/>
                                </div>
                                <div className="col-3">
                                    <Button label="Request New Loan"
                                            style={{backgroundColor: "lightcoral", marginTop: "1.5vh", marginLeft: "2vw"}}
                                            onClick={notImplementedClick}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-2" style={{}}>
                        <Button label="Logout" style={{
                            backgroundColor: "#a31f1f",
                            width: "100%",
                            position: "relative",
                            top: 0,
                            right: 0
                        }}
                        onClick={logoutClick}/>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default UserStatsCard;