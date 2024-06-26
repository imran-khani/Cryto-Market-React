import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./components/Home";
import Coin from "./pages/Coin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/coin/:coinId",
        element: <Coin />,
      },
    ],
  },
]);
const App = () => {
  console.log(import.meta.env.VITE_API_KEY);
  return <RouterProvider router={router} />;
};

export default App;
