import React from 'react';
import TopMenu from "./TopMenu";
import BottomMenu from "./BottomMenu";
import ProfileModule from "./profile/ProfileModule";
import profile from '../images/profile.jpg';
import UserStatsCard from "./profile/UserStatsCard";
import MenuSelectionProfile from "./profile/MenuSelectionProfile";

function ProfilePage(props) {
    return (
        <div>
            <TopMenu/>
            <div style={{marginTop: "5vh"}}>
                <MenuSelectionProfile/>
            </div>

            <div style={{marginTop: "12vh"}}>
                <div className="grid">
                    <div className="col-9" style={{marginTop: "-5vh"}}>
                        <ProfileModule/>
                    </div>
                    <div className="col-2">
                        <img src={profile} alt="Profile Picture"
                             style={{width: "12vw", marginLeft: "-30vw", marginTop: "-10vh", alignContent: "center"}}/>
                    </div>
                </div>
            </div>

            <div>
                <div className="grid" style={{marginTop: "1vh"}}>
                    <div className="col-3"/>
                    <div className="col-6">
                        <UserStatsCard/>
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