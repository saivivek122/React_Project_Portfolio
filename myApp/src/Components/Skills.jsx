import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiMui,
  SiGit,
  SiAxios,
} from "react-icons/si";

function Skills({ dark }) {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    { name: "MUI", icon: <SiMui className="text-blue-500" /> },
    { name: "Git", icon: <SiGit className="text-orange-500" /> },
    { name: "Axios", icon: <SiAxios className="text-indigo-500" /> },
  ];

  return (
    <section
      className={`min-h-screen pt-32 px-6 ${
        dark ? "bg-gray-900 text-white" : "bg-gray-50"
      }`}
    >
      <h2 className="text-4xl font-extrabold text-center mb-10">
        Skills
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className={`flex flex-col items-center justify-center gap-3 p-6 rounded-xl shadow-xl transition ${
              dark
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-gray-100"
            }`}
          >
            <div className="text-4xl">{skill.icon}</div>
            <p className="font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
