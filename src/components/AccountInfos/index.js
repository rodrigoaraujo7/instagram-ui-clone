import React from 'react';
import './AccountInfos.css'

const AccountInfos = () => {
    const informations = {
        userPhoto: '',
        user: 'rodrigoaraujo7',
        publications: 15,
        followers: 576
    }

    return (
        <div className="infos--center">
            <div className="infos--container">
                <div className="infos--photo">
                    <img src={informations.userPhoto} />
                </div>

                <div className="infos--text">
                    <h1 className="infos--username">{informations.user}</h1>
                    <div className="infos--flex">
                        <div className="infos--publications">
                            <h2>{informations.publications}</h2>
                            <h2>publications</h2>
                        </div>

                        <div className="infos--followers">
                            <h2>{informations.followers}</h2>
                            <h2>followers</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountInfos