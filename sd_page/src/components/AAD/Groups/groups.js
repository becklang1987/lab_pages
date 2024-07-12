import { useState, useEffect } from "react";
import axios from "axios";
import "./groups.scss";
import { use } from "react";
import url from '../../../store/config';
const host = url.api

const Group = () => {
  const [groupName, setGroupName] = useState("");
  const [groupList, setGroupList] = useState([]);

  const handleInputChange = (event) => {
    setGroupName(event.target.value);
  };

  const handleSearchClick = async() => {
    try{
        const res = await axios.get(`${host}/search_group?displayName=${groupName}`, { withCredentials: true });
        setGroupList(res.data.group_list);
    }catch(err){
        console.log(err);
    }
  };
  return(
    <div className="aad-container">
    <div className="search-box">
        <input
            className="search-input"
            value={groupName}
            type="text"
            placeholder="Search groups"
            onChange={handleInputChange}
        />
        <button className="search-btn" onClick={handleSearchClick}>Search</button>
    </div>
    <div className="group-list">
    {groupList && groupList.map(group => {
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
                    <button className="user-btn">Join Group</button>
            </div>
            </div>
        )
    })}
    </div>
    </div>
  )
};
export default Group;