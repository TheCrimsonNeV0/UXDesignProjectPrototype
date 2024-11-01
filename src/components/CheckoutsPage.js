import React from 'react';
import TopMenu from "./TopMenu";
import SearchBarCheckouts from "./checkouts/SearchBarCheckouts";
import ContentTypeFilterLibrary from "./library/ContentTypeFilterLibrary";
import BookContainer from "./library/BookContainer";
import ItemContainer from "./checkouts/ItemContainer";

function CheckoutsPage(props) {
    return (
        <div>
            <TopMenu/>
            <div className="grid" style={{marginTop: "3vh"}}>
                <div className="col-1"/>
                <div className="col-2" style={{fontSize: "10vh"}}>
                    Checkouts
                </div>
                <div className="col-5"/>
            </div>
            <div style={{marginTop: "5vh"}}>
                <SearchBarCheckouts/>
            </div>
            <div className="grid">
                <div className="col-1"/>
                <div className="col-10" style={{marginTop: "5vh"}}>
                    <ItemContainer/>
                </div>
                <div className="col-1"/>
            </div>
        </div>
    );
}

export default CheckoutsPage;