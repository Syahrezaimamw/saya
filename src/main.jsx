import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Upin from './Upin.jsx'
import { HashRouter } from 'react-router-dom'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
const router= createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },{
    path:'/upin',
    element:<Upin/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
  </HashRouter>,
)
