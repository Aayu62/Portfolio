Here's exactly what to do:

Step 1 — Delete 4 files from the content/ folder

Delete these files:

c:\Users\KIIT0001\Ayush's Portfolio\content\how-i-built-devarena.mdx

c:\Users\KIIT0001\Ayush's Portfolio\content\unix-shell-lessons.mdx

c:\Users\KIIT0001\Ayush's Portfolio\content\jwt-authentication-guide.mdx

c:\Users\KIIT0001\Ayush's Portfolio\content\docker-for-students.mdx

Keep only:

connect4-minimax-ai.mdx ✅

ml-vs-rule-based.mdx ✅

Step 2 — Open components/Blog.tsx and remove 4 post entries from the posts array

Remove these 4 objects entirely (lines 9–40 approximately):

  {
    slug: "how-i-built-devarena",
    title: "How I Built a Real-Time Coding Platform",
    excerpt:
      "A breakdown of architecture, Docker sandboxing, and WebSocket communication in DevArena.",
    date: "June 2025",
    readTime: "8 min read",
  },

Copy
ts
  {
    slug: "unix-shell-lessons",
    title: "What Building a Unix Shell Taught Me",
    excerpt:
      "Lessons in processes, pipes, and low-level systems programming that changed how I think about software.",
    date: "April 2025",
    readTime: "7 min read",
  },

Copy
  {
    slug: "jwt-authentication-guide",
    title: "Understanding JWT Authentication",
    excerpt:
      "A practical guide to implementing stateless authentication in REST APIs with Spring Boot.",
    date: "March 2025",
    readTime: "5 min read",
  },

Copy
ts
  {
    slug: "docker-for-students",
    title: "Docker for Student Developers",
    excerpt:
      "Why containerization matters and how to start using Docker in your projects today.",
    date: "February 2025",
    readTime: "5 min read",
  },

Copy
ts
After removing them, only these 2 should remain in the array:

  {
    slug: "connect4-minimax-ai",
    ...
  },
  {
    slug: "ml-vs-rule-based",
    ...
  },

Copy
ts
That's it — just 4 file deletions and 4 object removals from one array. No other file needs to be touched.

Ok, i think i successfully removed them. Now Guide me step by step if i want to write a new blog.


Context
Here's the complete step-by-step guide:

Step 1 — Create a new file in content/

Create a file named your-post-title.mdx inside the content/ folder. The filename becomes the URL, so keep it lowercase with hyphens. Example:

content/how-i-learned-docker.mdx

Copy
Step 2 — Add the frontmatter at the top

Every MDX file must start with this block. Fill in your details:

---
title: "Your Post Title Here"
date: "2025-07-15"
readTime: "5 min read"
excerpt: "A one sentence summary shown on the blog card."
---

Copy
md
Step 3 — Write your content below the frontmatter

After the --- closing line, write your post in normal Markdown:

---
title: "How I Learned Docker"
date: "2025-07-15"
readTime: "5 min read"
excerpt: "What clicked for me after containerizing my first project."
---

Your intro paragraph goes here.

## A Heading

More content here.

- bullet one
- bullet two

## Another Heading

More paragraphs...

Copy
mdx
Step 4 — Add a card entry in components/Blog.tsx

Open components/Blog.tsx and find the posts array at the top. Add a new object to it:

{
  slug: "how-i-learned-docker",   // must match your filename exactly (without .mdx)
  title: "How I Learned Docker",
  excerpt: "What clicked for me after containerizing my first project.",
  date: "July 2025",
  readTime: "5 min read",
},

Copy
ts
Add it at the top of the array if you want it to appear first on the page.

That's the full process. Two things every time:

New .mdx file in content/

New entry in the posts array in Blog.tsx

The blog post page, routing, and metadata all work automatically from those two things.