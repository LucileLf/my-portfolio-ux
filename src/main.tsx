import * as ReactDOM from 'react-dom/client';
import React from 'react'; 
// import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import About from '@components/About.tsx'
// import Terms from '@components/Terms.tsx'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import './index.css'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     title: "Le yoga de Lila"
//   },
//   {
//     path: "/about",
//     element: <About/>,
//     title: 'Mon histoire'
//   },
//   {
//     path: "/terms-and-conditions",
//     element: <Terms/>,
//     title: 'Terms and conditions'
//   },

//   // You can provide a way better UX than this when your app throws errors by providing your own ErrorBoundary or errorElement prop on your route.
// ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
)
