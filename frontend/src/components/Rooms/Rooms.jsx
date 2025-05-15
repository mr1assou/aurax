import React from 'react'
import Categories from './Categories'
import Banner from './Banner'
import Live from './Lives'
import { useState } from 'react'
import Header from '../Header'
import AddRoom from './AddRoom'
import RoomForm from './RoomForm'
import SideBar from '../SideBar'
import Wrapper from '../Home/Wrapper'
import Widgets from '../Widgets'
function Rooms() {
  const [popUp, setPopUp] = useState(false);
  const [roomForm, setRoomForm] = useState(false);
  const [reload, setReload] = useState(false);

  return (
    // <div className='w-full  bg-black py-3 px-2 lg:py-5 lg:px-10 min-h-screen'>
    //   {/* <Authentication popUp={popUp} setPopUp={setPopUp} reload={reload} setReload={setReload}/> */}
    //   <RoomForm roomForm={roomForm} setRoomForm={setRoomForm} />
    //   <Banner />
    //   <Categories />
    //   <AddRoom setPopUp={setPopUp} setRoomForm={setRoomForm} />
    //   <Live setPopUp={setPopUp} reload={reload} />
    // </div>
    <div
      className="text-[#0F1419] min-h-screen   max-w-[1400px] mx-auto
    flex justify-center"
    >
      <SideBar />
      <div className='w-[80%]'>
        <RoomForm roomForm={roomForm} setRoomForm={setRoomForm} />
        <Banner />
        <Categories />
        <AddRoom setPopUp={setPopUp} setRoomForm={setRoomForm} />
        <Live setPopUp={setPopUp} reload={reload} />
      </div>
    </div>
  )
}

export default Rooms
