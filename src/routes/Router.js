import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import PlayMovie from "../pages/Movies/PlayMovie";
import Profile from "../pages/Profile/Profile";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import PlaySong from "../pages/Songs/PlaySong";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },

      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/movie/:id",
        loader: ({ params }) =>
          fetch(`https://stream-tube-server-leoarafat.vercel.app/movies/${params.id}`),
        element: <PlayMovie />,
      },
      {
        path: "/song/:id",
        loader: ({ params }) =>
          fetch(`https://stream-tube-server-leoarafat.vercel.app/songs/${params.id}`),
        element: <PlaySong />,
      },
    ],
  },
]);
