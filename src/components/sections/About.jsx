import { RevealOnScroll } from "../RevealOnScroll";
import { FiCode, FiDatabase, FiServer, FiLayers } from "react-icons/fi";

export const About = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: FiCode,
      skills: ["React", "JavaScript", "TypeScript", "Redux", "Recoil", "Next.js", "HTML", "CSS", "TailwindCSS"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      title: "Backend",
      icon: FiServer,
      skills: ["Node.js", "Nest.js", "Express.js", "Hono.js", "Golang", "AWS", "GraphQL"],
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
    },
    {
      title: "Database",
      icon: FiDatabase,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "PrismaORM", "Sequelize", "Mongoose"],
      gradient: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-500/10 to-purple-500/10",
    },
    {
      title: "Tools & DevOps",
      icon: FiLayers,
      skills: ["Git", "Postman", "Docker", "Redis", "Kafka", "RabbitMQ", "AWS S3", "AWS Lambda", "EC2"],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-24 px-4 relative overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '3s' }} />
      </div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/30 text-blue-400 text-sm font-bold backdrop-blur-xl shadow-2xl">
                🚀 About Me
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
          </div>

          {/* Intro Card */}
          <div className="group relative rounded-3xl p-8 md:p-10 border border-slate-700/50 bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-xl hover:border-slate-500/50 hover:-translate-y-2 transition-all duration-700 mb-12 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed relative z-10 group-hover:text-white transition-colors duration-500">
              Passionate <span className="font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Full-Stack Developer</span> with expertise in building 
              <span className="font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"> scalable web applications</span> and creating 
              <span className="font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent"> innovative solutions</span>. 
              Focused on delivering high-performance, user-centric experiences using modern technologies.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {skillCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="group relative rounded-2xl p-8 border border-slate-700/50 bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-xl hover:border-slate-500/50 hover:-translate-y-2 transition-all duration-700 overflow-hidden shadow-xl"
                  style={{
                    animation: `fadeIn 0.8s ease-out ${idx * 0.15}s both`
                  }}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  {/* Glow effect */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${category.gradient} rounded-full opacity-0 group-hover:opacity-30 blur-3xl transition-all duration-700`} />
                  
                  <div className="relative z-10">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className={`text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:${category.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500`}>
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill, i) => (
                        <span
                          key={skill}
                          className="px-4 py-2 text-sm font-semibold rounded-lg bg-slate-800/80 text-slate-200 border border-slate-700/50 hover:border-slate-500 hover:bg-slate-700/80 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default"
                          style={{
                            animation: `skillPop 0.5s ease-out ${i * 0.05}s both`
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* === Education Section === */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Education
              </h3>
            </div>
            <div className="space-y-6">
              {/* B.Tech */}
              <div className="group relative w-full border border-slate-700/50 rounded-2xl p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-xl hover:border-slate-500/50 hover:-translate-y-2 transition-all duration-700 overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-3">
                    <h4 className="font-bold text-xl text-white group-hover:text-cyan-400 transition-colors duration-500">Heritage Institute of Technology, Kolkata</h4>
                    <span className="text-sm font-semibold text-slate-400 bg-slate-800/50 px-4 py-1.5 rounded-full whitespace-nowrap">Oct 2022 – Jun 2026</span>
                  </div>
                  <p className="text-base text-slate-300 mb-2">Bachelor of Technology (B.Tech) — Computer Science and Business Systems</p>
                  <p className="text-base text-slate-200">CGPA: <span className="font-bold text-cyan-400 text-lg">8.6</span> <span className="text-slate-400">(as of 6th Semester)</span></p>
                </div>
              </div>

              {/* Senior Secondary */}
              <div className="group relative w-full border border-slate-700/50 rounded-2xl p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-xl hover:border-slate-500/50 hover:-translate-y-2 transition-all duration-700 overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-2">
                    <h4 className="font-bold text-xl text-white group-hover:text-blue-400 transition-colors duration-500">Senior Secondary — CBSE</h4>
                    <span className="text-sm font-semibold text-slate-400 bg-slate-800/50 px-4 py-1.5 rounded-full whitespace-nowrap">2021</span>
                  </div>
                  <p className="text-base text-slate-200">Science Stream – <span className="font-bold text-blue-400 text-lg">93.5%</span></p>
                </div>
              </div>

              {/* Secondary */}
              <div className="group relative w-full border border-slate-700/50 rounded-2xl p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-xl hover:border-slate-500/50 hover:-translate-y-2 transition-all duration-700 overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-2">
                    <h4 className="font-bold text-xl text-white group-hover:text-indigo-400 transition-colors duration-500">Secondary — CBSE</h4>
                    <span className="text-sm font-semibold text-slate-400 bg-slate-800/50 px-4 py-1.5 rounded-full whitespace-nowrap">2019</span>
                  </div>
                  <p className="text-base text-slate-200">Score – <span className="font-bold text-indigo-400 text-lg">97.2%</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* === Work Experience Section === */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Work Experience
              </h3>
            </div>
            <div className="space-y-6">
              {/* DevDham */}
              <div className="group relative w-full border border-slate-700/50 rounded-2xl p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-xl hover:border-slate-500/50 hover:-translate-y-2 transition-all duration-700 overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-700" />
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-4">
                    <h4 className="font-bold text-xl text-white group-hover:text-emerald-400 transition-colors duration-500">Backend Engineer Intern — DevDham</h4>
                    <span className="text-sm font-semibold text-slate-400 bg-slate-800/50 px-4 py-1.5 rounded-full whitespace-nowrap">Jan 2025 – Present</span>
                  </div>
                  <ul className="space-y-4 text-slate-300">
                    <li className="flex gap-3 group/item">
                      <span className="text-emerald-400 mt-1 text-xl">▹</span>
                      <span className="group-hover/item:text-white transition-colors">
                        Engineered a large-scale file ingestion pipeline using <span className="font-bold text-emerald-400">Node.js Stream API</span>, significantly reducing memory usage during uploads. Achieved a <span className="font-bold text-emerald-400">25% compression</span> in file size (from <span className="font-bold text-emerald-400">800 MB</span> to <span className="font-bold text-emerald-400">600 MB</span>), which led to reduced <span className="font-bold text-emerald-400">cloud storage costs</span> and enhanced throughput for <span className="font-bold text-emerald-400">high-volume workloads</span>.
                      </span>
                    </li>
                    <li className="flex gap-3 group/item">
                      <span className="text-emerald-400 mt-1 text-xl">▹</span>
                      <span className="group-hover/item:text-white transition-colors">
                        Designed and optimized a scalable <span className="font-bold text-emerald-400">Redis-based event tracking system</span> to monitor critical actions and application usage, reducing data retrieval latency by <span className="font-bold text-emerald-400">30–35%</span> and enabling faster analytics.
                      </span>
                    </li>
                    <li className="flex gap-3 group/item">
                      <span className="text-emerald-400 mt-1 text-xl">▹</span>
                      <span className="group-hover/item:text-white transition-colors">
                        Built an <span className="font-bold text-emerald-400">automated alerting system</span> that proactively scans and notifies about <span className="font-bold text-emerald-400">order price anomalies</span> every <span className="font-bold text-emerald-400">6 hours</span>, ensuring timely resolution and maintaining consistency across <span className="font-bold text-emerald-400">distributed databases</span>.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Lumiorc */}
              <div className="group relative w-full border border-slate-700/50 rounded-2xl p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-xl hover:border-slate-500/50 hover:-translate-y-2 transition-all duration-700 overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-700" />
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-4">
                    <h4 className="font-bold text-xl text-white group-hover:text-blue-400 transition-colors duration-500">Founding Engineer — Lumiorc</h4>
                    <span className="text-sm font-semibold text-slate-400 bg-slate-800/50 px-4 py-1.5 rounded-full whitespace-nowrap">Nov 2024 – Jan 2025</span>
                  </div>
                  <ul className="space-y-4 text-slate-300">
                    <li className="flex gap-3 group/item">
                      <span className="text-blue-400 mt-1 text-xl">▹</span>
                      <span className="group-hover/item:text-white transition-colors">
                        Collaborated on the development of <span className="font-bold text-blue-400">PM-BOT</span>, a project management tool leveraging <span className="font-bold text-blue-400">React.js</span> and <span className="font-bold text-blue-400">Flask</span>, integrating key collaboration features to facilitate seamless communication and task management across teams.
                      </span>
                    </li>
                    <li className="flex gap-3 group/item">
                      <span className="text-blue-400 mt-1 text-xl">▹</span>
                      <span className="group-hover/item:text-white transition-colors">
                        Implemented a dynamic system of graphs and charts to visually represent <span className="font-bold text-blue-400">project progress</span>, deadlines, and milestones, enhancing <span className="font-bold text-blue-400">transparency and decision-making</span> for all stakeholders.
                      </span>
                    </li>
                    <li className="flex gap-3 group/item">
                      <span className="text-blue-400 mt-1 text-xl">▹</span>
                      <span className="group-hover/item:text-white transition-colors">
                        Introduced <span className="font-bold text-blue-400">key-value-based filtering</span> for task queries, reducing data retrieval time by <span className="font-bold text-blue-400">15–20%</span> while ensuring <span className="font-bold text-blue-400">data privacy</span> and modular search flexibility.
                      </span>
                    </li>
                    <li className="flex gap-3 group/item">
                      <span className="text-blue-400 mt-1 text-xl">▹</span>
                      <span className="group-hover/item:text-white transition-colors">
                        Designed and implemented major frontend components including <span className="font-bold text-blue-400">Profile Page</span>, <span className="font-bold text-blue-400">Task Page</span>, and <span className="font-bold text-blue-400">Calendar Page</span> with deadline filters.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

        </div>
      </RevealOnScroll>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes skillPop {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
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

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
