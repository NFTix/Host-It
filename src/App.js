import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/landing-page';
import CreateEvent from './pages/dashboard/create-events/create-event';
import AllEvents from './pages/dashboard/explore-all-events/all-events';
import AllEventDetail from './pages/dashboard/explore-all-events/all-event-detail';
import ManageEvents from './pages/dashboard/manage-events/manage-events';
import ManageEventDetails from './pages/dashboard/manage-events/manage-event-details';
import AllMyEvents from './pages/dashboard/my-events/all-my-events';
import Dashboard from './pages/dashboard/dashboard';
import Events from './pages/events';
import AboutUs from './pages/about-us';
import Contact from './pages/contact';
import MyCollection from './pages/dashboard/my-collection/my-collection';
import MyTickets from './pages/dashboard/my-tickets/my-tickets';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/events' element={<Events />}/> 
        <Route path='/about-us' element={<AboutUs />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/all-events" element={<AllEvents />} />
        <Route path="/all-events/:id" element={<AllEventDetail />} />
        <Route path='/manage-events' element= {<ManageEvents />}/>
        <Route path='/manage-events/:id' element={<ManageEventDetails />}/>
        <Route path='/my-events' element={<AllMyEvents />} />
        <Route path='/my-events/:id' element={<AllEventDetail />} />
        <Route path='/my-collections' element={<MyCollection />} />
        <Route path='/my-tickets' element={<MyTickets />} />
      </Routes>
    </>
  );
}

export default App;
