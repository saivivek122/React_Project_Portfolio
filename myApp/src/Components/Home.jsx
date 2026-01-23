import {motion} from "framer-motion"
import {Github,Linkedin,Mail} from "lucide-react"
function Home({ dark }) {
  return (
   <section
  className={`pt-32 px-6 flex flex-col md:flex-row items-center justify-center gap-12 ${
    dark ? "bg-gray-900 text-white" : "bg-white text-black"
  }`}
>

      
      <div className="max-w-xl text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold mb-4"
        >
          Hi, I'm <span className="text-blue-500">Dasyapu Sai Vivek</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl opacity-90 mb-6"
        >
          MERN Stack Developer crafting modern, fast & responsive web applications.
        </motion.p>

 
        {/* <div className="flex justify-center md:justify-start gap-4 mt-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 cursor-pointer">
            Hire Me
          </button>
          <button
            className={`px-6 py-3 border rounded-xl cursor-pointer ${
              dark
                ? "border-blue-400 text-blue-400 hover:bg-blue-900"
                : "border-blue-600 text-blue-600 hover:bg-blue-50"
            }`}
          >
            View Resume
          </button>
        </div> */}

     
        <div className="flex justify-center md:justify-start gap-6 mt-6 text-2xl opacity-80">
         <a className="icons" href="https://github.com/saivivek122" target="_blank"><Github /></a>
          <a className="icons" href="https://www.linkedin.com/in/sai-vivek-dasyapu-66a31a217/" target="_blank"><Linkedin /></a>
          {/* <a className="icons" href="/"> <Mail /></a> */}
         
        </div>
      </div>

      {/* Right side placeholder for avatar/photo */}
      
    </section>
  );
}
export default Home
