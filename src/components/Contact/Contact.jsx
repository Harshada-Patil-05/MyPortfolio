import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_7jjrfey",
        "template_sqkk0nr",
        form.current,
        "CZrzFbI-WqVvWTukq"
      )
      .then(
        () => {
          setLoading(false);
          form.current.reset();
          toast.success("Message sent successfully! 🚀", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          setLoading(false);
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden flex flex-col items-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-gradient-to-b from-black via-[#0f0f1a] to-black"
    >
      <ToastContainer />

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600 opacity-20 blur-3xl rounded-full"></div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl font-bold text-white tracking-wide">
          CONTACT
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-6 text-lg font-semibold max-w-xl mx-auto">
          Let’s connect and build something impactful in AI, ML, or Web Development.
        </p>
      </motion.div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-[0_0_40px_rgba(130,69,236,0.3)]"
      >
        <h3 className="text-xl font-semibold text-white text-center mb-6">
          Connect With Me 🚀
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-5"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-3 rounded-md bg-[#131025] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-3 rounded-md bg-[#131025] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="p-3 rounded-md bg-[#131025] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="p-3 rounded-md bg-[#131025] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-purple-600 to-pink-500 py-3 rounded-md text-white font-semibold hover:scale-105 transition-transform duration-300 disabled:opacity-70"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;