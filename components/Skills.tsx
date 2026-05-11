"use client";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Programming",
    items: ["Python", "Java", "HTML/CSS", "JavaScript", "C/C++"],
  },
  {
    category: "Machine Learning",
    items: ["Neural Networks", "Deep Learning", "Federated Learning", "TensorFlow", "PyTorch"],
  },
  {
    category: "ML Libraries & Tools",
    items: ["Scikit-learn", "NumPy", "Pandas", "FAISS", "Matplotlib", "TensorFlow", "TF-IDF", "SVM"],
  },
  {
    category: "Frameworks & APIs",
    items: ["FastAPI", "Streamlit", "LangChain", "Django", "REST APIs", "Judge0 API"],
  },
  {
    category: "AI & NLP",
    items: ["RAG Systems", "LLM Integration", "Sentence Transformers", "Vector Search", "Gemini API"],
  },
  {
    category: "Tools & Deployment",
    items: ["Docker", "Git/GitHub", "Jupyter Notebook", "Postman", "Linux"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Vector DBs", "FAISS"],
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
          Technical Skills `Tech Stack I have worked in`
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
