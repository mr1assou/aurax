import React from 'react'
import Posts from './Posts'
import Header  from '../Header'
import SocialFeed from './SocialFeed'
import { useState } from 'react'
import Wrapper from './Wrapper'
function Home() {
  const [reload,setReload]=useState(false);
  return (
    <div className='w-full  bg-black py-3 px-2 lg:py-5 lg:px-10 min-h-screen'> 
      <Header /> 
      <Wrapper />
    </div>
  )
}

export default Home
