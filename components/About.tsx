"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="container-main">
        <div className="grid lg:grid-cols-[200px_1fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading font-bold text-2xl text-accent uppercase tracking-wide">
              About Me
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-lg text-text-muted leading-relaxed">
              I am a 3rd-year B.Tech Computer Science and Engineering student at KIIT University with a strong passion for Machine Learning, AI systems, and emerging technologies. Known for an optimistic mindset and rapid learning ability, I actively pursue projects that strengthen technical depth and real-world development skills.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              My expertise spans machine learning model development, neural networks, deep learning fundamentals, and building end-to-end AI systems. I combine theoretical ML knowledge with practical engineering to create intelligent solutions—from game AI with minimax search and neural networks to RAG-based research assistants and sentiment analysis systems.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              I am passionate about applying AI to solve real problems: optimizing algorithms, deploying scalable systems with Docker and FastAPI, and continuously learning new tools and frameworks to push the boundaries of what's possible.
            </p>
            <p className="text-text-primary font-medium">
              I am constantly learning, building, and refining systems that solve meaningful problems.
            </p>

            <div className="flex flex-wrap gap-6 pt-2 text-sm text-text-muted">
              <span>📍 Bhubaneswar, India</span>
              <span>🎓 KIIT University (2023-2027)</span>
              <span>🤖 Machine Learning & AI</span>
              <span>💻 Full-Stack Engineering</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
