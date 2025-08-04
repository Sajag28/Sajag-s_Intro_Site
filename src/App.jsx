import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Brain, Award, Briefcase, GraduationCap, User, Menu, X,FileText } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    languages: ['C++', 'Java', 'Python', 'JavaScript', 'PHP', 'SQL'],
    webTech: ['React.js', 'Next.js', 'Django REST', 'FastAPI', 'Material UI'],
    databases: ['MongoDB', 'PostgreSQL', 'MySQL'],
    aiml: ['Scikit-learn', 'TensorFlow', 'Langchain', 'RAG', 'Fine-Tuning'],
    iot: ['Arduino', 'ESP32', 'RFID', 'Real-time logging']
  };

  const projects = [
    {
      title: 'Safe Flight Portal',
      description: 'IoT & ML-based security system with RFID integration and stampede prediction',
      tech: ['ESP32', 'Python', 'React.js', 'MongoDB', 'ML'],
      github: 'https://github.com/Sajag28/FlightPortal_backend.git',
      demo: 'https://drive.google.com/file/d/1zTUKssSXj3gc6Nqjrqawpjm4i2ToHfLP/view?usp=share_link'
    },
    {
      title: 'BharatRides',
      description: 'End-to-End Car Buying & Selling Platform with inspection booking',
      tech: ['Next.js', 'Django REST', 'Material UI', 'PostgreSQL'],
      github: 'https://github.com/Sajag28/Bharatrides_new.git'
    },
    {
      title: 'Doctor Connect',
      description: 'Healthcare portal for appointment scheduling and EHR management',
      tech: ['React', 'Django DRF', 'JWT Auth', 'MongoDB'],
      github: 'https://github.com/Sajag28/Doctor_Connect_Backend.git',
      demo: 'https://www.loom.com/share/8e0e23c4134e490796d970c4535d0f11'
    }
  ];

  const experience = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Global Investors Forum',
      period: 'July 2025 - Present',
      description: 'Developing responsive UI components using React.js, Material UI, and TypeScript for fintech platform'
    },
    {
      title: 'IT Training Intern',
      company: 'AVNL Ministry of Defence',
      period: 'June 2024 - July 2024',
      description: 'Maintained 4+ internal web portals, optimized backend reducing load time by 25%'
    },
    {
      title: 'Backend Developer Intern',
      company: 'Sowtech',
      period: 'Mar 2024 - Sep 2024',
      description: 'Developed Django backend for AI-driven sales assistant with 20+ RESTful APIs'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute w-96 h-96 bg-orange-500 rounded-full opacity-10 blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-orange-400 rounded-full opacity-5 blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-orange-600 rounded-full opacity-5 blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-orange-500/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Sajag Agrawal
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-orange-400 relative group ${
                    activeSection === section ? 'text-orange-400' : 'text-white'
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-orange-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-orange-500/20">
              <div className="flex flex-col space-y-4 mt-4">
                {['hero', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="capitalize text-left py-2 hover:text-orange-400 transition-colors"
                  >
                    {section === 'hero' ? 'Home' : section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative z-10 pt-20">
        <div className="text-center max-w-4xl mx-auto px-6">
          <div className="transform transition-all duration-1000 hover:scale-105">
            {/* Profile Photo */}
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-orange-500 shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <img 
                    src="/pf7.jpeg" 
                    alt="Sajag Agrawal" 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                {/* Floating Icons */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold animate-bounce">
                  ⚡
                </div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold animate-bounce delay-500">
                  🚀
                </div>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-orange-400 to-orange-600 bg-clip-text text-transparent animate-pulse">
              Sajag Agrawal
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up">
              <span className="text-orange-400">Backend Developer</span> • 
              <span className="text-orange-400 ml-2">GenAI Engineer</span> • 
              <span className="text-orange-400 ml-2">Full Stack Developer</span>
            </div>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Building scalable fintech solutions with Java Spring Boot, exploring GenAI frameworks, 
              and creating innovative IoT applications. Recently accepted at Accenture as Advanced App Engineering Analyst.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="mailto:sajagaga2806@gmail.com"
                className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Mail size={20} />
                <span>Get In Touch</span>
              </a>
              <a
                href="https://sajag-portfolio-site.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 border border-orange-500 hover:bg-orange-500 px-6 py-3 rounded-full transition-all duration-300"
              >
                <ExternalLink size={20} />
                <span>View Portfolio</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1DYHXLpn9hsdgtMcbAyP4Ey5oJTRujqyQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 border border-orange-500 hover:bg-orange-500 px-6 py-3 rounded-full transition-all duration-300"
              >
                <FileText size={20} />
                <span>View Resume</span>
              </a>
            </div>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-orange-400 hover:text-orange-300 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap className="text-orange-400" size={24} />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <p className="text-gray-300">
                  <strong>B.Tech in Computer Science Engineering (IoT Specialization)</strong><br />
                  Vellore Institute of Technology<br />
                  CGPA: 8.78/10.00 | Aug 2021 - Aug 2025
                </p>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="text-orange-400" size={24} />
                  <h3 className="text-xl font-semibold">Achievements</h3>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>🏆 1st place in IEEE EDS ELECTRA Hackathon</li>
                  <li>☁️ AWS Certified Cloud Practitioner</li>
                  <li>🎓 NPTEL Cloud Computing Certification (IIT KGP)</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-8 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-orange-400">What I'm Working On</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Building Java-based fintech projects with Spring Boot</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Exploring GenAI frameworks: Langchain, RAG, Whisper AI</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Regular practice on LeetCode and HackerRank</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Joining Accenture as Advanced App Engineering Analyst</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:border-orange-400/40"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-orange-400">{exp.title}</h3>
                    <p className="text-lg text-gray-300">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:border-orange-400/40 group"
              >
                <h3 className="text-xl font-semibold mb-3 text-orange-400 group-hover:text-orange-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Code className="text-orange-400" size={24} />
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Code className="text-orange-400" size={24} />
                <h3 className="text-xl font-semibold">Web & Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.webTech.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Database className="text-orange-400" size={24} />
                <h3 className="text-xl font-semibold">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="text-orange-400" size={24} />
                <h3 className="text-xl font-semibold">AI & ML</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.aiml.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Code className="text-orange-400" size={24} />
                <h3 className="text-xl font-semibold">IoT & Hardware</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.iot.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to collaborate on fintech projects, GenAI applications, or innovative solutions? Let's build something amazing together!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
              <Mail className="text-orange-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href="mailto:sajagaga2806@gmail.com" className="text-gray-300 hover:text-orange-400 transition-colors">
                sajagaga2806@gmail.com
              </a>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
              <Phone className="text-orange-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a href="tel:+919826542585" className="text-gray-300 hover:text-orange-400 transition-colors">
                +91 98265 42585
              </a>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/sajag-agrawal-6668a8214"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 p-4 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Sajag28"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 p-4 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://leetcode.com/u/ak_goel_2806/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 p-4 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Code size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-orange-500/20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MapPin className="text-orange-400" size={16} />
            <span className="text-gray-400">Jabalpur, Madhya Pradesh, India</span>
          </div>
          <p className="text-gray-500">
            © 2025 Sajag Agrawal. Building the future with code and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;