import React from 'react';
import { Users, Globe, Award, Heart, Github, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Active Readers", value: "50K+" },
    { label: "Articles Published", value: "200+" },
    { label: "Contributors", value: "15+" },
    { label: "Countries Reached", value: "120+" },
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & Lead Editor",
      bio: "Ex-Google engineer passionate about making web development accessible to everyone.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Sarah Williams",
      role: "Senior React Developer",
      bio: "Specializes in frontend performance and modern UI/UX design patterns.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Backend Architect",
      bio: "Node.js expert sharing insights on scalable systems and cloud infrastructure.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop"
    },
  ];

  return (
    // pt-24 ensures content isn't hidden behind the fixed navbar
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* === Hero Section === */}
        <section className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Users className="w-4 h-4" /> About Our Community
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            We are shaping the future of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
              Tech Education.
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            MyBlog is a community-driven platform designed to help developers master modern web technologies. From React to System Design, we provide the resources you need to level up your career.
          </p>
        </section>

        {/* === Stats Section === */}
        <section className="bg-white rounded-3xl shadow-xl border border-gray-100 p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-4xl md:text-5xl font-bold text-indigo-600">
                  {stat.value}
                </h3>
                <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* === Our Mission (Grid) === */}
        <section>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-600 rounded-3xl rotate-3 opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Team collaborating" 
                className="relative rounded-3xl shadow-2xl w-full object-cover h-100"
              />
            </div>
            
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Mission & Values
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that quality education should be accessible to everyone. Our mission is to bridge the gap between theory and real-world application.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Globe, title: "Global Community", desc: "Connecting developers from over 100 countries." },
                  { icon: Award, title: "High Quality Content", desc: "Peer-reviewed tutorials and up-to-date documentation." },
                  { icon: Heart, title: "Open Source First", desc: "We believe in giving back to the community." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                    <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === Team Section === */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The brilliant minds behind the code, content, and community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex justify-center gap-4">
                    <button className="text-gray-400 hover:text-gray-900 transition"><Github size={20}/></button>
                    <button className="text-gray-400 hover:text-blue-400 transition"><Twitter size={20}/></button>
                    <button className="text-gray-400 hover:text-blue-700 transition"><Linkedin size={20}/></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* === Call to Action === */}
        <section className="bg-gray-900 rounded-3xl p-12 text-center text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-indigo-600 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-600 opacity-20 blur-3xl"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Join Our Growing Team</h2>
            <p className="text-gray-300 mb-8 text-lg">
              We are always looking for talented writers and developers. If you are passionate about teaching, we want to hear from you.
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition flex items-center gap-2 mx-auto">
              View Open Positions <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;