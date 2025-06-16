import { RevealOnScroll } from "../RevealOnScroll";
// import { motion } from "framer-motion"; // optional for animation

export const About = () => {
  const frontendSkills = [
    "React", "JavaScript", "TypeScript", "Redux", "Recoil",
    "Next.js", "HTML", "CSS", "TailwindCSS"
  ];

  const backendSkills = [
    "Node.js", "Nest.js", "Express.js", "Hono.js", "AWS", "GraphQL"
  ];

  const databaseSkills = [
    "PostgreSQL", "MySQL", "MongoDB",
    "PrismaORM", "Sequelize", "Mongoose"
  ];

  const otherSkills = [
    "Git", "Postman", "Docker", "Redis",
    "Kafka", "RabbitMQ", "AWS S3", "AWS Lambda", "EC2"
  ];

  const skillClass =
    "bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition";

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Intro */}
          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all mb-10">
            <p className="text-gray-300 mb-6 text-lg">
              Passionate developer with expertise in building scalable web applications and creating innovative solutions.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend */}
              <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, idx) => (
                    <span key={idx} className={skillClass}>{tech}</span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, idx) => (
                    <span key={idx} className={skillClass}>{tech}</span>
                  ))}
                </div>
              </div>

              {/* Database */}
              <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Database</h3>
                <div className="flex flex-wrap gap-2">
                  {databaseSkills.map((tech, idx) => (
                    <span key={idx} className={skillClass}>{tech}</span>
                  ))}
                </div>
              </div>

              {/* Others */}
              <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Others</h3>
                <div className="flex flex-wrap gap-2">
                  {otherSkills.map((tech, idx) => (
                    <span key={idx} className={skillClass}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* === Education Section === */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              Education
            </h2>
            <div className="space-y-6 text-gray-300">
              {/* B.Tech */}
              <div className="w-full border border-white/10 rounded-xl p-6 hover:-translate-y-1 transition-all">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg">Heritage Institute of Technology, Kolkata</h4>
                  <span className="text-sm text-gray-400">Oct 2022 – Jun 2026</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Bachelor of Technology (B.Tech) — Computer Science and Business Systems</p>
                <p className="text-sm mt-1">CGPA: <span className="font-medium">8.6</span> (as of 6th Semester)</p>
              </div>

              {/* Senior Secondary */}
              <div className="w-full border border-white/10 rounded-xl p-6 hover:-translate-y-1 transition-all">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg">Senior Secondary — CBSE</h4>
                  <span className="text-sm text-gray-400">2021</span>
                </div>
                <p className="text-sm mt-1">Science Stream – <span className="font-medium">93.5%</span></p>
              </div>

              {/* Secondary */}
              <div className="w-full border border-white/10 rounded-xl p-6 hover:-translate-y-1 transition-all">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg">Secondary — CBSE</h4>
                  <span className="text-sm text-gray-400">2019</span>
                </div>
                <p className="text-sm mt-1">Score – <span className="font-medium">97.2%</span></p>
              </div>
            </div>
          </div>

          {/* === Work Experience Section === */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              Work Experience
            </h2>
            <div className="space-y-6 text-gray-300">
              {/* DevDham */}
              <div className="w-full border border-white/10 rounded-xl p-6 hover:-translate-y-1 transition-all">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg">Backend Engineer Intern — DevDham</h4>
                  <span className="text-sm text-gray-400">Jan 2025 – Present</span>
                </div>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>
                    Engineered a large-scale file ingestion pipeline using <span className="text-teal-400 font-semibold">Node.js Stream API</span>, significantly reducing memory usage during uploads. Achieved a <span className="text-teal-400 font-semibold">25% compression</span> in file size (from <span className="text-teal-400 font-semibold">800 MB</span> to <span className="text-teal-400 font-semibold">600 MB</span>), which led to reduced <span className="text-teal-400 font-semibold">cloud storage costs</span> and enhanced throughput for <span className="text-teal-400 font-semibold">high-volume workloads</span>.
                  </li>
                  <li>
                    Designed and optimized a scalable <span className="text-teal-400 font-semibold">Redis-based event tracking system</span> to monitor critical actions and application usage, reducing data retrieval latency by <span className="text-teal-400 font-semibold">30–35%</span> and enabling faster analytics.
                  </li>
                  <li>
                    Built an <span className="text-teal-400 font-semibold">automated alerting system</span> that proactively scans and notifies about <span className="text-teal-400 font-semibold">order price anomalies</span> every <span className="text-teal-400 font-semibold">6 hours</span>, ensuring timely resolution and maintaining consistency across <span className="text-teal-400 font-semibold">distributed databases</span>.
                  </li>
                </ul>
              </div>


              {/* Lumiorc */}
              <div className="w-full border border-white/10 rounded-xl p-6 hover:-translate-y-1 transition-all">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg">Founding Engineer — Lumiorc</h4>
                  <span className="text-sm text-gray-400">Nov 2024 – Jan 2025</span>
                </div>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>
                    Collaborated on the development of <span className="text-teal-400 font-semibold">PM-BOT</span>, a project management tool leveraging <span className="text-teal-400 font-semibold">React.js</span> and <span className="text-teal-400 font-semibold">Flask</span>, integrating key collaboration features to facilitate seamless communication and task management across teams.
                  </li>
                  <li>
                    Implemented a dynamic system of graphs and charts to visually represent <span className="text-teal-400 font-semibold">project progress</span>, deadlines, and milestones, enhancing <span className="text-teal-400 font-semibold">transparency and decision-making</span> for all stakeholders.
                  </li>
                  <li>
                    Introduced <span className="text-teal-400 font-semibold">key-value-based filtering</span> for task queries, reducing data retrieval time by <span className="text-teal-400 font-semibold">15–20%</span> while ensuring <span className="text-teal-400 font-semibold">data privacy</span> and modular search flexibility.
                  </li>
                  <li>
                    Designed and implemented major frontend components including:
                    <ul className="list-disc ml-5 space-y-1">
                      <li><span className="text-teal-400 font-semibold">Profile Page</span> — showing task completion rates and user metrics</li>
                      <li><span className="text-teal-400 font-semibold">Task Page</span> — allowing edit operations on task descriptions and assignees</li>
                      <li><span className="text-teal-400 font-semibold">Calendar Page</span> — displaying deadlines with filters for <span className="text-teal-400 font-semibold">assignee</span>, <span className="text-teal-400 font-semibold">priority</span>, and <span className="text-teal-400 font-semibold">project tags</span></li>
                    </ul>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
