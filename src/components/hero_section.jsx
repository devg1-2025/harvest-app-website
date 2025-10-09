import img from "../assets/images/harvest_app_mockup1.png"

function HeroSection () {
    return (
        <div className="flex flex-col md:flex lg:flex-row items-center gap-5 pt-20" id="Home">

        <div className="grid place-items-center  md px-10">
            <h1 className="text-6xl font-bold lg:text-7xl text-center"> <span className="text-green-800">Never Miss</span> a Follow-Up</h1>
            <p className=" mt-5 text-lg text-center  max-w-4xl">
                The Harvest App helps churches follow up with first-timers and new converts, and it works — offline.
            </p>
            <div className="flex justify-center mt-5"> 
                <a href="#">
                <button className="bg-green-800 font-bold text-white cursor-pointer py-3 px-20 border text-xl  rounded-md text-center hover:shadow-lg transition">Download</button>
                </a>
            </div>
        </div>

        <div className="max-w-150 my-10 text-shadow">
            <img src={img} alt="app mockup" />
        </div>
        </div>
    )
}


export default HeroSection;