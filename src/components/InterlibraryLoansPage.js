import React from 'react';
import titanic from "../images/books/titanic.jpg";
import just_for_the_summer from "../images/books/just_for_the_summer.jpg";
import wicked from "../images/books/wicked.jpg";
import TopMenu from "./TopMenu";
import SearchBarInterlibraryLoans from "./loans/SearchBarInterlibraryLoans";
import ItemContainer from "./loans/ItemContainer";

function InterlibraryLoansPage(props) {
    const interlibraryLoans = [
        {
            cover: titanic,
            name: "Titanic",
            author: "Geoff Tibballs",
            borrowed_branch: "Main Branch"
        },
        {
            cover: just_for_the_summer,
            name: "Just for the Summer",
            author: "Michelle Major",
            borrowed_branch: "Brentwood Branch"
        },
        {
            cover: wicked,
            name: "Wicked",
            author: "Gregory Maguire",
            borrowed_branch: "Mandarin Branch"
        }
    ];


    return (
        <div>
            <TopMenu/>
            <div className="grid" style={{marginTop: "3vh"}}>
                <div className="col-1"/>
                <div className="col-6" style={{fontSize: "10vh"}}>
                    Interlibrary Loans
                </div>
            </div>
            <div style={{marginTop: "5vh"}}>
                <SearchBarInterlibraryLoans/>
            </div>


            {interlibraryLoans.map((item, index) => (
                <div className="grid">
                    <div className="col-1"/>
                    <div className="col-10" style={{marginTop: "5vh"}}>
                        <ItemContainer key={index} item={item}/>
                    </div>
                    <div className="col-1"/>
                </div>
            ))}


        </div>
    );
}

export default InterlibraryLoansPage;