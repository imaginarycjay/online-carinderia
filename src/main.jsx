import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

//pages
import App from "./App.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";

// error page component
const ErrorPage = () => {
  return <h1 className="text-[3rem] font-bold font-poppins">404 Not Found</h1>;
};

const root = createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, //renders in default path
        element: <HomePage />,
      },
      {
        path: "/fav",
        element: <FavoritesPage />,
      },
      {
        path: "/About",
        element: <About />
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);