import React from 'react';
import './AccountInfos.css'

const AccountInfos = () => {
    return (
        <div className="infos--center">
            <div className="infos--container">
                <img />

                <h1 className="infos--username">rodrigoaraujo7</h1>
                <div className="infos--flex">
                    <div className="infos--publications">
                        <h2>15</h2>
                        <h2>publications</h2>
                    </div>

                    <div className="infos--followers">
                        <h2>576</h2>
                        <h2>followers</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountInfos