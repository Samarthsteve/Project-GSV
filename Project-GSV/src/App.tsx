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
  const [footerMargin,
    setFooterMargin] = useState < string > ('30px 0 0 0');
  const [footerLine,
    setFooterLine] = useState < boolean > (false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/timeline') {
      setFooterBorderRadius('0'); // Flat for the timeline and pages
      setFooterMargin('0');
      setFooterLine(true);
    } else {
      setFooterBorderRadius('125px 125px 0 0'); // Rounded for other pages
      setFooterMargin('30px 0 0 0');
      setFooterLine(false);
    }
  },
    [location.pathname]);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer borderRadius={ footerBorderRadius } margin={ footerMargin } footerLine={ footerLine } />
      <ScrollRestoration />
    </div>
  );
}

export default App;