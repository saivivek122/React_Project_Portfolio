import { motion } from "framer-motion";

function About({ dark }) {
  return (
    <section
      className={`min-h-screen pt-32 px-6 ${
        dark ? "bg-gray-900 text-white" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
  
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl font-extrabold mb-4">About Me</h2>
          <p className="opacity-90 text-lg mb-4">
            I’m a MERN Stack Developer who loves building clean, scalable
            full-stack applications with great UI and strong backend logic.
          </p>

          <ul className="space-y-2 text-lg opacity-90">
            <li>✔ Strong React & UI skills</li>
            <li>✔ Node + Express backend</li>
            <li>✔ MongoDB real-world schemas</li>
            <li>✔ Problem solver & fast learner</li>
          </ul>

         
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="p-4 rounded-xl bg-blue-600 text-white text-center">
              <h3 className="text-3xl font-bold">10+</h3>
              <p>Projects</p>
            </div>
            {/* <div className="p-4 rounded-xl bg-green-600 text-white text-center">
              <h3 className="text-3xl font-bold">1+</h3>
              <p>Year Experience</p>
            </div> */}
          </div>
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-center"
        >
          {/* <img
            src="/about-dev.svg"
            alt="About"
            className="w-[360px]"
          /> */}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
