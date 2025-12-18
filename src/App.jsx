import { createBrowserRouter, RouterProvider } from "react-router";

import Layout from "./layouts/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      {
        element: <ProtectedRoute />,
        children: [{ path: "profile", element: <Profile /> }],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
