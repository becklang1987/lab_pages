import React, { useState, useEffect } from 'react';
import axios from 'axios';
import url from '../../store/config';

const host = url.api;

const Login = () => {
  const GetLoginUrl = async() => {
    try {
      const response = await axios.get(`${host}/login`,
        {
            withCredentials: true,
            headers: {
                'ngrok-skip-browser-warning': 'true'   
        }
    }
    );
      const login_url= response.data.auth_url;
      return login_url;
    } catch (error) {
      console.log(error);
    }
  };
 const handleLogin = async() => { 
    const login_url = await GetLoginUrl();
    window.location.href = login_url;
    
    };



    return (
        <div>
          <button onClick={handleLogin}>
              Login with Microsoft hahah
          </button>
        </div>
      );
    };

export default Login;