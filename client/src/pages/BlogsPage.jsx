import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { THEMES } from '../themes';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogsPage = () => {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? THEMES.dark : THEMES.light;

  // Placeholder blog posts - will be connected to Firebase later
  const blogs = [
    {
      id: 1,
      title: "Building Scalable REST APIs with Node.js",
      excerpt: "Learn how to architect REST APIs that can handle millions of requests. In this post, we'll explore best practices for error handling, validation, and performance optimization.",
      date: "Feb 4, 2026",
      readTime: "8 min read",
      category: "Backend"
    },
    {
      id: 2,
      title: "MongoDB Indexing Strategies for Production",
      excerpt: "Database performance is critical. Discover how proper indexing can improve query performance by 100x and help you avoid common pitfalls in production environments.",
      date: "Jan 28, 2026",
      readTime: "6 min read",
      category: "Database"
    },
    {
      id: 3,
      title: "Authentication & Authorization Best Practices",
      excerpt: "Security is paramount. Learn about JWT tokens, refresh tokens, role-based access control, and how to implement a robust authentication system for your applications.",
      date: "Jan 21, 2026",
      readTime: "10 min read",
      category: "Security"
    },
    {
      id: 4,
      title: "React Performance Optimization Techniques",
      excerpt: "Speed matters. Explore memoization, lazy loading, code splitting, and other techniques to build fast, responsive React applications that users love.",
      date: "Jan 14, 2026",
      readTime: "7 min read",
      category: "Frontend"
    }
  ];

  return (
    <>
      <SEO
        title="Blog - Shakir Dmr Portfolio"
        description="Read my latest articles about web development, backend systems, databases, and full-stack architecture."
        keywords="blog, web development, Node.js, React, MongoDB, backend"
        url="https://shakirsjd.dev/blogs"
      />
      <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans transition-colors duration-500 ${theme.selection}`}>
        {/* Background Grid Pattern */}
        <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none transition-all duration-500"
             style={{ backgroundImage: theme.bgPattern, backgroundSize: '30px 30px' }}>
        </div>

        <Header isDark={isDark} setIsDark={setIsDark} theme={theme} />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Page Header */}
          <div className="mt-12 md:mt-16 mb-16">
            <h1 className={`text-5xl md:text-6xl font-bold ${theme.textHead} mb-4 tracking-tight`}>
              Blog
            </h1>
            <p className={`${theme.text} text-lg`}>
              Thoughts on web development, system design, and building scalable applications.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="space-y-6 relative pb-20">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className={`${theme.cardBg} ${theme.cardBorderGradient} rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 cursor-pointer group`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-bold ${
                        theme.name === 'dark' 
                          ? 'bg-emerald-500/20 text-emerald-400' 
                          : 'bg-blue-500/20 text-blue-600'
                      }`}>
                        {blog.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className={`text-2xl md:text-3xl font-bold ${theme.textHead} mb-3 group-hover:${theme.textAccent} transition-colors`}>
                      {blog.title}
                    </h2>

                    {/* Excerpt */}
                    <p className={`${theme.text} text-base leading-relaxed mb-4`}>
                      {blog.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className={`flex items-center gap-4 ${theme.text} text-sm font-mono`}>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {blog.date}
                      </div>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className={`hidden md:flex items-center justify-center w-10 h-10 rounded-lg ${
                    theme.name === 'dark' 
                      ? 'group-hover:bg-gray-800' 
                      : 'group-hover:bg-gray-100'
                  } transition-colors`}>
                    <ArrowRight size={18} className={`${theme.textAccent} group-hover:scale-110 transition-transform`} />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Firebase Note */}
          <div className={`${theme.cardBg} ${theme.cardBorderGradient} rounded-2xl p-6 md:p-8 my-12 text-center`}>
            <p className={`${theme.text} text-sm italic opacity-70`}>
              Blog posts are currently stored in Firebase. New articles will be added weekly.
            </p>
          </div>
        </div>

        <Footer theme={theme} isDark={isDark} />
      </div>
    </>
  );
};

export default BlogsPage;
