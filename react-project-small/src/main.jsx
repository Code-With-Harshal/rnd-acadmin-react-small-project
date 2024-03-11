import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NewPost from "./components/NewPost.jsx";

const router = createBrowserRouter([
    { path: '/', exact: true, element: <App/> },
    {path:'/create',exact:true, element: <NewPost/>},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
