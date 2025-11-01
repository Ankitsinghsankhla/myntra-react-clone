import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./routes/App.jsx";
import HomePage from "./componets/HomePage.jsx";
import { Provider } from "react-redux";
import myntraStore from "./store/index.js";
import BagSummury from "./componets/BagSummury.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
       { path: "/", element:<HomePage /> },
      {
        path: "/bag",
        element: <BagSummury/>,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
