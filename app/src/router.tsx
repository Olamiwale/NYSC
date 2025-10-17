import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Profile = lazy(() => import("./pages/Profile"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Login />
      </Suspense>
    ),
  },

  {
    path: "/register",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Register />
      </Suspense>
    ),
  },

  {
    element: <Home />,
    children: [
      {
        path: "home",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Profile />
          </Suspense>
        ),
      },
    ],
  },
]);
