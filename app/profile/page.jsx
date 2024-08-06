import React from 'react';
import Auth from '../auth/page.jsx'
const isLoggedIn = true;

const ProfilePage = () =>{
    return(
        <>
        {isLoggedIn ?    
        <div style={{ minHeight: 'calc(100vh - (88px + 72px))' }} className="bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center p-4">
            <h1>Profile Page</h1>
        </div> 
        :
        <Auth /> 
        }

        </>
    )
}

export default ProfilePage;
