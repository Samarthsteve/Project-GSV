import React, {
  useState,
  useEffect
} from 'react';
import {
  Outlet,
  useLocation,
  ScrollRestoration
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./App.css"

function App() {
  const [footerBorderRadius,
    setFooterBorderRadius] = useState < string > ('125px 125px 0 0');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/timeline') {
      setFooterBorderRadius('0'); // Flat for the timeline page
    } else {
      setFooterBorderRadius('125px 125px 0 0'); // Rounded for other pages
    }
  },
    [location.pathname]);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer borderRadius={footerBorderRadius} />
      <ScrollRestoration />
    </div>
  );
}

export default App;