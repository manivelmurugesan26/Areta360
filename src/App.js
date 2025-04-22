import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import all screens
import SplaseScreen from './components/HomeComponent/js/SplaseScreen';
import LoginScreen from './components/HomeComponent/js/LoginScreen';
import Signup from './components/HomeComponent/js/Signup';
import Explore from './components/HomeComponent/js/Explore';
import VideoScreen from './components/HomeComponent/js/VideoScreen';
import DetailsScreen from './components/HomeComponent/js/DetailsScreen';
import CameraVerification from './components/HomeComponent/js/CameraVerification';
import Complete from './components/HomeComponent/js/Complete';
import Guide from './components/HomeComponent/js/Guide';
import SidePose from './components/HomeComponent/js/SidePose';
import Terms from './components/HomeComponent/js/Terms';
import CollectionCard from './components/HomeComponent/js/CollectionCard';
import Collections from './components/HomeComponent/js/Collections';
import LookDetail from './components/HomeComponent/js/LookDetail';
import ExpertPopup from './components/HomeComponent/js/ExpertPopup';
import StylistList from './components/HomeComponent/js/StylistList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SplaseScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/video" element={<VideoScreen />} />
          <Route path="/details" element={<DetailsScreen />} />
          <Route path="/camera-verification" element={<CameraVerification />} />
          <Route path="/complete" element={<Complete />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/side-pose" element={<SidePose />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/collection-card" element={<CollectionCard />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/look-detail" element={<LookDetail />} />
          <Route path="/expert-popup" element={<ExpertPopup />} />
          <Route path="/stylist-list" element={<StylistList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
