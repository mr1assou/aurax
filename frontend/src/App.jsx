import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header';
import Rooms from './components/Rooms/Rooms';
import Marketplace from './components/Marketplace/Marketplace';
import DetailsProduct from './components/Marketplace/DetailsProduct';
import VideoRoom from './components/Rooms/VideoRoom';
import Profile from './components/Profile/Profile';


function App() {

  return (
    <div className='bg-black  max-w-[100vw] min-h-screen  p-3 overflow-x-hidden max:px-10 max:py-5'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/detailsProduct" element={<DetailsProduct />} />
          <Route path="/VideoRoom" element={<VideoRoom />} /> 
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router >
    </div>
  )
}

export default App
