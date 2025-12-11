import {Github,Linkedin,Mail} from "lucide-react"
function Contact({ dark }) {
  return (
    <section
      className={`pt-32 px-6 min-h-screen flex justify-center items-center ${
        dark ? "bg-gray-900 text-white" : "bg-white"
      }`}
    >
      <div
        className={`max-w-xl w-full p-8 rounded-2xl shadow-2xl border ${
          dark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
        }`}
      >
        <h2 className="text-4xl font-extrabold mb-4">Contact Me On</h2>
        <p className="opacity-90 mb-6 text-lg">
          Feel free to reach out for job opportunities, collaborations, or project work!
        </p>

        <div className="flex justify-center gap-6 text-3xl opacity-80 mb-6">
          <a target="_blank" href="https://github.com/saivivek122"><Github /></a>
          <a target="_blank" href="https://www.linkedin.com/in/sai-vivek-dasyapu-66a31a217/">  <Linkedin /></a>
          
        
          {/* <Mail /> */}
        </div>

        {/* <button className="px-6 py-3 bg-blue-600 text-white text-lg rounded-xl hover:bg-blue-700 transition w-full">
          Send Email
        </button> */}
      </div>
    </section>
  );
}
export default Contact