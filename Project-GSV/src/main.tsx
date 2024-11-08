import {
  StrictMode
} from 'react'
import {
  createRoot
} from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Components
import Error from './components/Error'
import Alumni from './components/Alumni'
import Academics from "./components/Academics"
import Gallery from './components/Gallery'
import ContactUs from './components/ContactUs'
import About from './components/About'
import Timeline from "./components/Timeline"
import Home from "./components/Home"
import App from './App.tsx'

// Loaders
import contactLoader from "./loaders/contactLoader"
import academicsLoader from "./loaders/academicsLoader"
import galleryLoader from "./loaders/galleryLoader"
import timelineLoader from "./loaders/timelineLoader"
import aboutLoader from "./loaders/aboutLoader"
import homeLoader from "./loaders/homeLoader"
import alumniLoader from "./loaders/alumniLoader"

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  errorElement: <Error />,
  children: [{
    index: true,
    element: <Home />,
    loader: homeLoader,
  },
    {
      path: "/timeline",
      element: <Timeline />,
      loader: timelineLoader,
    },
    {
      path: "/about",
      element: <About />,
      loader: aboutLoader,
    },
    {
      path: "/alumni",
      element: <Alumni />,
      loader: alumniLoader,
    },
    {
      path: "/academics",
      element: <Academics />,
      loader: academicsLoader,
    },
    {
      path: "/gallery",
      element: <Gallery />,
      loader: galleryLoader
    },
    {
      path: "/contact",
      element: <ContactUs />,
      loader: contactLoader,
    },
  ],
},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)