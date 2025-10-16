import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import App from "./App";


const Register = lazy(() => import("./components/pages/Register"));
const Login = lazy(() => import("./components/pages/Login"));
const CreatePost = lazy(() => import("./components/pages/CreatePost"));
const ShowPosts = lazy(() => import("./components/pages/ShowPosts"));
const Home = lazy(() => import("./components/pages/Home"));
const SignIn = lazy(()=> import ('./components/pages/SignIn'));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, 
        element: ( <Suspense fallback={<p>Loading...</p>}> <Register /> </Suspense>),
      },

      {
        path: "login",
        element: ( <Suspense fallback={<p>Loading...</p>}> <Login /> </Suspense> ),
      },
      {
        path: "posts",
        element: ( <Suspense fallback={<p>Loading...</p>}> <CreatePost /> </Suspense> ),
      },
      {
        path: "show-posts",
        element: ( <Suspense fallback={<p>Loading...</p>}> <ShowPosts /> </Suspense> ),
      },
      {
        path: "home",
        element: ( <Suspense fallback={<p>Loading...</p>}> <Home />  </Suspense> ),
      },
    
      {
        path: "signin",
        element: ( <Suspense fallback={<p>Loading...</p>}> <SignIn />  </Suspense> ),
      },
      {
        path: "register",
        element: ( <Suspense fallback={<p>Loading...</p>}> <Register />  </Suspense> ),
      },
    ],
  },
]);
