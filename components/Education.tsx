"use client";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="section-padding border-t border-border">
      <div className="container-main">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl mb-12"
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex gap-8 items-start"
        >
          {/* Timeline line */}
          <div className="flex flex-col items-center pt-1.5">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <div className="w-px flex-1 bg-border mt-2" />
          </div>

          {/* Content */}
          <div className="pb-8">
            <p className="text-text-muted text-sm mb-1">2023 — 2027</p>
            <h3 className="font-heading font-bold text-xl text-text-primary">
              Kalinga Institute of Industrial Technology (KIIT)
            </h3>
            <p className="text-text-muted mt-1">B.Tech in Computer Science and Engineering</p>
            <div className="mt-3 inline-flex items-center gap-2 bg-card border border-border rounded px-4 py-2">
              <span className="text-accent font-semibold">CGPA</span>
              <span className="text-text-primary font-bold">8.38 / 10</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
