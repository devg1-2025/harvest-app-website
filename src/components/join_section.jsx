function JoinSection() {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-16 px-6 md:px-12 rounded-2xl shadow-sm border border-green-100 max-w-4xl mx-auto mt-20 mb-24 text-center">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Join Our Community 🌿
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Connect with other believers and leaders using the Harvest App.  
          Get updates, insights, and stories that inspire consistent follow-up and growth.
        </p>
      </div>

      <div className="mt-8">
        <a
          href="https://whatsapp.com/channel/0029VbBLgu5CHDydjvYI5B1X"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="py-3 px-10 text-lg font-semibold rounded-lg bg-green-700 text-white shadow-md hover:bg-green-800 hover:shadow-lg transition-all duration-300 w-full md:w-auto">
            Join Our WhatsApp Channel
          </button>
        </a>
      </div>
    </section>
  );
}

export default JoinSection;
