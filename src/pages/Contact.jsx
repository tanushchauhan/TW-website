/* eslint-disable react/no-unknown-property */
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Have questions? Fill out this quick form and we will be in touch in
            no time!
          </p>
          <form className="space-y-8" name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                htmlFor="email"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Your Email Here"
                required
              />
            </div>
          </form>
        </div>
      </section>
    </motion.div>
  );
}

export default Contact;
