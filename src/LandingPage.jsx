function LandingPage() {
  return (
    <div className="px-4 sm:px-6 md:px-10">
      <h1 className="text-center mt-25 font-extrabold text-amber-600 font-roboto text-4xl sm:text-5xl md:text-6xl">
        Your{" "}
        <span className="ml-2 italic mr-2 font-raleway text-4xl sm:text-5xl md:text-6xl">
          Bridge
        </span>{" "}
        between <br />
        <span className="ml-2 mr-2 italic text-amber-800 text-5xl sm:text-6xl md:text-7xl font-extrabold font-raleway">
          Ideas and Execution
        </span>
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-4 mt-8 justify-center">
        <input
          type="text"
          placeholder="Search developers using skills, tech stack.."
          className="border border-amber-600 p-3 sm:p-4 w-full sm:w-96 md:w-lg rounded-4xl"
        />
        <button className="text-xl sm:text-2xl text-white bg-amber-600 p-3 rounded-4xl w-full sm:w-40">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
