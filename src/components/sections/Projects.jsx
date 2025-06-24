// import { RevealOnScroll } from "../RevealOnScroll";

// export const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="min-h-screen flex items-center justify-center py-20"
//     >
//       <RevealOnScroll>
//         <div className="max-w-5xl mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
//             Featured Projects
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Chatty */}
//             <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
//               <h3 className="text-xl font-bold mb-2">Chatty</h3>
//               <p className="text-gray-400 mb-4">
//                 Developed a real-time <span className="text-teal-400 font-semibold">group chat app</span> with <span className="text-teal-400 font-semibold">Socket.IO</span>, supporting multi-room messaging, typing indicators, and active user lists.
//                 Used <span className="text-teal-400 font-semibold">Redis Streams Adapter</span> for scaling across distributed servers and integrated <span className="text-teal-400 font-semibold">Apache Kafka</span> for reliable message streaming.
//                 Built with <span className="text-teal-400 font-semibold">Next.js</span> on the frontend for real-time communication with synced state.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["Next.js", "Socket.IO", "Redis", "Kafka", "Node.js"].map((tech) => (
//                   <span
//                     key={tech}
//                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex justify-between items-center">
//                 <a
//                   href="https://github.com/SohamChatterG/chatty-frontend"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   Frontend →
//                 </a>
//                 <a
//                   href="https://github.com/SohamChatterG/chatty-backend"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   Backend →
//                 </a>
//               </div>
//             </div>

//             {/* PayBuddy */}
//             <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
//               <h3 className="text-xl font-bold mb-2">PayBuddy</h3>
//               <p className="text-gray-400 mb-4">
//                 Built a full-stack <span className="text-teal-400 font-semibold">payment transaction system</span> using the <span className="text-teal-400 font-semibold">MERN stack</span>. Includes intuitive pages like Send Money, Sign In, Sign Up, Transaction History, and a user Dashboard.
//                 Implemented <span className="text-teal-400 font-semibold">JWT-based auth middleware</span> to secure routes and <span className="text-teal-400 font-semibold">Mongoose sessions</span> to preserve transaction consistency.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["MongoDB", "Express", "React", "Node.js", "JWT"].map((tech) => (
//                   <span
//                     key={tech}
//                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex justify-between items-center">
//                 <a
//                   href="https://github.com/SohamChatterG/payment-app"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   GitHub →
//                 </a>
//               </div>
//             </div>

//             {/* GoDraw */}
//             <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
//               <h3 className="text-xl font-bold mb-2">GoDraw</h3>
//               <p className="text-gray-400 mb-4">
//                 Built a <span className="text-teal-400 font-semibold">collaborative drawing and writing platform</span> using <span className="text-teal-400 font-semibold">Next.js 15</span> and <span className="text-teal-400 font-semibold">Convex DB</span>, supporting real-time sync for teams of up to 10 users.
//                 Features include team creation, file sharing, and <span className="text-teal-400 font-semibold">live drawing</span>—underpinned by <span className="text-teal-400 font-semibold">RPC architecture</span> for consistent communication.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["Next.js", "Convex", "WebSockets", "RPC", "TailwindCSS"].map((tech) => (
//                   <span
//                     key={tech}
//                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex justify-between items-center">
//                 <a
//                   href="https://github.com/SohamChatterG/draw"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   GitHub →
//                 </a>
//                 <a
//                   href="https://silver-lokum-e21a40.netlify.app/"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   Live →
//                 </a>
//               </div>
//             </div>

//             {/* Microservices Social Media Platform */}
//             <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
//               <h3 className="text-xl font-bold mb-2">SocialSphere (Microservices)</h3>
//               <p className="text-gray-400 mb-4">
//                 Architected a modern <span className="text-teal-400 font-semibold">social media platform</span> with a <span className="text-teal-400 font-semibold">microservices architecture</span>, featuring services like <span className="text-teal-400 font-semibold">identity-service</span>, <span className="text-teal-400 font-semibold">post-service</span>, <span className="text-teal-400 font-semibold">media-service</span>, <span className="text-teal-400 font-semibold">search-service</span>, and an <span className="text-teal-400 font-semibold">API Gateway</span>.
//                 Integrated <span className="text-teal-400 font-semibold">rate limiting</span>, <span className="text-teal-400 font-semibold">proxy protection</span>, and used <span className="text-teal-400 font-semibold">RabbitMQ</span> for <span className="text-teal-400 font-semibold">event-driven architecture (EDA)</span>. Supports <span className="text-teal-400 font-semibold">cloud uploads</span> for media.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["Microservices", "RabbitMQ", "Cloudinary", "Express", "MongoDB", "Docker"].map((tech) => (
//                   <span
//                     key={tech}
//                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex justify-between items-center">
//                 <a
//                   href="https://github.com/SohamChatterG/microservices-social-media"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   GitHub →
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };

import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    title: "Chatty",
    description:
      'Developed a real-time group chat app with Socket.IO, supporting multi-room messaging, typing indicators, and active user lists. Used Redis Streams Adapter for scaling across distributed servers and integrated Apache Kafka for reliable message streaming. Built with Next.js on the frontend for real-time communication with synced state.',
    tech: ["Next.js", "Socket.IO", "Redis", "Kafka", "Node.js"],
    links: [
      { label: "Frontend →", href: "https://github.com/SohamChatterG/chatty-frontend" },
      { label: "Backend →", href: "https://github.com/SohamChatterG/chatty-backend" },
    ],
  },
  {
    title: "PayBuddy",
    description:
      "Built a full-stack payment transaction system using the MERN stack. Includes intuitive pages like Send Money, Sign In, Sign Up, Transaction History, and a user Dashboard. Implemented JWT-based auth middleware to secure routes and Mongoose sessions to preserve transaction consistency.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    links: [
      { label: "GitHub →", href: "https://github.com/SohamChatterG/payment-app" },
    ],
  },
  {
    title: "GoDraw",
    description:
      "Built a collaborative drawing and writing platform using Next.js 15 and Convex DB, supporting real-time sync for teams of up to 10 users. Features include team creation, file sharing, and live drawing—underpinned by RPC architecture for consistent communication.",
    tech: ["Next.js", "Convex", "WebSockets", "RPC", "TailwindCSS"],
    links: [
      { label: "GitHub →", href: "https://github.com/SohamChatterG/draw" },
      { label: "Live →", href: "https://silver-lokum-e21a40.netlify.app/" },
    ],
  },
  {
    title: "SocialSphere (Microservices)",
    description:
      "Architected a modern social media platform with a microservices architecture, featuring services like identity-service, post-service, media-service, search-service, and an API Gateway. Integrated rate limiting, proxy protection, and used RabbitMQ for event-driven architecture (EDA). Supports cloud uploads for media.",
    tech: ["Microservices", "RabbitMQ", "Cloudinary", "Express", "MongoDB", "Docker"],
    links: [
      { label: "GitHub →", href: "https://github.com/SohamChatterG/microservices-social-media" },
    ],
  },
  {
    title: "ChessKing",
    description:
      "Built a real-time multiplayer chess game using React and chess.js, with legal move validation and synchronized gameplay. Integrated raw WebSocket for two-way live communication and built backend logic with Node.js and Express. Used Prisma ORM and PostgreSQL for data persistence. Zod validation schemas were shared across frontend and backend via a custom npm package for strict type safety.",
    tech: ["React", "Node.js", "Express", "WebSocket", "chess.js", "Prisma", "PostgreSQL", "Zod"],
    links: [
      { label: "GitHub →", href: "https://github.com/SohamChatterG/ChessKing" }
    ],
  },
  {
    title: "Sommaire",
    description:
      "Built an AI-powered podcast summarization platform using Gemini API to generate concise summaries from YouTube links. Integrated Stripe for payment processing and coin-based usage. Users can track search history, manage transactions, and view summaries via intuitive dashboard pages. Built with Next.js, Prisma ORM, and PostgreSQL for scalable and type-safe development.",
    tech: ["Next.js", "Gemini API", "Stripe", "Prisma", "PostgreSQL", "TypeScript"],
    links: [
      { label: "GitHub →", href: "https://github.com/SohamChatterG/sommaire" } // Update if different
    ],
  },


];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(({ title, description, tech, links }) => (
              <div
                key={title}
                className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-400 mb-4">
                  {description.split(/(Socket\.IO|Redis|Apache Kafka|Next\.js|MERN|JWT|Mongoose sessions|Next\.js 15|Convex DB|RPC architecture|RabbitMQ|event-driven architecture|cloud uploads|chess\.js|WebSocket|npm package|AI-powered|Stripe)/).map((part, i) => (
                    <span
                      key={i}
                      className={/(Socket\.IO|Redis|Apache Kafka|Next\.js|MERN|JWT|Mongoose sessions|Next\.js 15|Convex DB|RPC architecture|RabbitMQ|event-driven architecture|cloud uploads|chess\.js|WebSocket|npm package|AI-powered|Stripe)/.test(part)
                        ? "text-teal-400 font-semibold"
                        : ""}
                    >
                      {part}
                    </span>
                  ))}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center flex-wrap gap-2">
                  {links.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
