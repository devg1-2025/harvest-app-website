import img from "../assets/images/harvest_app_mockup1.png"

function Download() {
    return (
        <>
        <div className="grid place-items-center mt-10 bg-green-800 p-10 px-20 md:flex justify-center md:gap-10">
            <div className="max-w-150 my-10">
                <img src={img} alt="" />
            </div>
            <div className=" text-center bg-gray ">
                <h3 className="text-2xl font-bold mb-4 text-center text-white">Download Now - It is free</h3>
                <a href="#"><button className="mt-5 font-bold border text-green-800 cursor-pointer py-2 px-20 border rounded-md text-center hover:shadow-lg transition">Download</button>
                </a>
            </div>
        </div>
        </>
    )
}

export default Download;