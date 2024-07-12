import { useState, useEffect } from "react";
import axios from "axios";
import "./AAD.scss";
import UG from "./User_Group/user_group";
import Group from "./Groups/groups";
import url from '../../store/config';
const host = url.api
const AAD = () => {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [refresh, setRefresh] = useState(false);

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSearchClick = async () => {
        if (username) {
            try {
                const res = await axios.get(`${host}/get_user?displayName=${username}`, 
                { withCredentials: true },
                {headers: {
                    'ngrok-skip-browser-warning': 'true',

                }}
            
            );
                setUserData(res.data.list[0]);
            } catch (err) {
                console.log(err);
            } finally {
                setUsername(""); // 清空输入框
            }
        }
    };

    const handleRefreshClick = () => {
        setRefresh(!refresh); // 切换 refresh 状态
    };

    useEffect(() => {
        if (refresh && userData) {
            const fetchData = async () => {
                try {
                    const res = await axios.get(`${host}/get_user?displayName=${userData.displayName}`, { withCredentials: true });
                    setUserData(res.data.list[0]);
                } catch (err) {
                    console.log(err);
                } finally {
                    setRefresh(false);
                }
            };
            fetchData();
        }
    }, [refresh, userData]);

    return (
        <div className="aad-container">
            <div className="search-box">
                <input
                    className="search-input"
                    value={username}
                    type="text"
                    placeholder="Search user by username"
                    onChange={handleInputChange}
                />
                <button className="search-btn" onClick={handleSearchClick}>Search</button>
                <div className="notification">Example: search superman for superman@aligntech.com</div>
                
            </div>
            {userData && (
                <div className="user-details">
                <div className="user-container">
                    <div className="user-info">
                        Information of user: {userData.displayName}
                        <button className={refresh ? "user-btn active" : "user-btn"} onClick={handleRefreshClick}>Refresh</button>
                    </div>
                    <div className="user-sub-container">
                        <div className="user-properties">Full Name</div>
                        <div className="user-value">{userData.givenName} {userData.surname}</div>
                    </div>
                    <div className="user-sub-container">
                        <div className="user-properties">Username</div>
                        <div className="user-value">{userData.displayName}</div>
                    </div>
                    <div className="user-sub-container">
                        <div className="user-properties">Department</div>
                        <div className="user-value">{userData.department}</div>
                    </div>
                    <div className="user-sub-container">
                        <div className="user-properties">Manager</div>
                        <div className="user-value">{userData.manager}</div>
                    </div>
                    <div className="user-sub-container">
                        <div className="user-properties">Title</div>
                        <div className="user-value">{userData.jobTitle}</div>
                    </div>
                    <div className="user-sub-container">
                        <div className="user-properties">Email</div>
                        <div className="user-value">{userData.mail}</div>
                    </div>
                    <div className="user-sub-container">
                        <div className="user-properties">Office</div>
                        <div className="user-value">{userData.officeLocation}</div>
                    </div>
                    <div className="user-sub-container">
                        <div className="user-properties">Account Enabled</div>
                        <div className="user-value">{userData.accountEnabled ? "Yes" : "No"}</div>
                    </div>
                    <div className="user-btn-container">
                        <button className="user-btn">Disable Account</button>
                        <button className="user-btn">Reset Password</button>
                    </div>
                </div>
               <UG passedUserID={userData.id} passedGivenName={userData.givenName} passedSurname={userData.surname} />
               </div>
            )}
            {userData && <div className="separator"></div>}
            <Group />
        </div>
    );
};

export default AAD;