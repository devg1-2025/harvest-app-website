import img from "../assets/images/harvest_app_mockup1.png";

function Features() {
  return (
    <section className="py-20 border-t border-neutral-100 bg-white">
      {/* Section Header */}
      <div className="text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 leading-snug">
          Powerful features that make follow-up effortless
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Everything your ministry needs to stay connected, organized, and intentional — 
          even when you’re offline.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="mt-14 grid md:grid-cols-3 gap-8 px-8 lg:px-20">
        {/* Feature 1 */}
        <div className="bg-green-50 border border-green-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            Quick Add Contacts
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Capture new convert and first-timer details instantly during or after service — 
            no complicated forms required.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-green-50 border border-green-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            Bible Verse Suggestions
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Get helpful scripture suggestions for each follow-up conversation — 
            keeping your message relevant and encouraging.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-green-50 border border-green-100 p-8 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            Offline-First Design
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Works seamlessly without internet. Add or view data anytime, 
            and everything syncs automatically once you’re back online.
          </p>
        </div>
      </div>

    </section>
  );
}

export default Features;
