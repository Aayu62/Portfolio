import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { compileMDX } from "@/lib/mdx";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: `${post.title} — Ayush Kumar`, description: post.excerpt };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { content } = await compileMDX(post.content);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container-main max-w-2xl">
          <Link
            href="/#blog"
            className="text-text-muted hover:text-accent text-sm mb-8 inline-block transition-colors"
          >
            ← Back to Blog
          </Link>

          <div className="flex items-center gap-3 text-xs text-text-muted mb-4">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-4xl mb-10">{post.title}</h1>

          <article className="prose prose-invert prose-orange max-w-none">{content}</article>
        </div>
      </main>
      <Footer />
    </>
  );
}
