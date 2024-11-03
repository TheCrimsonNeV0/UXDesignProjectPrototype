import React from 'react';

function ProfileModule(props) {
    return (
        <div style={{fontSize: "1vw"}}>
            <div className="grid">
                <div className="col-3"/>
                <div className="col-5">
                    <div className="grid">
                        <div className="col-4">
                            Name:
                        </div>
                        <div className="col-8">
                            Nevzat Demirseren
                        </div>
                    </div>
                </div>
                <div className="col-4"/>
            </div>

            <div className="grid">
                <div className="col-3"/>
                <div className="col-5">
                    <div className="grid">
                        <div className="col-4">
                            Phone Number:
                        </div>
                        <div className="col-8">
                            +1 (555) 555-5555
                        </div>
                    </div>
                </div>
                <div className="col-4"/>
            </div>

            <div className="grid">
                <div className="col-3"/>
                <div className="col-5">
                    <div className="grid">
                        <div className="col-4">
                            E-mail:
                        </div>
                        <div className="col-8">
                            nevzat@mail.com
                        </div>
                    </div>
                </div>
                <div className="col-4"/>
            </div>

            <div className="grid">
                <div className="col-3"/>
                <div className="col-5">
                    <div className="grid">
                        <div className="col-4">
                            Card Number:
                        </div>
                        <div className="col-8">
                            123456789
                        </div>
                    </div>
                </div>
                <div className="col-4"/>
            </div>

            <div className="grid">
                <div className="col-3"/>
                <div className="col-5">
                    <div className="grid">
                        <div className="col-4">
                            Pickup Location:
                        </div>
                        <div className="col-8">
                            Main Branch
                        </div>
                    </div>
                </div>
                <div className="col-4"/>
            </div>
        </div>


    );
}

export default ProfileModule;