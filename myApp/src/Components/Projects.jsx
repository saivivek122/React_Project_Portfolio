import {motion} from "framer-motion"
import {Github} from "lucide-react"
function Projects({ dark }) {
  const list = [
   {
  title:"Crypto Tracker",
  tech:"React JS, MUI, Chart JS, Framer Motion, API",
  desc:"A modern crypto tracking application with real-time coin data, interactive line and comparison charts, and a fully responsive interface. Users can search coins, view detailed analytics over multiple time ranges, and manage a personalized watchlist with smooth animations powered by Framer Motion.",
  live:"https://react-project-crypto-tracker.vercel.app/",
  github:"https://github.com/saivivek122/React_Project_Crypto_Tracker"
},
{
  title: "Blog Application",
  tech: "React,HTML, CSS, JavaScript, Node.js, Express.js, MongoDB",
  desc: "Built a full-stack blog application using the MERN stack with secure authentication and authorization. Includes user signup and login, protected routes, CRUD operations for blog posts, responsive UI design, and RESTful APIs. Ensures smooth frontend–backend integration, real-time updates, and efficient data storage with MongoDB.",
  live: "https://full-stack-blog-frontend-lfxe.vercel.app/",
  github: "https://github.com/saivivek122/Full_Stack_Blog"
},


   {
  title: "Financely – Your Personal Finance Tracker",
  tech: "React JS, Firebase, Ant Design Charts",
  desc: "A personal finance tracker with Firebase authentication, real-time balance, income, and expense tracking. Users can view all transactions, visualize spending with interactive charts (bar and pie), and easily import/export data as CSV.",
  live:"https://react-project-finacely-96wp.vercel.app/",
  github:"https://github.com/saivivek122/REACT_PROJECT_FINACELY"
},
// https://e-commerce-application-tqsq.vercel.app/
{
  title: "Decide Your Dish",
  tech: "React, Redux, HTML, CSS, JavaScript,",
  desc: "Developed a frontend-focused food discovery application using React and Redux, emphasizing efficient state management. Features include dynamic dish rendering, category-based filtering, global state handling with Redux, reusable components, and responsive UI design. Ensures smooth user interactions, predictable state flow, and a clean, maintainable frontend architecture.",
  live: "https://food-order-app-c4ec4.firebaseapp.com/",
  // github: "https://github.com/saivivek122/decide-your-dish"
},

 {
  title: "E Commerce Application",
  tech: "JavaScript, HTML, CSS",
  desc: "Built with core JavaScript features including login and signup authentication, dynamic product search, category filters, price sorting, and wishlist handling. Provides smooth UI interactions, real-time updates, and a fully functional cart system.",
  live:"https://e-commerce-application-tqsq.vercel.app/",
   github:"https://github.com/saivivek122/E-Commerce-Application"
}
,

    // {
    //   title: "Weather App",
    //   tech: "JS, Weather API",
    //   desc: "Real‑time weather with responsive UI.",
    // },
    // {
    //   title: "Food Ordering Website",
    //   tech: "HTML, CSS, JS",
    //   desc: "Menu, cart, responsive design.",
    // },
  ];

  return (
    <section
      className={`pt-32 px-6 min-h-screen ${
        dark ? "bg-gray-900 text-white" : "bg-white"
      }`}
    >
      <h2 className="text-4xl font-extrabold text-center mb-10">My Projects</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {list.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-2xl shadow-xl border backdrop-blur-xl ${
              dark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
            <p className="text-blue-500 mb-2 text-sm">{p.tech}</p>
            <p className="opacity-80 mb-4">{p.desc}</p>
            <div className="flex gap-3 mt-4">
              <a href={p.live}target="_blank" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
                View Project
              </a>
             {p.github && <a href={p.github} target="_blank" className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 flex items-center gap-2">
                <Github size={18}/> GitHub
              </a>}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default Projects
