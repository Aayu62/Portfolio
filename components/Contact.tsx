"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="font-heading font-bold text-3xl mb-4">Let&apos;s Connect</h2>
          <p className="text-text-muted text-lg leading-relaxed mb-8">
            I am always excited to discuss AI/ML projects, technology innovations, and collaboration opportunities. Whether exploring machine learning ideas, full-stack development, or internship prospects—let&apos;s connect!
          </p>

          <div className="mb-8 space-y-3 text-text-muted">
            <p className="flex items-center justify-center gap-2">
              <span>📧</span>
              <a href="mailto:ayushbarnwal062@gmail.com" className="hover:text-accent transition-colors">
                ayushbarnwal062@gmail.com
              </a>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span>📱</span>
              <span>+91-7667214728</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:ayushbarnwal062@gmail.com"
              className="px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/aayu62"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border hover:border-accent text-text-primary hover:text-accent rounded transition-all"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Aayu62"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border hover:border-accent text-text-primary hover:text-accent rounded transition-all"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
