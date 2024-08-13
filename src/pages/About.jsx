import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center flex-col mx-auto px-5 max-w-[50rem] gap-8">
        <div className="text-center my-6 inline-block relative  text-indigo-500">
          <div className="w-full h-full dark:bg-indigo-900 bg-indigo-200 absolute -z-10 blur-xl"></div>
          <h2 className="text-xl lg:text-2xl xl:text-4xl">Our Mission</h2>
        </div>
        <div className="text-xl lg:text-2xl xl:text-4xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          doloribus minima ratione temporibus qui dolores? Quam at atque
          laboriosam architecto? Iure molestiae quod, harum minima in corporis
          repudiandae. Illum, dolor?Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Deleniti doloribus minima ratione temporibus qui
          dolores? Quam at atque laboriosam architecto? Iure molestiae quod,
          harum minima in corporis repudiandae. Illum, dolor?Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Deleniti doloribus minima
          ratione temporibus qui dolores? Quam at atque laboriosam architecto?
          Iure molestiae quod, harum minima in corporis repudiandae. Illum,
          dolor?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Deleniti doloribus minima ratione temporibus qui dolores? Quam at
          atque laboriosam architecto? Iure molestiae quod, harum minima in
          corporis repudiandae. Illum, dolor?Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Deleniti doloribus minima ratione
          temporibus qui dolores? Quam at atque laboriosam architecto? Iure
          molestiae quod, harum minima in corporis repudiandae. Illum, dolor?
        </div>
      </div>
    </motion.div>
  );
}

export default About;
