import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import App from "./App";

const Register = lazy(() => import("./components/pages/RegisterPage"));
const Login = lazy(() => import("./components/pages/LoginPage"));
const CreatePost = lazy(() => import("./components/pages/CreatePost"));
const ShowPosts = lazy(() => import("./components/pages/ShowPosts"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Register />
          </Suspense>
        ),
      },

      {
        path: "login",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "posts",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <CreatePost />
          </Suspense>
        ),
      },
      {
        path: "show-posts",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ShowPosts />
          </Suspense>
        ),
      },
    ],
  },
]);
