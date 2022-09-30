import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import LandingPage from "./components/LandingPage";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
