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
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
