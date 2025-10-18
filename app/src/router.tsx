import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

import ProtectedRoute from "./components/ProtectedRoute";
import Post from "./pages/Post";


const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Profile = lazy(() => import("./pages/Profile"));
const Jobs = lazy(() => import("./pages/Jobs"));
const Explore = lazy(() => import("./pages/Explore"));
const Events = lazy(() => import("./pages/Events"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (<Suspense fallback={<p>Loading...</p>}> <Login /> </Suspense> ),
  },

  {
    path: "/register",
    element: (<Suspense fallback={<p>Loading...</p>}> <Register /> </Suspense>),
  },


  {
    element: <Home />,
    children: [
      {
        path: "home",
        element: (
          <ProtectedRoute> 
          <Suspense fallback={<p>Loading...</p>}> <Post /> </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "jobs",
        element: (
          <ProtectedRoute> 
          <Suspense fallback={<p>Loading...</p>}> <Jobs />  </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "events",
        element: (
          <ProtectedRoute> 
          <Suspense fallback={<p>Loading...</p>}> <Events /> </Suspense>
          </ProtectedRoute>
        ),
      },
     
      {
        path: "profile",
        element: (
          <ProtectedRoute> 
          <Suspense fallback={<p>Loading...</p>}> <Profile /> </Suspense>
          </ProtectedRoute>
        ),
      },

      {
        path: "explore",
        element: (
          <ProtectedRoute> 
          <Suspense fallback={<p>Loading...</p>}> <Explore /> </Suspense>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

