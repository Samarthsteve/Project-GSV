import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Error from './components/Error'
import Alumni from './components/Alumni'
import Academics from "./components/Academics"
import Gallery from './components/Gallery'
import ContactUs from './components/ContactUs'
import About from './components/About'
import Timeline from "./components/Timeline"
import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/alumni",
        element: <Alumni />,
      },
      {
        path: "/academics",
        element: <Academics />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
)
