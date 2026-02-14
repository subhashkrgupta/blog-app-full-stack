import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight, Clock, Filter } from 'lucide-react';

const Blog = () => {
  // State for search and category filtering
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Mock Data
  const allPosts = [
    {
      id: 1,
      title: "Mastering React Hooks in 2026",
      excerpt: "A deep dive into useEffect, useMemo, and custom hooks to write cleaner code.",
      category: "React",
      author: "Sarah Jenkins",
      date: "Feb 10, 2026",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "The Future of CSS: Tailwind vs. CSS-in-JS",
      excerpt: "Comparing utility classes with styled-components. Which one wins in performance?",
      category: "Design",
      author: "Mike Ross",
      date: "Feb 08, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1507721999472-8ed443899201?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Building Scalable APIs with Node.js",
      excerpt: "Best practices for error handling, validation, and architecture in Express apps.",
      category: "Backend",
      author: "Alex Chen",
      date: "Feb 05, 2026",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Next.js 15: What's New?",
      excerpt: "Exploring server actions, partial prerendering, and the new compiler improvements.",
      category: "React",
      author: "Sarah Jenkins",
      date: "Jan 28, 2026",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1618477247222-ac59e276211f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "DevOps for Frontend Developers",
      excerpt: "Understanding CI/CD pipelines, Docker, and AWS basics for React developers.",
      category: "DevOps",
      author: "John Doe",
      date: "Jan 20, 2026",
      readTime: "15 min",
      image: "https://images.unsplash.com/photo-1667372393119-3866372c964c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Ace Your Coding Interview",
      excerpt: "Top 50 data structure and algorithm questions asked by FAANG companies.",
      category: "Career",
      author: "Emily White",
      date: "Jan 15, 2026",
      readTime: "20 min",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
    },
  ];

  const categories = ["All", "React", "Backend", "Design", "DevOps", "Career"];

  // Filter Logic
  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    // pt-24 ensures content isn't hidden behind the fixed navbar
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Our <span className="text-indigo-600">Blog</span>
          </h1>
          <p className="text-gray-500 text-lg">
            Thoughts, tutorials, and insights on modern web development.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                    : "bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:text-indigo-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all shadow-sm"
            />
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-indigo-700 uppercase tracking-wider shadow-sm">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col grow">
                  {/* Meta Data */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Footer: Author & Read More */}
                  <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                        <User className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{post.author}</span>
                    </div>
                    <button className="text-indigo-600 font-semibold text-sm hover:underline flex items-center gap-1">
                      Read <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-500">
              Try adjusting your search or filtering by a different category.
            </p>
            <button 
              onClick={() => {setSearchQuery(""); setSelectedCategory("All");}}
              className="mt-6 text-indigo-600 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {filteredPosts.length > 0 && (
          <div className="text-center mt-16">
            <button className="px-8 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 hover:border-gray-400 transition-colors shadow-sm">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;