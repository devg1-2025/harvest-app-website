import img from "../assets/images/harvest_app_mockup1.png"

function Features () {
    return (
        <div className=" mt-10 border-b border-neutral-100">
            <div className="text-center px-5">
             <h2 className="text-3xl font-bold text-center">Powerful features to help you evangelize</h2>
            </div>

            <div className="py-10 ">
                <div className="md:flex gap-10 px-10">
                <div className="flex bg-green-50/40 border border-green-100 p-6 rounded-lg shadow hover:shadow-lg transition mb-5">
                    {/* <div className="flex mx-6 h-10 w-10 p-2 "> */}
                        {/* feature icon */}
                    {/* </div> */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Quick Add Contacts</h3>
                        <p className="text-md mb-2 text-neutral-500">Capture new convert information instantly during or after service</p>
                    </div>
                </div>
                {/* <div className="flex bg-green-50/40 border border-green-100 p-6 rounded-lg shadow hover:shadow-lg transition">

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Smart Reminders</h3>
                        <p className="text-md mb-2 text-neutral-500">Capture new convert information instantly during or after service</p>
                    </div>
                </div> */}
                <div className="flex bg-green-50/40 border border-green-100 p-6 rounded-lg shadow hover:shadow-lg transition mb-5">
                    {/* <div className="flex mx-6 h-10 w-10 p-2 "> */}
                        {/* feature icon */}
                    {/* </div> */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Bible Verses</h3>
                        <p className="text-md mb-2 text-neutral-500">Get relevant scripture suggestions for encouragement and follow-up conversations.</p>
                    </div>
                </div>
                <div className="flex bg-green-50/40 border border-green-100 p-6 rounded-lg shadow hover:shadow-lg transition">
                    {/* <div className="flex mx-6 h-10 w-10 p-2 "> */}
                        {/* feature icon */}
                    {/* </div> */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Offline-First Design</h3>
                        <p className="text-md mb-2 text-neutral-500">Works perfectly without internet connection. Sync automatically when you're back online.</p>
                    </div>
                </div>
               
                

                </div>

                <div className="grid place-items-center mt-10 bg-green-800 py-10 px-20 md:flex justify-center md:gap-10">
                <div className="max-w-150 my-10">
                    <img src={img} alt="" />
                </div>
                <div className=" text-center bg-gray ">
                    <h3 className="text-2xl font-bold mb-4 text-center text-white">Download Now - It is free</h3>
                    <a href="#"><button className=" mt-5 font-bold text-white cursor-pointer py-2 px-20 border border-white b-md rounded-md text-center hover:shadow-lg transition hover:bg-white hover:text-green-800">Download</button>
                    </a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Features;