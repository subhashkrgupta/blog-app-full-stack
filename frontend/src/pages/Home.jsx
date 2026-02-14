import React from 'react';
import { ArrowRight, BookOpen, Clock, Tag, TrendingUp, Sparkles, Terminal, Code2 } from 'lucide-react';

const Home = () => {
  const blogs = [
    {
      id: 1,
      title: "Mastering React in 2026",
      desc: "Complete guide to modern React development with best practices.",
      category: "React",
      readTime: "8 min",
    },
    {
      id: 2,
      title: "MERN Stack Architecture",
      desc: "Learn how to structure scalable MERN applications.",
      category: "Backend",
      readTime: "12 min",
    },
    {
      id: 3,
      title: "Tailwind CSS Deep Dive",
      desc: "Utility-first CSS framework explained with real examples.",
      category: "Design",
      readTime: "6 min",
    },
    {
      id: 4,
      title: "Authentication in Node.js",
      desc: "JWT, cookies, and secure auth system implementation.",
      category: "Security",
      readTime: "10 min",
    },
    {
      id: 5,
      title: "Frontend Interview Guide",
      desc: "Most asked frontend interview questions with answers.",
      category: "Career",
      readTime: "15 min",
    },
    {
      id: 6,
      title: "Building REST APIs",
      desc: "Best practices for clean and scalable API development.",
      category: "API",
      readTime: "9 min",
    },
  ];

  return (
    // Added pt-24 here to push everything down below the Fixed Navbar
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pt-24"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-20">
        
        {/* === UPDATED HERO SECTION === */}
        <section className="relative overflow-hidden rounded-3xl bg-gray-900 text-white shadow-2xl border border-gray-800">
          
          {/* Background Gradients */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-indigo-600 opacity-30 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-600 opacity-20 blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center px-6 py-16 md:py-24 md:px-12">
            
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full text-indigo-300 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Updated for 2026
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Master the Art of <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400">
                  Modern Development
                </span>
              </h1>
              
              <p className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Deep dives into React, Scalable Architecture, and System Design. Built for developers who want to write cleaner, faster code.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transform hover:-translate-y-1">
                  Start Reading <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-gray-800 border border-gray-700 text-gray-300 px-8 py-4 rounded-xl font-bold hover:bg-gray-700 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  <Terminal className="w-5 h-5" /> View Snippets
                </button>
              </div>
            </div>

            {/* Right Visual (Abstract Code Block) - Hidden on mobile, visible on LG */}
            <div className="hidden lg:block relative">
               <div className="relative bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500">
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-xs text-gray-500 font-mono">App.jsx</span>
                  </div>
                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex gap-2">
                      <span className="text-purple-400">const</span>
                      <span className="text-yellow-200">Developer</span>
                      <span className="text-white">=</span>
                      <span className="text-blue-400">{"{"}</span>
                    </div>
                    <div className="pl-4 flex gap-2">
                      <span className="text-gray-400">skills:</span>
                      <span className="text-green-400">['React', 'Node', 'Next.js']</span>,
                    </div>
                    <div className="pl-4 flex gap-2">
                      <span className="text-gray-400">passion:</span>
                      <span className="text-orange-400">true</span>,
                    </div>
                    <div className="pl-4 flex gap-2">
                      <span className="text-gray-400">level:</span>
                      <span className="text-yellow-400">'Expert'</span>
                    </div>
                    <div className="text-blue-400">{"}"}</div>
                  </div>
               </div>
               {/* Floating Icon Badge */}
               <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl animate-bounce duration-3000">
                 <Code2 className="w-8 h-8 text-indigo-600" />
               </div>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Featured Article
            </h2>
          </div>

          <div className="group bg-white rounded-3xl shadow-xl overflow-hidden md:flex hover:shadow-2xl transition duration-500 border border-gray-100">
            <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop" 
                alt="MERN Stack"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-indigo-700 uppercase tracking-wider">
                Must Read
              </div>
            </div>

            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4"/> 20 min read</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>Full Stack</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600 transition">
                The Complete MERN Stack Guide 2026
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                From setting up the database to deploying on the cloud. Learn how to build scalable full-stack applications.
              </p>
              <button className="w-fit text-indigo-600 font-bold hover:text-indigo-800 flex items-center gap-2 transition-all hover:gap-3">
                Read Full Article <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Latest Blogs Grid */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Latest Insights
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    {blog.category}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {blog.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 leading-snug">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-6 grow leading-relaxed">
                  {blog.desc}
                </p>
                
                <button className="text-indigo-600 font-semibold hover:text-indigo-800 flex items-center gap-1 mt-auto group w-fit">
                  Read More 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <Tag className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Explore by Topic
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {["React", "Node.js", "MongoDB", "Tailwind", "JavaScript", "System Design", "Career"].map(
              (cat, index) => (
                <button
                  key={index}
                  className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-colors duration-200 shadow-sm"
                >
                  {cat}
                </button>
              )
            )}
          </div>
        </section>

        {/* Call To Action */}
        <section className="relative overflow-hidden bg-gray-900 text-white py-16 px-6 rounded-3xl text-center shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Level Up Your Skills?
            </h2>
            <p className="mb-8 text-gray-400 text-lg">
              Join 10,000+ developers receiving the latest web development trends, tutorials, and career advice directly to their inbox.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-6 py-3 rounded-full text-gray-900  bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              />
              <button className="bg-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition shadow-lg w-full sm:w-auto whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;