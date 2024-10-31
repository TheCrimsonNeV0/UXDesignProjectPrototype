import React from 'react';
import TopMenu from "./TopMenu";
import BottomMenu from "./BottomMenu";
import ProfileModule from "./profile/ProfileModule";
import profile from '../images/profile.jpg';
import {Card} from "primereact/card";
import UserStatsCard from "./profile/UserStatsCard";

function ProfilePage(props) {
    return (
        <div>
            <TopMenu/>
            <div style={{marginTop: "20vh"}}>
                <div className="grid">
                    <div className="col-9">
                        <ProfileModule/>
                    </div>
                    <div className="col-2">
                        <img src={profile} style={{width: "100%", marginLeft: "-30vw", marginTop: "-8vh"}}/>
                    </div>
                </div>
            </div>

            <div>
                <div className="grid">
                    <div className="col-2"/>
                    <div className="col-8">
                        <UserStatsCard />
                    </div>
                    <div className="col-2"/>
                </div>
            </div>

            <div style={{position: "fixed", bottom: 0, left: 0, width: "100%"}}>
                <BottomMenu/>
            </div>
        </div>
    );
}

export default ProfilePage;