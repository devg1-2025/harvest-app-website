function BlogComingSoon() {
  return (
     <section className="join-section p-10 border border-neutral-200 bg-green-50/40 rounded-lg shadow-md mt-10 mx-10 mb-20 md:items-center mx-5 md:mx-auto max-w-4xl">
        <div>
      <h2 className="text-3xl font-bold mb-2 text-center">Want to contribute?</h2>
      <p className="text-center text-lg p-2 mb-2 text-neutral-500">If you'd like to write for us ,pls send us a message, we would be happy from you.</p>
        </div>
      <hr className="text-gray-400 pt-5" />
      <div className="md:flex gap-5 justify-center ">
      <a href="mailto:tryttechglobal@gmail.com">
        <button className="mt-5 font-bold border text-xl text-green-800 cursor-pointer py-2 px-10 border rounded-md text-center hover:shadow-lg transition w-full">
          Email us
        </button>
        </a>
      <a href="https://wa.me/2348166528347">
        <button className="bg-green-800 text-xl text-white mt-5 font-bold border text-green-800 cursor-pointer py-2 px-10 border rounded-md text-center hover:shadow-lg transition w-full">
          Send a message
        </button>
        </a>
      </div>
    </section>
  );
}


export default BlogComingSoon;