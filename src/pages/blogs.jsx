import BlogComingSoon from "./blog_coming_soon";
import NavBar from "../components/navbar";
import Footer from "../components/footer";


function Blogs () {
    return (
        <div id="Blogs">
            <NavBar />
            <div className="px-15 py-5">

            <h1 className="text-4xl font-bold md:text-4xl text-center pt-10">
                Our Blog is coming soon...
            </h1>
            <div className="flex justify-center">
                <p className=" text-xl text-center pt-5">
                Get valuable resources, tips that will help you reach the lost for Christ.
                </p>
            </div>
            </div>
            <BlogComingSoon />
            <Footer />
        </div>
    )
}

export default Blogs;