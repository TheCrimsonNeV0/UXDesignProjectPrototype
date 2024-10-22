import React from 'react';
import TopMenu from "./TopMenu";
import SearchBarLibrary from "./library/SearchBarLibrary";
import ContentTypeFilterLibrary from "./library/ContentTypeFilterLibrary";
import BookContainer from "./library/BookContainer";

function LibraryCatalogPage(props) {
    return (
        <div>
            <TopMenu />
            <div style={{marginTop: "5vh"}}>
                <SearchBarLibrary />
            </div>
            <div className="grid">
                <div className="col-1" style={{marginTop: "5vh", marginLeft: "2vw"}}>
                    <ContentTypeFilterLibrary/>
                </div>
                <div className="col-10" style={{marginTop: "5vh", marginLeft: "3vw"}}>
                    <BookContainer />
                    <BookContainer />
                    <BookContainer />
                </div>
            </div>
        </div>
    );
}

export default LibraryCatalogPage;