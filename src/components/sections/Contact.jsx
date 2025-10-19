import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import toast from 'react-hot-toast';
import { FiMail, FiUser, FiMessageSquare, FiSend } from "react-icons/fi";


export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message Sent Successfully! 🎉");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => toast.error("Oops! Something went wrong. Please try again."))
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-24 px-4 relative overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '3s' }} />
      </div>

      <RevealOnScroll>
        <div className="max-w-2xl mx-auto w-full relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-cyan-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-bold backdrop-blur-xl shadow-2xl">
                📧 Let's Connect
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-slate-400 text-lg md:text-xl">
              Have a project in mind? Let's build something amazing together!
            </p>
          </div>

          {/* Form Card */}
          <div className="group relative rounded-3xl p-8 md:p-10 border border-slate-700/50 bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-xl hover:border-slate-500/50 transition-all duration-700 shadow-2xl overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="relative group/input">
                <label htmlFor="name" className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                  Your Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiUser className="text-slate-500 group-focus-within/input:text-emerald-400 transition-colors duration-300" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    className="w-full bg-slate-800/50 border-2 border-slate-700/50 rounded-xl pl-12 pr-4 py-4 text-white transition-all duration-300 focus:outline-none focus:border-emerald-400 focus:bg-slate-800/80 focus:shadow-[0_0_20px_rgba(16,185,129,0.2)] placeholder-slate-500"
                    placeholder="John Doe"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="relative group/input">
                <label htmlFor="email" className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiMail className="text-slate-500 group-focus-within/input:text-blue-400 transition-colors duration-300" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    className="w-full bg-slate-800/50 border-2 border-slate-700/50 rounded-xl pl-12 pr-4 py-4 text-white transition-all duration-300 focus:outline-none focus:border-blue-400 focus:bg-slate-800/80 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)] placeholder-slate-500"
                    placeholder="john@example.com"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="relative group/input">
                <label htmlFor="message" className="block text-sm font-bold text-slate-300 mb-2 ml-1">
                  Your Message
                </label>
                <div className="relative">
                  <div className="absolute top-4 left-0 pl-4 pointer-events-none">
                    <FiMessageSquare className="text-slate-500 group-focus-within/input:text-cyan-400 transition-colors duration-300" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    className="w-full bg-slate-800/50 border-2 border-slate-700/50 rounded-xl pl-12 pr-4 py-4 text-white transition-all duration-300 focus:outline-none focus:border-cyan-400 focus:bg-slate-800/80 focus:shadow-[0_0_20px_rgba(6,182,212,0.2)] placeholder-slate-500 resize-none"
                    placeholder="Tell me about your project..."
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`group/btn relative w-full px-8 py-5 rounded-xl bg-gradient-to-r from-emerald-500 via-blue-500 to-cyan-500 text-white font-bold text-lg shadow-2xl overflow-hidden ${
                  loading 
                    ? "opacity-70 cursor-not-allowed" 
                    : "hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] hover:scale-105"
                } transition-all duration-500`}
              >
                {/* Button shine effect */}
                {!loading && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
                )}

                <span className="relative z-10 flex items-center justify-center gap-3">
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                      Send Message
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </RevealOnScroll>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
