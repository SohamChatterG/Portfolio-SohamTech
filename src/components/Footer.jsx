import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 border-t border-white/10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">

                {/* Contact Links */}
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <a
                        href="https://linkedin.com/in/sohamchatterg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-blue-400 transition"
                    >
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a
                        href="https://github.com/SohamChatterG"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-gray-400 transition"
                    >
                        <FaGithub /> GitHub
                    </a>
                    <a
                        href="https://leetcode.com/u/SohamChatterjee/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-pink-400 transition"
                    >
                        <SiLeetcode /> LeetCode
                    </a>
                    <a
                        href="mailto:sohamchattopadhyay25@gmail.com"
                        className="flex items-center gap-1 hover:text-rose-400 transition"
                    >
                        <FaEnvelope /> sohamchattopadhyay25@gmail.com
                    </a>
                    <a
                        href="tel:+919749230434"
                        className="flex items-center gap-1 hover:text-red-400 transition"
                    >
                        <FaPhone /> +91 97492 30434
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-xs text-gray-400">&copy; 2025 Soham.tech</div>
            </div>
        </footer>
    );
};
