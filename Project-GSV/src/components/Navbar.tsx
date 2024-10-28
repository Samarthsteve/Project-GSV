import '../styles/Navbar.css';
import NavbarScript from '../scripts/NavbarScript';
import { NavLink } from 'react-router-dom';

import { useState } from 'react';

export default function Navbar(){
   const [isTriggerClicked, setTrigger] = useState(false);

   NavbarScript(setTrigger);
   
   return (
      <header id="header" className="header">
         <nav className="nav container">
            <div className="nav__data">
               <NavLink to="/" className="nav__logo">
                  Gnyana Sudha Vidyalaya
               </NavLink>

            <div className={`nav__toggle ${isTriggerClicked ? "show-icon" : ""}`} id="nav-toggle" onClick={() => setTrigger(!isTriggerClicked)}>
                  <i className="ri-menu-line nav__burger"></i>
                  <i className="ri-close-line nav__close"></i>
               </div>
            </div>

            <div className={`nav__menu ${isTriggerClicked ? "show-menu" : ""}`} id="nav-menu">
               <ul className="nav__list">
                  <li>
                     <NavLink to="/" className="nav__link">
                        Home
                     </NavLink>
                  </li>

                  <li>
                     <NavLink to="/about" className="nav__link">
                        About Us
                     </NavLink>
                  </li>

                  <li>
                     <NavLink to="/timeline" className="nav__link">
                        Timeline
                     </NavLink>
                  </li>
                  
                  <li>
                     <NavLink to="/academics" className="nav__link">
                        Academics
                     </NavLink>
                  </li>

                  <li>
                     <NavLink to="/alumni" className="nav__link">
                        Our Alumni
                     </NavLink>
                  </li>

                  {/* <li>
                     <NavLink to="" className="nav__link">
                        Events
                     </NavLink>
                  </li> */}

                  <li>
                     <NavLink to="/gallery" className="nav__link">
                        Gallery
                     </NavLink>
                  </li>

                  <li>
                     <NavLink to="/contact" className="nav__link">
                        Contact Us
                     </NavLink>
                  </li>
               </ul>
            </div>
         </nav>
      </header>
   );
}
