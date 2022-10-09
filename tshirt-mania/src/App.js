import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Orders from "./components/Orders/Orders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "orders",
          loader: async () => fetch("tshirts.json"),
          element: <Orders />,
        },
      ],
    },
  ]);

  return (
    <div className=" container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
