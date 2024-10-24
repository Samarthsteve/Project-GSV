import { Outlet, ScrollRestoration } from "react-router-dom";
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default App;
