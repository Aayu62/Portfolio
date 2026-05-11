"use client";
import { motion } from "framer-motion";

const education = [
  {
    period: "Aug 2023 — Sept 2027",
    institution: "Kalinga Institute of Industrial Technology (KIIT)",
    degree: "B.Tech in Computer Science and Engineering",
    location: "Bhubaneswar, India",
    cgpa: "8.38 / 10",
  },
  {
    period: "June 2020 — June 2022",
    institution: "I.G.N.S College",
    degree: "Senior Secondary (Physics, Chemistry, Mathematics)",
    location: "Kuchaikote, Bihar, India",
  },
];

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
          Education & Certifications
        </motion.h2>

        <div className="space-y-8">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex gap-8 items-start"
            >
              {/* Timeline line */}
              <div className="flex flex-col items-center pt-1.5">
                <div className="w-3 h-3 rounded-full bg-accent" />
                {idx < education.length - 1 && <div className="w-px h-24 bg-border mt-2" />}
              </div>

              {/* Content */}
              <div className="pb-8">
                <p className="text-text-muted text-sm mb-1">{item.period}</p>
                <h3 className="font-heading font-bold text-xl text-text-primary">
                  {item.institution}
                </h3>
                <p className="text-text-muted mt-1">{item.degree}</p>
                <p className="text-text-muted text-sm">{item.location}</p>
                {item.cgpa && (
                  <div className="mt-3 inline-flex items-center gap-2 bg-card border border-border rounded px-4 py-2">
                    <span className="text-accent font-semibold">CGPA</span>
                    <span className="text-text-primary font-bold">{item.cgpa}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-border"
        >
          <h3 className="font-heading font-bold text-xl text-text-primary mb-6">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Machine Learning — Kaggle (2025)",
              "Python — Kaggle (2025)",
              "Game AI and Reinforcement Learning — Kaggle (2025)",
            ].map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-lg p-4 flex items-center gap-3"
              >
                <span className="text-accent text-lg">✓</span>
                <span className="text-text-primary text-sm">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
