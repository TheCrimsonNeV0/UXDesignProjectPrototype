import React from 'react';
import TopMenu from "./TopMenu";
import SearchBarResearch from "./research/SearchBarResearch";
import MenuSelectionResearch from "./research/MenuSelectionResearch";
import BookContainer from "./library/BookContainer";
import ContentTypeFilterResearch from "./research/ContentTypeFilterResearch";
import ResearchContainer from "./research/ResearchContainer";

function ResearchPage(props) {
    return (
        <div>
            <TopMenu/>
            <div className="grid" style={{marginTop: "3vh"}}>
                <div className="col-5"/>
                <div className="col-2" style={{fontSize: "10vh"}}>
                    Research
                </div>
                <div className="col-5"/>
            </div>

            <div style={{marginTop: "2vh"}}>
                <SearchBarResearch/>
            </div>
            <div style={{marginTop: "5vh"}}>
                <MenuSelectionResearch/>
            </div>
            <div className="grid">
                <div className="col-2" style={{marginTop: "5vh", marginLeft: "2vw"}}>
                    <ContentTypeFilterResearch/>
                </div>
                <div className="col-9" style={{marginTop: "5vh", marginLeft: "3vw"}}>
                    <ResearchContainer/>
                    <ResearchContainer/>
                    <ResearchContainer/>
                </div>
            </div>
        </div>
    );
}

export default ResearchPage;