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
              I am a third-year Computer Science and Engineering student at KIIT, with a strong focus on backend
              development, full-stack systems, and applied machine learning.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              I enjoy designing scalable web applications, secure APIs, and intelligent software that combine
              performance with real-world usability.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              My work spans from real-time coding platforms and operating system simulations to machine learning
              applications and data-driven tools.
            </p>
            <p className="text-text-primary font-medium">
              I am constantly learning, building, and refining systems that solve meaningful problems.
            </p>

            <div className="flex flex-wrap gap-6 pt-2 text-sm text-text-muted">
              <span>📍 Bhubaneswar</span>
              <span>🎓 KIIT University</span>
              <span>🔧 Backend + AI/ML</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
