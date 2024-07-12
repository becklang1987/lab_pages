import { useState, useEffect } from "react";
import axios from "axios";
import "./user_group.scss";
import { use } from "react";
import url from '../../../store/config';
const host = url.api

const UG = ({passedUserID, passedGivenName,passedSurname}) => {
    const [userGroup, setUserGroup] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get(`${host}/get_user_details?id=${passedUserID}`, { withCredentials: true },
                {headers: {
                    'ngrok-skip-browser-warning': 'true',
                    'X-Frontend-Url': window.location.origin

                }});
                setUserGroup(res.data.group_list);
            }catch(err){
                console.log(err);
            }}
        fetchData();
    }, [passedUserID]);
    return (
    <div className="super-container">
            {userGroup && 
            <div className="group-info">
                Membership of Groups: {passedGivenName} {passedSurname}
                <button className= "user-btn" > Refresh</button>
            </div>
        }
    <div className="user-group">
        {userGroup && userGroup.map((group,index)=> {
                return (
                <div className="group-container">
                <div className="user-sub-container">
                    <div className="user-properties">Group Name</div>
                    <div className="user-value">{group.displayName}</div>
                </div>
                <div className="user-sub-container">
                    <div className="user-properties">Group Description</div>
                    <div className="user-value">{group.description}</div>
                </div>
                <div className="user-sub-container">
                    <div className="user-properties">Group ID</div>
                    <div className="user-value">{group.id}</div>
                </div>
                <div className="user-btn-container">
                        <button className="user-btn">Remove from Group</button>
                </div>
                </div>
                )
            })
        }
    </div>
    </div>
    )
};

export default UG;