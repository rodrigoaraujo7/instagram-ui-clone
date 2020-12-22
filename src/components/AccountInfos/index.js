import React, { useState } from 'react';
import './AccountInfos.css'

const AccountInfos = () => {
    const informations = {
        userPhoto: '',
        user: 'rodrigoaraujo7',
        publications: 15
    }

    const [follow, setFollow] = useState(576);

    return (
        <div className="infos--center">
            <div className="infos--container">
                <div className="infos--photo">
                    <img src={informations.userPhoto} />
                </div>

                <div className="infos--text">
                    <h1 className="infos--username">{informations.user}</h1>
                    <input type="submit" value="Follow" onClick={() => setFollow(follow + 1)} />
                    <div className="infos--flex">
                        <div className="infos--publications">
                            <h2>{informations.publications}</h2>
                            <h2>publications</h2>
                        </div>

                        <div className="infos--followers">
                            <h2>{follow}</h2>
                            <h2>followers</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountInfos