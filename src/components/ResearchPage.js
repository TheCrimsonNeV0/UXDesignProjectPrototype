import React from 'react';
import TopMenu from "./TopMenu";
import SearchBarResearch from "./research/SearchBarResearch";
import MenuSelectionResearch from "./research/MenuSelectionResearch";
import ContentTypeFilterResearch from "./research/ContentTypeFilterResearch";
import ResearchContainer from "./research/ResearchContainer";
import research_paper_placeholder from "../images/research/research_paper_placeholder.jpg"

function ResearchPage(props) {
    const researches = [{
        cover: research_paper_placeholder,
        name: "Climate Change and Global Warming",
        author: "Desmond Johnson",
        conference: "HO Conference 2024",
        summary: "Climate change and global warming represent two of the most pressing environmental challenges facing the modern world. This research investigates the multifaceted causes and impacts of these phenomena, focusing on anthropogenic greenhouse gas emissions, deforestation, and industrial activities that have accelerated global temperature rise. By analyzing climate models, historical temperature data, and atmospheric composition, the study underscores the correlation between human activities and climate shifts. Furthermore, the research explores the potential consequences of unmitigated warming, including extreme weather events, sea-level rise, and biodiversity loss. Emphasis is placed on the socio-economic repercussions, particularly in vulnerable regions, and the urgency for global policy frameworks aimed at sustainable solutions. The paper concludes with recommendations for implementing renewable energy sources, promoting carbon-neutral technologies, and enhancing international cooperation to mitigate further environmental degradation and ensure climate resilience."
    }, {
        cover: research_paper_placeholder,
        name: "Engineering of Modern Cars",
        author: "Leland Manigo",
        conference: "RDC 2018",
        summary: "The engineering of modern cars has evolved significantly, integrating cutting-edge technology to address safety, efficiency, and environmental concerns. This research examines the key advancements in automotive engineering, including the development of electric and hybrid powertrains, enhanced aerodynamics, and the implementation of advanced driver-assistance systems (ADAS). Emphasis is placed on the role of computer-aided design (CAD) and simulation tools that streamline the design process, as well as the use of lightweight materials like carbon fiber and aluminum to improve fuel efficiency without compromising safety. The study also discusses the impact of connectivity features and autonomous driving technology, highlighting the challenges related to cybersecurity and regulatory standards. Additionally, the paper evaluates the sustainability of automotive production, exploring the integration of recyclable components and reduced emissions manufacturing practices. The research concludes by suggesting future directions in the field, including the adoption of fully electric architectures, advancements in battery technology, and the integration of artificial intelligence to further enhance vehicle performance and user experience."
    }, {
        cover: research_paper_placeholder,
        name: "a Retrospective on Dress-code in Society",
        author: "Mark Phillips",
        conference: "Conference of Social Sciences 2022",
        summary: "Dress codes have played a significant role in shaping social norms and cultural identity throughout history. This research provides a retrospective analysis of dress-code policies and their influence across different eras and societies. By examining the evolution of dress regulations in public, educational, and professional settings, the study highlights how clothing has served as a marker of status, conformity, and rebellion. The research also delves into the impact of dress codes on gender roles and the expression of identity, tracing the shifts from rigid Victorian standards to the more relaxed and diverse norms of contemporary society. Special attention is given to the ongoing debates surrounding dress codes in schools and workplaces, where issues of equality, cultural sensitivity, and freedom of expression come into play. The study evaluates how technological advancements and globalization have influenced fashion trends and dress norms, fostering a more inclusive and fluid approach to attire. The paper concludes by proposing how future policies could balance personal expression with social cohesion, reflecting an evolving understanding of individual and collective identity."
    }];

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
                    {researches.map((research, index) => (
                        <div className="col-12" style={{ marginBottom: "1vh", marginLeft: "3vw" }} key={index}>
                            <ResearchContainer research={research} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ResearchPage;