import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import home from './components/Home/home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'

import Github, { githubInfoLoader } from './components/Github/Github.jsx'


// const router = createBrowserRouter([
//   {
//   path :'/',
//   element : <Layout/> ,
//   children : [
//     {
//       path:'',
//       element: <home/>
//     },
//     {
//       path:"about",
//       element : <About/>
//     },
//     {
//       path:"contact",
//       element: <Contact/>
//     }
//   ] 
// }
// ])



const router = createBrowserRouter(    //other way
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route path='/' element={<home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>

        <Route
        loader={githubInfoLoader}
         path='github' 
         element={<Github/>}
         />
        <Route path='user/:id' element={<User/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>,
)
