import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Blogs from "./pages/blogs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
]);



function App() {
  return (
    <RouterProvider router={router} />
    // <>
      
    // <div className="bg-gradient-to-b from-gray-50 to-white">
    //   <Home />
    // </div>
    // </>
  );
}

export default App;