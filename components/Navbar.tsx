"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "About", anchor: "about" },
  { label: "Projects", anchor: "projects" },
  { label: "Blog", anchor: "blog" },
  { label: "Education", anchor: "education" },
  { label: "Contact", anchor: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section via IntersectionObserver — only on home page
  useEffect(() => {
    if (!isHome) return;

    const observers: IntersectionObserver[] = [];

    links.forEach(({ anchor }) => {
      const el = document.getElementById(anchor);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(anchor);
        },
        {
          rootMargin: "-40% 0px -55% 0px", // triggers when section is in the middle band of viewport
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHome]);

  function getHref(anchor: string) {
    return isHome ? `#${anchor}` : `/#${anchor}`;
  }

  function linkClass(anchor: string, mobile = false) {
    const base = mobile
      ? "text-xs transition-colors"
      : "text-sm transition-colors relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-accent after:transition-all after:duration-300";
    const active = activeSection === anchor;
    const color = active ? "text-accent" : "text-text-muted hover:text-text-primary";
    const underline = !mobile ? (active ? "after:w-full" : "after:w-0 hover:after:w-full") : "";
    return `${base} ${color} ${underline}`;
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-main flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-heading font-bold text-lg tracking-widest uppercase text-text-primary hover:text-accent transition-colors"
        >
          AYUSH
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.label} href={getHref(l.anchor)} className={linkClass(l.anchor)}>
              {l.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-1.5 border border-accent text-accent hover:bg-accent hover:text-white rounded transition-all"
          >
            Resume
          </a>
        </div>

        {/* Mobile menu */}
        <div className="flex md:hidden items-center gap-4">
          {links.map((l) => (
            <Link key={l.label} href={getHref(l.anchor)} className={linkClass(l.anchor, true)}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
