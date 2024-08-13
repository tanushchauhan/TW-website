import { motion } from "framer-motion";
import hero from "../img/hero.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <motion.div
      className="text-4xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="h-screen mb-[-100px]">
        <div className="lg:grid lg:grid-cols-2 lg:gap-2 lg:mx-16">
          <div className="grid grid-cols-1 items-center justify-items-center mt-20 w-[80%] rounded-lg dark:bg-gray-800 bg-slate-100 mx-auto py-10  lg:px-10">
            <div className="text-center px-4 py-3 inline-block text-lg lg:text-2xl xl:text-3xl font-bold text-violet-500">
              Welcome to the Website
            </div>
            <h2 className="text-center my-12 text-3xl md:text-2xl lg:text-4xl font-semibold">
              <span className="text-cyan-500">The</span>{" "}
              <span className="text-green-500">Website</span>
            </h2>
            <p className="text-center lg:text-2xl xl:text-3xl mb-10 text-2xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <Link
              to="about"
              className="rounded-lg lg:text-2xl xl:text-3xl px-4 py-2 bg-green-600 hover:bg-green-700 text-gray-100 text-xl"
            >
              About Us
            </Link>
            <a
              href="#ahead"
              className="mt-12 p-2 rounded-full bg-indigo-600 text-gray-200 animate-bounce"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            </a>
          </div>
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="w-full h-full dark:bg-emerald-600 bg-emerald-100 absolute -z-10 blur-[140px]"></div>
            <img src={hero} className="w-[90%] mx-auto rounded-xl sm:w-[60%]" />
          </div>
        </div>
      </section>

      <section id="ahead" className="mt-24 md:w-[70%] xl:w-[50%] mx-auto">
        <div className="relative lg:hidden">
          <div className="w-full h-full dark:bg-emerald-600 bg-emerald-100 absolute -z-10 blur-[140px]"></div>
          <img src={hero} className="w-[90%] mx-auto rounded-xl" />
        </div>
        <p className="text-center text-xl lg:text-2xl xl:text-4xl mx-5 mb-7 mt-28">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
          perspiciatis veritatis dolorem, ipsa aliquid vel. Temporibus, autem
          consequuntur vero rem deserunt quam veniam non culpa blanditiis
          suscipit, voluptates et maxime.\
        </p>
      </section>
    </motion.div>
  );
}

export default Home;
