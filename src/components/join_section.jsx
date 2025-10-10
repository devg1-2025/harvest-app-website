

function JoinSection() {
  return (
    <section className=" justify-center join-section p-10 border border-neutral-200 bg-green-50/40 rounded-lg shadow-md mt-10 mx-10 mb-20  gap-5 md:items-center mx-5 md:mx-auto max-w-4xl">
        <div>
      <h2 className="text-3xl font-bold mb-2 text-center">Join Our Community</h2>
      <p className="text-center text-lg p-2 mb-2 text-neutral-500">Become a part of our growing community and stay updated with the latest news and events.</p>
        </div>
      <hr className="text-gray-400" />
      {/* <form action="" className="flex flex-col justify-center gap-4 mb-4 mt-4 md:min-w-[400px]">
        <input type="email" placeholder="Enter your email" className="email-input border border-gray-400 active:border-green-800 rounded-md pl-5 pr-10 py-1.5" />
        <input type="phone" placeholder="Enter your phone number" className="phone-input border border-gray-400 active:border-green-800 rounded-md pl-5 pr-10 py-1.5"/>
      </form> */}

      {/* Join WhatsApp channel */}
      <div className="flex justify-center w-full">

        <a href="https://whatsapp.com/channel/0029VbBLgu5CHDydjvYI5B1X">
        <button className=" bg-green-800 text-xl text-white mt-5 font-bold border text-green-800 cursor-pointer py-2 px-25 border rounded-md text-center hover:shadow-lg transition w-full">Join Now</button>
        </a>
      </div>
    </section>
  );
}

export default JoinSection;