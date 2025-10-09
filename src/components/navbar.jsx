import { Menu, X } from "lucide-react"; 
import { useState } from "react";
import { Link } from "react-router-dom";


function NavBar() { 
  
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }


  return (
    <nav className="sticky px-10 py-5 text-green-800 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60  "> 
        <div className="container flex justify-between items-center mx-auto">

        <h1 className="text-xl font-bold tracking-tight">The Harvest App</h1>  


        <ul className="hidden md:flex gap-8 list-none">
          <Link 
          to="/">
              <li className=" cursor-pointer">Home</li>
          </Link>
          <Link to="/blogs">
            <li className=" cursor-pointer">Blog</li>
          </Link>

        </ul>
       
        <div className="hidden md:flex">
        <a href="#">
            <button className="cursor-pointer py-2 px-5 border rounded-md bg-green-800 text-white">Download</button>
        </a>
        </div>

        <div className="md:hidden md:flex flex-col justify-end">
        <button onClick={toggleNavbar}>
          {mobileDrawerOpen ? <X /> : <Menu /> }
        </button>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 top-16 w-full p-3 px-10 flex flex-col justify-center text-center bg-green-50 border-b md:hidden ">
            <ul>
              <Link 
              to="/"
              >
              <li className="py-3 ">Home</li>
              </Link>
              <Link 
              to="/blogs"
              >
              <li>Blog</li>
              </Link>
              <div className="py-4">
              <a href="#">
                  <button className="cursor-pointer py-2 px-20 border rounded-md bg-green-800 text-white">Download</button>
              </a>
            </div>
            </ul>

          </div>
        )}
        </div>
    </nav>
  );
}

export default NavBar;