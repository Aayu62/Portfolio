"use client";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: ["Java", "Python", "C / C++", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "HTML", "CSS", "WebSockets"],
  },
  {
    category: "Backend",
    items: ["Spring Boot", "FastAPI", "Django", "REST APIs", "JWT Authentication"],
  },
  {
    category: "AI / ML",
    items: ["Scikit-learn", "Pandas", "NumPy", "FinBERT", "TF-IDF", "SVM", "K-Means", "DBSCAN"],
  },
  {
    category: "Tools",
    items: ["Docker", "Git", "GitHub", "Linux", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding border-t border-border">
      <div className="container-main">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl mb-12"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card border border-border rounded-lg p-6 hover:-translate-y-1.5 transition-transform duration-200 group"
            >
              <div className="h-0.5 w-8 bg-accent mb-4 group-hover:w-full transition-all duration-300" />
              <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-text-muted mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-text-primary text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
