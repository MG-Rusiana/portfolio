import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import App from './App.tsx'
import './index.css'
import { Suspense, lazy } from "react";


const Home=lazy(() =>
  wait(1300).then(() => import("./App.tsx"))
);

const router = createBrowserRouter([


  {
    path: "/portfolio",
    element:  <>
    <Suspense >
      <Home />
    </Suspense>
  </>,
  },
  

]);

function wait( time:number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
