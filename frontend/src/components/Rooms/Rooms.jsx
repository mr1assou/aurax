import React from 'react'
import Categories from './Categories'
import Banner from './Banner'
import Live from './Lives'
import { useState } from 'react'

import AddRoom from './AddRoom'
import RoomForm from './RoomForm'

function Rooms() {
  const [popUp, setPopUp] = useState(false);
  const [roomForm, setRoomForm] = useState(false);
  const [reload,setReload]=useState(false);

  return (
    <div className='mt-5 w-full overflow-x-hidden'>
      {/* <Authentication popUp={popUp} setPopUp={setPopUp} reload={reload} setReload={setReload}/> */}
      <RoomForm roomForm={roomForm} setRoomForm={setRoomForm}/>
      <Banner />
      <Categories />
      <AddRoom setPopUp={setPopUp} setRoomForm={setRoomForm}/>
      <Live setPopUp={setPopUp} reload={reload}/>
    </div>
  )
}

export default Rooms
