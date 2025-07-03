import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import LandingPage from "./LandingPage";
import SelectionPage from "./SelectionPage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage.jsx";
import Dashboard from "./Dashboard";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />, 
    children: [
      { path: "", element: <LandingPage /> },
      { path: "selection-page", element: <SelectionPage /> },
      { path: 'login-signup-page', element: <LoginPage /> },
      { path: 'signup-page', element: <SignupPage /> },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
