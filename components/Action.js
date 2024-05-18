import Typing from "./Typing";

export default function Action() {
  return (
    <div className="max-w-full md:mx-10 lg:mx-20 xl:mx-auto">
      <div
        className="px-10 shadow-2xl py-14 md:py-32 md:text-center"
        style={{
          background:
            "radial-gradient(circle, rgb(248 7 89) 21%, rgb(181 61 250) 67%",
        }}
      >
        <h1 className="mb-6 text-3xl font-semibold text-center text-white md:text-6xl">
          Prompt your <br className="sm:hidden" />
          <Typing />
        </h1>
        <h2 className="mb-10 text-xl text-center text-gray-200 md:text-2xl">
        Be among the first to revolutionize your job applications with AI-powered cover letter generation. Join the CoverAI waitlist today!
        </h2>
        <div className="flex flex-wrap justify-center mb-10 -mt-4 space-y-4 pace-x-4">
          <a
            className="md:mt-2 text-center text-gray-100 text-md md:text-xl font-semibold px-5 py-3 ease-in-out transform text-sm transition border-2 duration-400 hover:-translate-y-0.5 hover:text-gray-300 hover:border-gray-300 rounded-xl"
            href="https://www.linkedin.com/company/innonex-crafters/?viewAsMember=true"
          >
            Join Waitlist
          </a>
        </div>
        <div className="flex -ml-4 space-x-4 text-center text-gray-100 md:justify-center md:space-x-8">
          <div className="ml-4">
            Get started for free No credit card required • Cancel anytime • Free
            for 30 days
          </div>
        </div>
      </div>
    </div>
  );
}
