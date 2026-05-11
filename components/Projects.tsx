"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Connect 4 Web Game with AI",
    subtitle: "Game AI with Minimax & Neural Networks",
    description:
      "Created a Connect 4 AI with Minimax tree search and Alpha-Beta pruning, reducing branching factor to O(7²·⁵) and AI decision time to <100ms. Applied PyTorch ValueNet (3-layer MLP, 42-dim state vectors) for neural-guided position evaluation over hand-crafted heuristics. Optimized move ordering (DSA) to reduce redundant subtree evaluations by 50%.",
    stack: ["Python", "Django", "JavaScript", "NumPy", "PyTorch"],
    github: "https://github.com/Aayu62/Connect-4-game",
    demo: "https://connect-4-game-9vzx.onrender.com",
  },
  {
    title: "ScholarAgent AI Research Assistant",
    subtitle: "Multi-Agent RAG System with LLM",
    description:
      "Built a multi-agent AI research assistant enabling semantic PDF search, contextual Q&A, citation extraction, and research report generation using Retrieval-Augmented Generation (RAG). Designed modular retrieval, summary, citation, and report agents orchestrated through LangChain pipelines. Implemented FAISS vector search with sentence-transformer embeddings for low-latency semantic retrieval from 100+ page PDFs. Deployed full-stack system using FastAPI backend, Gemini LLM inference, and Streamlit frontend in Docker containers.",
    stack: ["Python", "FastAPI", "LangChain", "FAISS", "Gemini", "Docker", "Streamlit"],
    github: "https://github.com/Aayu62/ScholarAgent",
    demo: "https://github.com/Aayu62/ScholarAgent",
  },
  {
    title: "Sentiment Analysis Web App",
    subtitle: "ML-Powered Text Classification",
    description:
      "Developed ML web app using TF-IDF + SVM achieving ~65% accuracy. Deployed REST API with real-time predictions and integrated responsive frontend for single/multi-line input processing with aggregated sentiment output. End-to-end full-stack integration with improved UI/UX.",
    stack: ["FastAPI", "Scikit-learn", "JavaScript", "TF-IDF", "SVM"],
    github: "https://github.com/Aayu62/AD-13_Stock_sentiment",
    demo: "https://ad-13-stock-sentiment.onrender.com",
  },
  {
    title: "DevArena — Real-Time Coding Duel Platform",
    subtitle: "Competitive Programming Platform",
    description:
      "Built backend for real-time 1v1 coding duels with match lifecycle and winner logic based on earliest correct submission. Integrated Judge0 API to execute code in 50+ languages securely. Designed PostgreSQL schema and scalable leaderboard system supporting 1,000+ users. Developed REST APIs for match creation, submissions, and user interactions.",
    stack: ["Java", "PostgreSQL", "Judge0 API", "REST APIs"],
    github: "https://github.com/Aayu62/Devarena",
    demo: "https://github.com/Aayu62/Devarena",
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
