import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Body from './component/Body.jsx'
import Profile from './pages/Profile.jsx'
import Contact from './pages/Contact.jsx'
import Help from './pages/Help.jsx'
import Crop from './pages/Crop.jsx'
import Login from './pages/Login.jsx'


const router = createBrowserRouter (
  createRoutesFromElements(
    <>
      <Route path='/' element={ <Login /> } />

      <Route path='/app' element={ <App /> } >
        <Route path='' element={ <Body /> } />
        <Route path='profile' element={ <Profile /> } />
        <Route path='contact' element={ <Contact /> } />
        <Route path='help' element={ <Help /> } />
        <Route path='crop' element={ <Crop /> } />
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
