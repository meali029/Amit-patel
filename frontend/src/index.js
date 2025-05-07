import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component
import WeatherComponent from './components/WeatherComponent';
import Home from './components/Home';
import Aboutme from './pages/AboutMePage';
import DentalImplants from './pages/DentalImplants';
import Periodontics from './pages/Periodontics';
import Testimonials from './pages/Testimonial';
import UsefulLinks from './pages/UseFulLinks';
import ContactMe from './pages/ContactMe';
import FAQs from './pages/FAQs';
import Blog from './pages/Blogs';
import PatientPortal from './pages/PatientPortal';
import DentalReferral from './pages/DentalReferral';
import SmileGallery from './pages/SmileGallery';
import BookConsultation from './pages/Bookconsultation';
import RequestAppointment from './pages/Appointment';
import Sitemap from './pages/SiteMap';
import LiveChat from './pages/LiveChat';
import Profile from './components/ProfilePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<WeatherComponent />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/dental" element={<DentalImplants />} />
          <Route path="/periodontic" element={<Periodontics />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/links" element={<UsefulLinks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pateintPortal" element={<PatientPortal />} />
          <Route path="/dental-referral" element={<DentalReferral />} />
          <Route path="/smile-gallery" element={<SmileGallery />} />
          <Route path="/consultation" element={<BookConsultation />} />
          <Route path="/request" element={<RequestAppointment />} />
          <Route path="/site" element={<Sitemap />} />
          <Route path="/livechat" element={<LiveChat/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
