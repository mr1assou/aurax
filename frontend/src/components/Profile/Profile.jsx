import React, { useEffect } from 'react'

import UserDetails from './UserDetails'
import Header from '../Header'
import Wrapper from './Wrapper'
import { useState } from 'react'

function Profile() {
    const [change,setChange]=useState(false);

    return (
        <div className='w-full  bg-black py-3 px-2 lg:py-5 lg:px-10 min-h-screen'> 
            <Header /> 
            <UserDetails />
            <div className='mt-[200px] md:mt-20'></div>
            <Wrapper change={change} setChange={setChange}/>
        </div>
    )
}

export default Profile
