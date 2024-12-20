import React, {useContext} from 'react';
import {InputText} from "primereact/inputtext";
import {Checkbox} from "@mui/material";
import {Button} from "primereact/button";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

function LoginModule(props) {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    const navigate = useNavigate();

    const loginClick = () => {
        navigate('/profile');
        if (!isLoggedIn) setIsLoggedIn(true);
    }

    return (
        <div>
            <div className="grid">
                <div className="col-3"/>
                <div className="col-6">
                    <div className="grid">
                        <div className="col-4" style={{fontSize: "2vw"}}>
                            User ID:
                        </div>
                        <div className="col-6">
                            <InputText style={{width: "100%"}}/>
                        </div>
                    </div>
                </div>
                <div className="col-3"/>
            </div>

            <div className="grid">
                <div className="col-3"/>
                <div className="col-6">
                    <div className="grid">
                        <div className="col-4" style={{fontSize: "2vw"}}>
                            Password:
                        </div>
                        <div className="col-6">
                            <InputText type="password" style={{width: "100%"}}/>
                        </div>
                    </div>
                </div>
                <div className="col-3"/>
            </div>

            <div className="grid">
                <div className="col-4"/>
                <div className="col-6">
                    <div className="grid">
                        <div className="col-1">
                            <Checkbox defaultChecked={true}/>
                        </div>
                        <div className="col-3" style={{fontSize: "1.5vw"}}>
                            Remember Me
                        </div>
                    </div>
                </div>
                <div className="col-3"/>
            </div>

            <div className="grid">
                <div className="col-4"/>
                <div className="col-6">
                    <div className="grid">
                        <div className="col-3" style={{fontSize: "1.5vw"}}>
                            <Button label="Forgot my PIN"/>
                        </div>
                    </div>
                </div>
                <div className="col-3"/>
            </div>

            <div className="grid">
                <div className="col-4"/>
                <div className="col-4">
                    <Button label="Login" style={{width: "100%"}} onClick={(e) => {
                        alert("Logged in Successfully");
                        loginClick();
                    }}/>
                </div>
                <div className="col-4"/>
            </div>

            <div className="grid">
                <div className="col-4"/>
                <div className="col-4">
                    <Button label="Register" style={{width: "100%"}}/>
                </div>
                <div className="col-4"/>
            </div>
        </div>
    );
}

export default LoginModule;