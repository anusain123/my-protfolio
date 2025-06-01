import React from "react";
import {FaEnvelope,FaPhone,FaMapMarkerAlt,FaGithub,FaLinkedin,FaDiscord,FaPaperPlane,} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#1e293b] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center">Get In Touch</h2>
        <p className="text-center text-gray-400 mb-14 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities?
          I'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="bg-[#334155] p-3 rounded-lg text-indigo-400">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">anurani.ittechxpert@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#334155] p-3 rounded-lg text-indigo-400">
                  <FaPhone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium">+91 6280187331</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#334155] p-3 rounded-lg text-indigo-400">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-medium">Abohar, India</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mt-10 mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              <a href="https://github.com/anusain123/" className="bg-[#334155] p-3 rounded-lg hover:bg-indigo-500 transition">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/anu-sain-26b42931b/" className="bg-[#334155] p-3 rounded-lg hover:bg-indigo-500 transition">
                <FaLinkedin />
              </a>
              <a href="#" className="bg-[#334155] p-3 rounded-lg hover:bg-indigo-500 transition">
                <FaDiscord />
              </a>
            </div>
          </div>

          <div className="bg-[#0f172a] p-8 rounded-2xl shadow-xl border border-[#334155]">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 rounded-md bg-[#1e293b] border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full p-3 rounded-md bg-[#1e293b] border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="What is this about?"
                className="w-full p-3 rounded-md bg-[#1e293b] border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                rows="5"
                placeholder="Your message..."
                className="w-full p-3 rounded-md bg-[#1e293b] border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-6 py-3 rounded-md transition w-full"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
