import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header";
import Rooms from "./components/Rooms/Rooms";
import Marketplace from "./components/Marketplace/Marketplace";
import DetailsProduct from "./components/Marketplace/DetailsProduct";
import VideoRoom from "./components/Rooms/VideoRoom";
import Profile from "./components/Profile/Profile";
import Events from "./components/Events";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign_up" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/detailsProduct" element={<DetailsProduct />} />
        <Route path="/VideoRoom" element={<VideoRoom />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
