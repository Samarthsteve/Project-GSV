import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Error from './components/Error'
import Alumni from './components/Alumni'
import Gallery from './components/Gallery'
import ContactUs from './components/ContactUs'
import App from './App.tsx'

var router = createBrowserRouter([
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
      },
      {
        path: "/about",
      },
      {
        path: "/alumni",
        element: <Alumni />,
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
