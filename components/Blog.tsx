"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    slug: "connect4-minimax-ai",
    title: "Understanding Minimax Through Connect 4",
    excerpt:
      "How game trees and heuristics can create a competitive AI opponent from scratch.",
    date: "May 2025",
    readTime: "6 min read",
  },
  {
    slug: "ml-vs-rule-based",
    title: "ML vs Rule-Based Systems",
    excerpt:
      "When to use machine learning and when a simple rule-based approach is the better engineering choice.",
    date: "January 2025",
    readTime: "6 min read",
  },
];

export default function Writing() {
  return (
    <section id="blog" className="section-padding border-t border-border">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-heading font-bold text-3xl mb-3">Blog</h2>
          <p className="text-text-muted">
            I write about software engineering, backend development, machine learning, and lessons from building real
            projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="block bg-card border border-border rounded-lg p-6 h-full hover:-translate-y-1.5 hover:border-accent/40 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3 text-xs text-text-muted mb-4">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-heading font-semibold text-lg text-text-primary mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <span className="text-accent text-sm group-hover:underline">Read More →</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
