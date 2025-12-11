import {motion} from "framer-motion"
function About({ dark }) {
  return (
    <section
      className={`pt-32 px-6 min-h-screen flex justify-center ${
        dark ? "bg-gray-900 text-white" : "bg-gray-50"
      }`}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl font-extrabold mb-4">About Me</h2>
          <p className="opacity-90 text-lg mb-4">
            I'm a passionate MERN Stack Developer experienced in building interactive and scalable full‑stack
            applications.
          </p>
          <ul className="space-y-2 text-lg opacity-90">
            <li>✔ Strong in React & UI development</li>
            <li>✔ Solid backend with Node + Express</li>
            <li>✔ MongoDB for real‑world data models</li>
            <li>✔ Fast learner and problem solver</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default About