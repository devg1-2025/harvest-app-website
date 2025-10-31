import img from "../assets/images/harvest_app_mockup1.png";

function Download() {
  return (
    <section id="download" className="bg-gradient-to-b from-green-900 to-green-800 text-white py-20 px-6 md:px-16">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-14">
        
        {/* App Mockup */}
        <div className="w-full lg:w-[40%] flex justify-center">
          <img
            src={img}
            alt="Harvest app mockup"
            className="w-[80%] md:w-[70%] lg:w-full drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Download Content */}
        <div className="text-center lg:text-left max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            Download the Harvest App — It’s Completely Free
          </h2>
          <p className="text-gray-200 text-lg mb-8">
            Start following up with first-timers and converts more effectively. 
            Stay organized, connected, and intentional — even offline.
          </p>

          <a href="/The Harvest App.apk" download>
            <button
              className="py-3 px-12 text-lg font-semibold bg-white text-green-800 rounded-md shadow-md hover:shadow-lg hover:bg-green-50 transition-all duration-300"
              onClick={() =>
                window.gtag &&
                window.gtag("event", "download", {
                  event_category: "App",
                  event_label: "Harvest APK",
                  value: 1,
                })
              }
            >
              Download Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Download;
