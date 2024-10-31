import React from 'react';
import TopMenu from "./TopMenu";
import BottomMenu from "./BottomMenu";
import LoginModule from "./login/LoginModule";

function LoginPage(props) {
    return (
        <div>
            <TopMenu/>
            <div style={{marginTop: "12vh"}}>
                <LoginModule />
            </div>
            <div style={{position: "fixed", bottom: 0, left: 0, width: "100%"}}>
                <BottomMenu/>
            </div>
        </div>
    );
}

export default LoginPage;