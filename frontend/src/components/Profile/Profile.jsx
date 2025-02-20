import React from 'react'

import UserDetails from './UserDetails'
import Posts from '../Home/Posts'

function Profile() {
    return (
        <div className='mt-5 px-1'>
            
            <UserDetails/>
            <div className='mt-[140px] max:mt-[200px] text-white px-8'>
                <div action="" className='flex border-2 border-white rounded-lg py-2 px-5'>
                    <input type="text" className='w-full bg-black py-5 outline-none' placeholder='add post'/>
                    <button>+</button>
                </div>
            </div>
            <Posts/>
        </div>
    )
}

export default Profile
