import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Crypto from "../../src/assets/Crypto_Capture.PNG";
import ECommerce from "../../src/assets/ECommerce_Capture.PNG"
import Blog from "../../src/assets/Blog_Capture.PNG"
import DecideYourDish from "../../src/assets/DecideYourDish_Capture.PNG"
import FinaNCely from "../../src/assets/FinaNCely_Capture.PNG"
function Home({ dark }) {
  const highlights = [

    {
      title: "Crypto Tracker",
      desc: "Real-time crypto prices, charts, and market insights with a clean dashboard UI.",
      img: Crypto,
    },
    {
  title: "Blog App",
  desc: "MERN stack blog platform featuring secure authentication, CRUD operations for posts, user profiles, and a fully responsive interface.",
  img: Blog,
},

    {
      title: "Financely",
      desc: "Personal finance tracker with income, expenses, and interactive charts.",
      img: FinaNCely,
    },
    {
      title: "E-Commerce App",
      desc: "Product search, filters, wishlist, and cart built using pure JavaScript.",
      img: ECommerce,
    },
    
    {
      title: "Decide Your Dish",
      desc: "Menu browsing, cart system, and responsive design.",
      img: DecideYourDish,
    },
  ];

  return (
    <section
      className={`min-h-screen pt-32 px-6 ${
        dark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* HERO */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold mb-4"
          >
            Hi, I'm <span className="text-blue-500">Sai Vivek</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl opacity-90 mb-6"
          >
            MERN Stack Developer building fast, scalable & modern web applications.
          </motion.p>

          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              to="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
            >
              View Projects
            </Link>
           <a
  href="/Dasyapu_Sai_Vivek_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className={`px-6 py-3 border rounded-xl ${
    dark
      ? "border-blue-400 text-blue-400 hover:bg-blue-900"
      : "border-blue-600 text-blue-600 hover:bg-blue-50"
  }`}
>
  Resume
</a>

          </div>

          <div className="flex gap-6 mt-6 text-2xl opacity-80 justify-center md:justify-start">
            <a href="https://github.com/saivivek122" target="_blank" rel="noreferrer">
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/sai-vivek-dasyapu-66a31a217/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      {/* PROJECT SHOWCASE */}
      <div className="max-w-7xl mx-auto mt-28">
        <h2 className="text-4xl font-extrabold text-center mb-14">
          Selected Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* FEATURED */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`md:col-span-2 rounded-xl md:rounded-3xl overflow-hidden shadow-2xl ${
              dark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <img
              src={highlights[0].img}
              alt={highlights[0].title}
              className="w-full aspect-[16/9] object-contain bg-black block"
            />
            <div className="p-6 md:p-8">
              <h3 className="text-3xl font-bold mb-3">
                {highlights[0].title}
              </h3>
              <p className="opacity-80 mb-4 max-w-3xl">
                {highlights[0].desc}
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-blue-500 text-lg hover:underline"
              >
                View Project <ExternalLink size={18} />
              </Link>
            </div>
          </motion.div>

          {/* OTHERS */}
          {highlights.slice(1).map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl overflow-hidden shadow-xl ${
                dark ? "bg-gray-800" : "bg-white"
              }`}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full aspect-[16/9] object-contain bg-black block"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="opacity-80 text-sm mb-4">{p.desc}</p>
                <Link to="/projects" className="text-blue-500 hover:underline">
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
