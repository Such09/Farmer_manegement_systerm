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
import Search from './pages/Search.jsx'
import ScanCrop from './pages/ScanCrop.jsx'
import Fertilizers from './pages/Agri_Product/Fertilizers.jsx'
import Seeds from './pages/Agri_Product/Seeds.jsx'
import AddCrop from './pages/Agri_Product/AddCrop.jsx'
import AdminLogin from './admin/AdminLogin.jsx'
import Home from './admin/Home.jsx'
import Ad_profile from './admin/pages/Ad_profile.jsx'
import UpdateCropRecord from './pages/Agri_Product/UpdateCropRecord.jsx'


const router = createBrowserRouter (
  createRoutesFromElements(
    <>
      <Route path='/' element={ <Login /> } />
      <Route path='/admin' element={ <AdminLogin /> } />

      {/* Farmer */}
      <Route path='/app' element={ <App /> } >
        <Route path='' element={ <Body /> } />
        <Route path='profile' element={ <Profile /> } />
        <Route path='contact' element={ <Contact /> } />
        <Route path='help' element={ <Help /> } />
        <Route path='crop' element={ <Crop /> } />
        <Route path='search' element={ <Search /> } />
        <Route path='scan' element={ <ScanCrop /> } />
        <Route path='fertilizer' element={ <Fertilizers /> } />
        <Route path='seed' element={ <Seeds /> } />
        <Route path='add_crop' element={ <AddCrop /> } />
        <Route path='update_crop_record' element={ <UpdateCropRecord /> } />
      </Route>

      {/* Admin */}
      <Route path='/admin_app' element={ <Home /> } >
          <Route path='' element={ <Body /> } />
          <Route path='profile' element={ <Ad_profile /> } />
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
