
import { Navigate } from "react-router-dom";
import axios from "axios"
import {useState ,useEffect} from 'react'
import url from '../../store/config'
const host= url.api

const PrivateRoute = ({ component: Component, ...rest }) => {
        const [isLoggedIn, setIsLoggedIn] = useState(false)
        const [loading, setLoading] = useState(true); 
        useEffect(() => {
        const checkLogin = async () => {
               try{
                const res = await axios.get(`${host}/validate_token`, { withCredentials: true })
                console.log(res.status)
                if (res.status === 200) {
                    setIsLoggedIn(true)
                } else {
                    setIsLoggedIn(false)
                }
               } catch (error) {
                console.log(error)
               }finally {
                setLoading(false)
               }}
            checkLogin()}, []);
            if (loading) {
                return <div>checking login...</div>
            }
            return  isLoggedIn? <Component {...rest} /> : <Navigate to="/login" replace />;

}
export default PrivateRoute;