import React from 'react';
import TopMenu from "./TopMenu";
import LocationContainerGrid from "./locations/LocationContainerGrid";
import SearchBarLocations from "./locations/SearchBarLocations";
import mainlib from '../images/libraries/mainlib.gif'
import beaches from '../images/libraries/beaches.jpg'
import brentwood from '../images/libraries/brentwood.jpg'
import mandarin from '../images/libraries/mandarin.jpg'
import regency_square from '../images/libraries/regency_square.png'
import university from '../images/libraries/university.jpg'

function LocationHours(props) {
    const locations = [{
        photo: mainlib,
        name: "Main Branch",
        address: "303 N. Laura St Jacksonville, FL 32202",
        number: "(904) 255-BOOK (2665)"
    }, {
        photo: beaches,
        name: "Beaches Branch",
        address: "600 3rd Street Neptune Beach, FL 32266",
        number: "(904) 255-BOOK (2665)"
    }, {
        photo: brentwood,
        name: "Brentwood Branch",
        address: "3725 Pearl Street Jacksonville, FL 32206",
        number: "(904) 255-BOOK (2665)"
    }, {
        photo: mandarin,
        name: "Mandarin Branch",
        address: "3330 Kori Road Jacksonville, FL 32257",
        number: "(904) 255-BOOK (2665)"
    }, {
        photo: regency_square,
        name: "Regency Square Branch",
        address: "9900 Regency Square Blvd Jacksonville, FL 32225",
        number: "(904) 255-BOOK (2665)"
    }, {
        photo: university,
        name: "University Park Branch",
        address: "3435 University Blvd N Jacksonville, FL 32277",
        number: "(904) 255-BOOK (2665)"
    }];

    return (
        <div>
            <TopMenu/>
            <div className="grid" style={{marginTop: "3vh"}}>
                <div className="col-2"/>
                <div className="col-8" style={{fontSize: "10vh"}}>
                    Locations & Hours
                </div>
                <div className="col-2"/>
            </div>
            <div style={{marginTop: "2vh"}}>
                <SearchBarLocations/>
            </div>
            <div style={{marginTop: "5vh"}}/>
            <div className="grid">
                {locations.map((_, index) => (
                    index % 2 === 0 && locations[index + 1] && (
                        <div className="col-12" style={{marginBottom: "1vh", marginLeft: "3vw"}} key={index}>
                            <LocationContainerGrid location1={locations[index]} location2={locations[index + 1]}/>
                        </div>
                    )
                ))}
            </div>
            <div style={{marginBottom: "3vh"}}/>
        </div>
    );
}

export default LocationHours;