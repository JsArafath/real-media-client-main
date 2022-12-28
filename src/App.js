import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "../src/Router/router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster/>
    </>
  );
}

export default App;
