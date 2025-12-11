import {motion} from "framer-motion"
function Skills({ dark }) {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redux",
    "MUI",
    "Git",
    "REST APIs",
    "Axios",
    "Responsive UI",
    "Problem Solving",
  ];

  return (
    <section
      className={`pt-32 px-6 min-h-screen ${
        dark ? "bg-gray-900 text-white" : "bg-gray-50"
      }`}
    >
      <h2 className="text-4xl font-extrabold text-center mb-10">Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className={`p-5 rounded-xl shadow-xl text-center text-lg font-semibold ${
              dark ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-100"
            }`}
          >
            {s}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default Skills