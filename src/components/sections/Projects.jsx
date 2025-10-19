import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";
import { FiGithub, FiExternalLink, FiStar, FiCode } from "react-icons/fi";

const projects = [
  {
    title: "Chatty",
    description:
      'Developed a real-time group chat app with Socket.IO, supporting multi-room messaging, typing indicators, and active user lists. Used Redis Streams Adapter for scaling across distributed servers and integrated Apache Kafka for reliable message streaming. Built with Next.js on the frontend for real-time communication with synced state.',
    tech: ["Next.js", "Socket.IO", "Redis", "Kafka", "Node.js"],
    links: [
      { label: "Frontend", href: "https://github.com/SohamChatterG/chatty-frontend", icon: FiGithub },
      { label: "Backend", href: "https://github.com/SohamChatterG/chatty-backend", icon: FiGithub },
    ],
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    featured: true,
  },
  {
    title: "Course Feedback AI Integration",
    description:
      "Developed an AI-powered course feedback and analytics platform using Next.js 15 and Prisma ORM. Integrated Google Gemini API to generate smart insights for instructors—highlighting strengths, weaknesses, and actionable improvements from student feedback. Implemented role-based access for trainers and students, interactive review system with upvotes, and analytics dashboard featuring sentiment and rating trends.",
    tech: ["Next.js", "TypeScript", "Gemini API", "PostgreSQL", "Prisma", "NextAuth", "TailwindCSS", "Cloudinary"],
    links: [
      { label: "GitHub", href: "https://github.com/SohamChatterG/course-feedback-ai-integrated", icon: FiGithub },
      { label: "Live", href: "https://course-feedback-ai-integrated.vercel.app/", icon: FiExternalLink },
    ],
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    featured: true,
  },
  {
    title: "Uptime",
    description:
      "Engineered a high-performance uptime monitoring backend in Go leveraging Go routines and concurrency to perform multiple network checks in parallel. Designed to handle large-scale monitoring tasks efficiently using lightweight threads, synchronization, and channel communication. Emphasized scalability, low latency, and fault tolerance through concurrent execution patterns and structured Go modules.",
    tech: ["Go", "Goroutines", "Concurrency", "Channels", "Networking", "API"],
    links: [
      { label: "GitHub", href: "https://github.com/SohamChatterG/Uptime", icon: FiGithub },
    ],
    gradient: "from-sky-400 via-blue-500 to-indigo-600",
  },
  {
    title: "PayBuddy",
    description:
      "Built a full-stack payment transaction system using the MERN stack. Includes intuitive pages like Send Money, Sign In, Sign Up, Transaction History, and a user Dashboard. Implemented JWT-based auth middleware to secure routes and Mongoose sessions to preserve transaction consistency.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    links: [
      { label: "GitHub", href: "https://github.com/SohamChatterG/payment-app", icon: FiGithub },
    ],
    gradient: "from-amber-400 via-orange-500 to-red-500",
  },
  {
    title: "GoDraw",
    description:
      "Built a collaborative drawing and writing platform using Next.js 15 and Convex DB, supporting real-time sync for teams of up to 10 users. Features include team creation, file sharing, and live drawing—underpinned by RPC architecture for consistent communication.",
    tech: ["Next.js", "Convex", "WebSockets", "RPC", "TailwindCSS"],
    links: [
      { label: "GitHub", href: "https://github.com/SohamChatterG/draw", icon: FiGithub },
      { label: "Live", href: "https://silver-lokum-e21a40.netlify.app/", icon: FiExternalLink },
    ],
    gradient: "from-pink-400 via-rose-500 to-red-500",
  },
  {
    title: "SocialSphere",
    description:
      "Architected a modern social media platform with a microservices architecture, featuring services like identity-service, post-service, media-service, search-service, and an API Gateway. Integrated rate limiting, proxy protection, and used RabbitMQ for event-driven architecture (EDA). Supports cloud uploads for media.",
    tech: ["Microservices", "RabbitMQ", "Cloudinary", "Express", "MongoDB", "Docker"],
    links: [
      { label: "GitHub", href: "https://github.com/SohamChatterG/microservices-social-media", icon: FiGithub },
    ],
    gradient: "from-indigo-400 via-purple-500 to-pink-500",
  },
  {
    title: "ChessKing",
    description:
      "Built a real-time multiplayer chess game using React and chess.js, with legal move validation and synchronized gameplay. Integrated raw WebSocket for two-way live communication and built backend logic with Node.js and Express. Used Prisma ORM and PostgreSQL for data persistence. Zod validation schemas were shared across frontend and backend via a custom npm package for strict type safety.",
    tech: ["React", "Node.js", "Express", "WebSocket", "chess.js", "Prisma", "PostgreSQL", "Zod"],
    links: [
      { label: "GitHub", href: "https://github.com/SohamChatterG/ChessKing", icon: FiGithub }
    ],
    gradient: "from-slate-400 via-gray-500 to-zinc-600",
  },
  {
    title: "Sommaire",
    description:
      "Built an AI-powered podcast summarization platform using Gemini API to generate concise summaries from YouTube links. Integrated Stripe for payment processing and coin-based usage. Users can track search history, manage transactions, and view summaries via intuitive dashboard pages. Built with Next.js, Prisma ORM, and PostgreSQL for scalable and type-safe development.",
    tech: ["Next.js", "Gemini API", "Stripe", "Prisma", "PostgreSQL", "TypeScript"],
    links: [
      { label: "GitHub", href: "https://github.com/SohamChatterG/sommaire", icon: FiGithub }
    ],
    gradient: "from-lime-400 via-green-500 to-emerald-600",
  },
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-xl border border-slate-700/50 transition-all duration-700 hover:border-slate-500/50 hover:shadow-2xl hover:shadow-slate-900/50 hover:-translate-y-2 ${
        project.featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s both`,
      }}
    >
      {/* Animated gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.15] transition-all duration-700 blur-2xl`}
      />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }} />

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-6 right-6 z-10">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${project.gradient} text-white text-sm font-bold shadow-2xl backdrop-blur-sm animate-pulse-slow`}>
            <FiStar className="w-4 h-4" />
            <span>Featured</span>
          </div>
        </div>
      )}

      <div className="relative p-8 h-full flex flex-col">
        {/* Icon and Title */}
        <div className="flex items-start gap-4 mb-6">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
            <FiCode className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className={`text-2xl md:text-3xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:${project.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500`}>
              {project.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-300 leading-relaxed mb-8 text-base group-hover:text-white transition-colors duration-500">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2.5 mb-8 mt-auto">
          {project.tech.map((tech, i) => (
            <span
              key={tech}
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-slate-800/80 text-slate-200 border border-slate-700/50 hover:border-slate-500 hover:bg-slate-700/80 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default backdrop-blur-sm"
              style={{
                animation: isHovered ? `techBounce 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08}s both` : 'none',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-700/50">
          {project.links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group/link flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-bold text-sm shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-500 relative overflow-hidden`}
              >
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/link:translate-x-[100%] transition-transform duration-1000" />
                
                <Icon className="w-5 h-5 relative z-10 group-hover/link:rotate-[360deg] transition-transform duration-700" />
                <span className="relative z-10">{link.label}</span>
                <svg
                  className="w-4 h-4 relative z-10 group-hover/link:translate-x-2 transition-transform duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            );
          })}
        </div>
      </div>

      {/* Decorative corner glow */}
      <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.gradient} rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-700`} />
      <div className={`absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br ${project.gradient} rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-700`} />
    </div>
  );
};

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-24 px-4 relative overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      <RevealOnScroll>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6 animate-fade-in">
              <span className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-violet-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-bold backdrop-blur-xl shadow-2xl">
                ✨ My Work
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent animate-gradient-x">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A showcase of innovative full-stack applications built with modern technologies,
              <br className="hidden md:block" />
              focusing on scalability, performance, and exceptional user experience
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </RevealOnScroll>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes techBounce {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-4px) scale(1.05);
          }
        }

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
      `}</style>
    </section>
  );
};
