"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container-main w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading font-bold text-5xl md:text-7xl tracking-tight uppercase mb-4">
              AYUSH KUMAR
            </h1>
            <p className="text-xl md:text-2xl text-text-muted mb-6">
              Backend Developer • Full Stack Builder • AI/ML Explorer
            </p>
            <p className="text-lg text-text-muted leading-relaxed mb-8 max-w-xl">
              I build scalable applications, intelligent systems, and software that solves practical problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded transition-colors"
              >
                View Projects
              </a>
              <a
                href="#blog"
                className="px-6 py-3 border border-border hover:border-accent text-text-primary rounded transition-colors"
              >
                Read Blog
              </a>
            </div>
          </motion.div>

          {/* Right: Abstract code card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="bg-card border border-border rounded-lg p-8 space-y-4 w-full max-w-md">
              <div className="flex items-center gap-3">
                <span className="text-accent font-mono">Java</span>
                <span className="text-text-muted">Spring Boot</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent font-mono">Python</span>
                <span className="text-text-muted">Machine Learning</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent font-mono">Docker</span>
                <span className="text-text-muted">PostgreSQL</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent font-mono">React</span>
                <span className="text-text-muted">Next.js</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
