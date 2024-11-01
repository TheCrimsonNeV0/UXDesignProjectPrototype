import React from 'react';
import TopMenu from "./TopMenu";
import SearchBarCheckouts from "./checkouts/SearchBarCheckouts";
import ItemContainer from "./checkouts/ItemContainer";
import naughty_on_ice from '../images/books/naughty_on_ice.jpg';

function CheckoutsPage(props) {
    const checkouts = [{
        cover: naughty_on_ice,
        name: "Naughty on Ice",
        author: "Maia Chance",
        borrowed_branch: "Main Branch"
    }, {

    }];

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
                    <ItemContainer item={checkouts[0]}/>
                </div>
                <div className="col-1"/>
            </div>
        </div>
    );
}

export default CheckoutsPage;