import './index.scss'
import axios from "axios"
import { useEffect,useState } from 'react'
import url from '../../store/config'
const host= url.api


function UserInfoBar() {
const [isClicked, setIsClicked] = useState()
const handleLogout = (x) => {
    console.log("logout clicked")
    setIsClicked(!x)
}
const [userInfo, setUserInfo] = useState()
useEffect(() => {
    const userInfoList= async () => {
       try{
        const res = await axios.get(`${host}/get_me`, { withCredentials: true })
        setUserInfo(res.data.list);
        console.log("xxx   "+userInfo);
       } catch (error) {
        console.log(error)
       }}
    userInfoList()
}, [])
    if (userInfo) {
        return (
    <div className="user-info-bar">
        <button className="user-info-bar__avatar" ></button>
        <div className="user-info-bar__name">You are logged in as {userInfo.givenName} {userInfo.surname}</div>
        <button className={isClicked===false ? "user-info-bar__logout active" : "user-info-bar__logout"} onClick={() => {handleLogout(isClicked)}}>Logout</button>
    </div>
    )} else {
        return <h2>Loading...</h2>
    }}

export default UserInfoBar;