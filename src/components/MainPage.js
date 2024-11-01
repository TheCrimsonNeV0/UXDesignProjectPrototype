import React from 'react';
import 'primeflex/primeflex.css';
import TopMenu from "./TopMenu";
import MenuSelectionMain from "./main/MenuSelectionMain";
import SearchBarMain from "./main/SearchBarMain";
import QuickSelectionMenu from "./main/QuickSelectionMenu";
import BottomMenu from "./BottomMenu"; // Import PrimeFlex for the grid system

function MainPage(props) {
    return (
        <div>
            <TopMenu />
            <div style={{marginTop: "5vh"}}>
                <MenuSelectionMain />
            </div>
            <div style={{marginTop: "5vh"}}>
                <SearchBarMain />
            </div>
            <div style={{marginTop: "7vh", height: "100%"}}>
                <QuickSelectionMenu />
            </div>
            <div style={{position: "fixed", bottom: 0, left: 0, width: "100%"}}>
                <BottomMenu/>
            </div>

        </div>
    );
}

export default MainPage;
