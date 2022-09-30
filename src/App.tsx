import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import LandingPage from "./components/LandingPage";
import Layout from "./components/Layout";
import * as QuizPage from "./components/QuizPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "quiz",
        loader: QuizPage.loader,
        element: <QuizPage.default />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
