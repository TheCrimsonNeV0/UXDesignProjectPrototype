import React from 'react';

function ProfileModule(props) {
    return (
        <div>
            <div className="grid">
                <div className="col-3"/>
                <div className="col-5">
                    <div className="grid">
                        <div className="col-3">
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
                        <div className="col-3">
                            Phone Number:
                        </div>
                        <div className="col-8">
                            +1555555555
                        </div>
                    </div>
                </div>
                <div className="col-4"/>
            </div>

            <div className="grid">
                <div className="col-3"/>
                <div className="col-5">
                    <div className="grid">
                        <div className="col-3">
                            E-mail:
                        </div>
                        <div className="col-8">
                            nevzatumut2001@gmail.com
                        </div>
                    </div>
                </div>
                <div className="col-4"/>
            </div>

            <div className="grid">
                <div className="col-3"/>
                <div className="col-5">
                    <div className="grid">
                        <div className="col-3">
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
                        <div className="col-3">
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