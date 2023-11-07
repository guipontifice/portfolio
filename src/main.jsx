import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, BrowserRouter, createBrowserRouter } from 'react-router-dom'
import { Router } from 'react-router-dom'
import AboutMe from './Routes/AboutMe.jsx'
import Home from './Routes/Home.jsx'
import Contact from './Routes/Contact.jsx'
import Projects from './Routes/Projects.jsx'
import ErrorPage from './Routes/ErrorPage.jsx'


const loadingMarkup = (
  <div className="py-4 text-center">
    <h1>Loading...</h1>
  </div>
)
const router = createBrowserRouter([
  {
    //Error Boundary Component
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'portfolio',
        element: <Home />
      },
      {
        path: 'AboutMe',
        element: <AboutMe />
      },
      {
        path: 'Projects',
        element: <Projects />
      },
      {
        path: 'Contact',
        element: <Contact />
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <Suspense fallback={loadingMarkup}>
      <RouterProvider router={router} />
    </Suspense>
)