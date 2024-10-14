import '../styles/Navbar.css';
import NavbarScript from '../scripts/NavbarScript';

import { useState } from 'react';

export default function Navbar(){
   const [isTriggerClicked, setTrigger] = useState(false);

   NavbarScript();
   
   return (
      <header id="header" className="header">
         <nav className="nav container">
            <div className="nav__data">
               <a href="#" className="nav__logo">
                  Gnyana Sudha Vidyalaya
               </a>

            <div className={`nav__toggle ${isTriggerClicked ? "show-icon" : ""}`} id="nav-toggle" onClick={() => setTrigger(!isTriggerClicked)}>
                  <i className="ri-menu-line nav__burger"></i>
                  <i className="ri-close-line nav__close"></i>
               </div>
            </div>

            <div className={`nav__menu ${isTriggerClicked ? "show-menu" : ""}`} id="nav-menu">
               <ul className="nav__list">
                  <li>
                     <a href="#" className="nav__link">
                        Home
                     </a>
                  </li>

                  <li>
                     <a href="#" className="nav__link">
                        About Us
                     </a>
                  </li>

                  <li>
                     <a href="#" className="nav__link">
                        Timeline
                     </a>
                  </li>

                  <li>
                     <a href="#" className="nav__link">
                        Our Alumini
                     </a>
                  </li>

                  <li>
                     <a href="#" className="nav__link">
                        Events
                     </a>
                  </li>

                  <li>
                     <a href="#" className="nav__link">
                        Gallery
                     </a>
                  </li>

                  <li>
                     <a href="#" className="nav__link">
                        Contact Us
                     </a>
                  </li>
               </ul>
            </div>
         </nav>
      </header>
   );
}
