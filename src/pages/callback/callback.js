import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import url from '../../store/config'
const host= url.api

const Callback = () => {
    const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const authorizationCode = urlParams.get('code');
      console.log("Loading callback page");

      if (authorizationCode) {
        try {
          const response = await axios.get(`${host}/callback?code=${authorizationCode}`, { withCredentials: true });
          if (response.status === 200) {
            // 重定向到受保护资源或主页
            navigate('/check');
          } else {
          console.log("Callback page loaded");
        }
        } catch (error) {
          console.error('Error during token exchange:', error);
        }
      }
    };

    handleCallback();
  }, [navigate, host]);

  return <div>Loading...</div>;
};

export default Callback;