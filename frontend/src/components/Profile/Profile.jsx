import React from 'react'

import UserDetails from './UserDetails'
import Posts from '../Home/Posts'

function Profile() {
    return (
        <div className='mt-5 px-1'>
            
            <UserDetails/>
            <div className='mt-20'></div>
            <Posts/>
        </div>
    )
}

export default Profile
