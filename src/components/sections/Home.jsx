import { RevealOnScroll } from "../RevealOnScroll";
import { FiArrowRight, FiMail } from "react-icons/fi";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <RevealOnScroll>
        <div className="text-center z-10 px-4 relative">
          {/* Greeting badge */}
          <div className="inline-block mb-8 animate-fade-in">
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-violet-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-bold backdrop-blur-xl shadow-2xl">
              👋 Welcome to my portfolio
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-2">
              Hi, I'm
            </span>
            <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent animate-gradient-x">
              Soham Chatterjee
            </span>
          </h1>

          {/* Role/Description */}
          <p className="text-slate-400 text-lg md:text-xl lg:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed font-light">
            Full-Stack Developer & Problem Solver
          </p>
          <p className="text-slate-500 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            I design and engineer full-stack web solutions that are fast, scalable, and crafted with user experience at their core — blending clean code with meaningful design to deliver performance that lasts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <a
              href="#projects"
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500 text-white font-bold text-lg shadow-2xl hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:scale-110 transition-all duration-500 overflow-hidden w-full sm:w-auto"
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative z-10 flex items-center justify-center gap-3">
                View Projects
                <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </a>

            <a
              href="#contact"
              className="group relative px-8 py-4 rounded-xl border-2 border-slate-700 bg-slate-900/50 backdrop-blur-xl text-white font-bold text-lg hover:border-emerald-400 hover:bg-slate-800/50 hover:scale-110 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-500 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-3">
                <FiMail className="group-hover:rotate-12 transition-transform duration-300" />
                Contact Me
              </span>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 rounded-full bg-gradient-to-b from-emerald-400 to-blue-400 animate-scroll" />
            </div>
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

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
