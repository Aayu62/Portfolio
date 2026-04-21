"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "DevArena",
    subtitle: "Competitive Coding Platform",
    description:
      "Built a full-stack competitive coding platform that enables real-time coding battles, matchmaking, and live leaderboards. Designed secure multi-language code execution using Docker and integrated Judge0 for sandboxed submissions.",
    stack: ["React", "Spring Boot", "PostgreSQL", "Docker"],
    github: "https://github.com/Aayu62/Devarena",
    demo: "https://github.com/Aayu62/Devarena",
  },
  {
    title: "Connect 4 AI",
    subtitle: "Game AI with Minimax",
    description:
      "Developed a web-based Connect 4 game with an AI opponent powered by minimax search and heuristic evaluation. Built responsive gameplay with smooth client-server interaction for real-time move updates.",
    stack: ["Django", "Python", "JavaScript", "NumPy"],
    github: "https://github.com/Aayu62/Connect-4-game",
    demo: "https://github.com/Aayu62/Connect-4-game",
  },
  {
    title: "Gold Price Prediction",
    subtitle: "ML Dashboard",
    description:
      "Built a machine learning dashboard to analyze historical gold price trends and identify hidden market patterns. Used clustering algorithms and predictive models to generate interactive insights through a visual dashboard.",
    stack: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    github: "https://github.com/Aayu62/AD_LAB_SessionalProject",
    demo: "https://github.com/Aayu62/AD_LAB_SessionalProject",
  },
  {
    title: "News & Sentiment Analyst",
    subtitle: "AI Market Intelligence",
    description:
      "Created an AI-powered market sentiment system that analyzes news and social media signals across multiple sources. Combined NLP models with confidence scoring to identify market-moving events and sentiment shifts.",
    stack: ["Python", "FinBERT", "Ollama", "NLP"],
    github: "#",
    demo: "#",
  },
  {
    title: "Sentiment Analysis App",
    subtitle: "Real-time Text Classifier",
    description:
      "Built a sentiment classification web app that processes single and multi-line text in real time using ML models. Designed a clean frontend with a backend API for fast prediction responses.",
    stack: ["FastAPI", "JavaScript", "Scikit-learn"],
    github: "#",
    demo: "#",
  },
  {
    title: "Mini Unix Shell",
    subtitle: "Systems Programming",
    description:
      "Implemented a custom Unix-like shell supporting command execution, piping, redirection, and process management. Built low-level system interactions using POSIX calls to simulate operating system behavior.",
    stack: ["C/C++", "Linux", "POSIX"],
    github: "#",
    demo: null,
  },
  {
    title: "DeskBuddy",
    subtitle: "IoT Study Companion",
    description:
      "Designed an IoT study companion robot that monitors presence and study progress using sensors. Built a responsive embedded system that improves engagement through interactive feedback.",
    stack: ["ESP32", "C/C++", "IoT", "Sensors"],
    github: "#",
    demo: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding border-t border-border">
      <div className="container-main">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-card border border-border rounded-lg p-8 hover:-translate-y-1 hover:border-accent/40 transition-all duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-heading font-bold text-xl text-text-primary">{project.title}</h3>
                  <p className="text-accent text-sm mt-0.5">{project.subtitle}</p>
                </div>
                <div className="flex gap-3 shrink-0">
                  <a
                    href={project.github}
                    className="text-sm px-4 py-1.5 border border-border hover:border-accent text-text-muted hover:text-accent rounded transition-all"
                  >
                    Source Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="text-sm px-4 py-1.5 bg-accent hover:bg-accent-hover text-white rounded transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              <p className="text-text-muted leading-relaxed mb-5">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-bg border border-border rounded-full text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
