import { Link } from "react-router-dom";

function Footer () {
    return (
        <footer className="bg-green-950 text-gray-200" >
            <div className=" px-5 py-10 mt-10 md:flex md:justify-between gap-20 md:pr-50">

            <div className="mb-6 max-w-xl"> 
            <h5 className="text-2xl font-bold mb-4 ">The Harvest App</h5>
            <p className="md:min-w-[300px]">Created to Help Churches Nurture Souls. Transforming how churches track new converts and build lasting relationships through consistent follow-up.</p>
            </div>
                <div>
                    <div className="flex flex-col justify-center space-x-6 mb-4">
                        <ul>

                    <Link 
                        to="/"
                        >
                        <li className="hover:text-green-500">Home</li>
                        </Link>
                        <Link 
                        to="/blogs"
                        >
                        <li className="hover:text-green-500">Blog</li>
                        </Link>
                        <a href="#download" className="hover:text-green-500">Download</a>
                    </ul>
                    </div>
                </div>
            <div className="">
                <div className="flex flex-col justify-center space-x-6 mb-2">
                    <h6 className="text-md font-bold">Contact</h6>
                    <a href="mailto:tryttechglobal@gmail.com" className="hover:text-green-500">tryttechglobal@gmail.com</a>
                    <a href="https://wa.me/2348166528347" className="hover:text-green-500">+234 816 652 8347</a>
                </div>

            </div>
            </div>
            <hr className="text-neutral-300" />
            <div className="container mx-auto p-4 text-center ">
                <p>&copy; {new Date().getFullYear()} The Harvest App. All rights reserved.</p>
            </div>
        </footer>
    );
}   

export default Footer;