import Layout from '../components/Layout';
import { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Frontend Developer',
      bio: 'Passionate about creating beautiful and intuitive user interfaces.',
      avatar: '/api/placeholder/120/120',
    },
    {
      name: 'Sam Taylor',
      role: 'Backend Developer',
      bio: 'Expert in building scalable and efficient server-side solutions.',
      avatar: '/api/placeholder/120/120',
    },
    {
      name: 'Jordan Lee',
      role: 'UI/UX Designer',
      bio: 'Focused on creating delightful user experiences that solve real problems.',
      avatar: '/api/placeholder/120/120',
    },
  ];

  return (
    <Layout title="About | Next.js App">
      <section className={`max-w-4xl mx-auto ${isVisible ? 'fade-in' : 'opacity-0'}`}>
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        
        <div className="card mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We're passionate about building fast, modern, and user-friendly web applications. 
            Our mission is to provide developers with the tools and knowledge they need to create 
            exceptional digital experiences.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Using Next.js and other modern technologies, we strive to deliver applications that are 
            not only functional but also performant, accessible, and enjoyable to use.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-center">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`card text-center ${isVisible ? 'slide-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img 
                src={member.avatar} 
                alt={member.name} 
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">Technologies We Use</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li><strong>Next.js:</strong> Our core framework for building React applications</li>
            <li><strong>React:</strong> For building component-based user interfaces</li>
            <li><strong>Tailwind CSS:</strong> For rapid UI development with utility classes</li>
            <li><strong>Vercel/Render:</strong> For seamless deployment and hosting</li>
            <li><strong>TypeScript:</strong> For type safety and better developer experience</li>
            <li><strong>ESLint & Prettier:</strong> For consistent code formatting and quality</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
