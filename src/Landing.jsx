import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Code, Book, PieChart, Shield, Activity, LayoutDashboard } from "lucide-react";

// Styled components without Tailwind
const Card = ({ children, className }) => (
  <div 
    style={{
      backgroundColor: "white",
      borderRadius: "0.5rem",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      overflow: "hidden"
    }}
    className={className}
  >
    {children}
  </div>
);

const CardContent = ({ children }) => (
  <div style={{ padding: "1.5rem" }}>{children}</div>
);

// Hero Section
const HeroSection = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 0.8 }}
    style={{
      textAlign: "center",
      padding: "4rem 1rem",
      marginBottom: "3rem"
    }}
  >
    <motion.h1 
      initial={{ y: -50 }} 
      animate={{ y: 0 }} 
      transition={{ type: "spring", stiffness: 100 }}
      style={{
        fontSize: "2.25rem",
        fontWeight: "bold",
        marginBottom: "1.5rem",
        background: "linear-gradient(to right, #2563eb, #9333ea)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}
    >
      AlgoForce
    </motion.h1>
    <motion.p 
      initial={{ y: 50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ delay: 0.2, duration: 0.8 }}
      style={{
        fontSize: "1.25rem",
        color: "#4b5563",
        marginBottom: "2rem",
        maxWidth: "42rem",
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      The ultimate platform for programming education with real-time feedback and advanced features
    </motion.p>
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <button 
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          fontWeight: "bold",
          padding: "0.75rem 2rem",
          borderRadius: "9999px",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease"
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#1d4ed8"}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#2563eb"}
      >
        Get Started Free
      </button>
    </motion.div>
  </motion.div>
);

// Enhanced Feature Card with Icons
const FeatureCard = ({ title, description, icon: Icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.03 }} 
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ height: "100%" }}
    >
      <Card style={{ 
        height: "100%", 
        transform: "translateY(0)", 
        transition: "all 0.3s ease",
        boxShadow: isHovered ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      }}>
        <CardContent>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <div style={{ 
              borderRadius: "9999px", 
              padding: "0.75rem", 
              marginRight: "0.75rem",
              backgroundColor: isHovered ? "#2563eb" : "#f3f4f6",
              transition: "background-color 0.3s ease"
            }}>
              <Icon size={24} color={isHovered ? "white" : "#4B5563"} />
            </div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1f2937" }}>{title}</h2>
          </div>
          <p style={{ color: "#4b5563" }}>{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Enhanced Features Section
const FeaturesSection = () => {
  const features = [
    { 
      title: "Smart Feedback", 
      description: "Students receive customized exams targeting their specific areas of weakness for faster improvement.", 
      icon: Check 
    },
    { 
      title: "Performance Tracking", 
      description: "Detailed metrics on typing speed, accuracy, and problem-solving abilities with visual progress charts.", 
      icon: Activity 
    },
    { 
      title: "VS Code Playground", 
      description: "Industry-standard coding environment with full IDE capabilities for realistic practice scenarios.", 
      icon: Code 
    },
    { 
      title: "AI-Powered Questions", 
      description: "Dynamic question generation that adapts to each student's knowledge level and learning pace.", 
      icon: Book 
    },
    { 
      title: "Plagiarism Detection", 
      description: "Advanced algorithms that ensure academic integrity by identifying copied or improperly sourced code.", 
      icon: Shield 
    },
    { 
      title: "Focus Analysis", 
      description: "Helps students stay engaged by monitoring attention patterns and providing focus-enhancing techniques.", 
      icon: PieChart 
    },
    { 
      title: "Comprehensive Dashboard", 
      description: "Intuitive interfaces for teachers and students with custom views for insights and progress tracking.", 
      icon: LayoutDashboard 
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      style={{
        width: "100%",
        maxWidth: "72rem",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "0 1rem"
      }}
    >
      <h2 style={{ 
        fontSize: "1.875rem", 
        fontWeight: "bold", 
        textAlign: "center", 
        marginBottom: "3rem", 
        color: "#1f2937" 
      }}>
        Powerful Features
      </h2>
      <div style={{ 
        display: "grid",
        gridTemplateColumns: "repeat(1, 1fr)",
        gap: "1.5rem",
        marginBottom: "4rem"
      }}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            style={{
              // Apply media queries with inline styles using matchMedia in a useEffect if needed
            }}
          >
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "This platform has revolutionized how I teach programming. My students' engagement and results have improved dramatically.",
      author: "Dr. Sarah Johnson",
      role: "Computer Science Professor"
    },
    {
      quote: "The real-time feedback and personalized exercises helped me master concepts I was struggling with for months.",
      author: "Michael Chen",
      role: "Computer Engineering Student"
    },
    {
      quote: "As a bootcamp instructor, I've seen my students' progress accelerate by using this platform alongside our curriculum.",
      author: "James Rodriguez",
      role: "Coding Bootcamp Lead"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundColor: "#f9fafb",
        padding: "4rem 1rem"
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <h2 style={{ 
          fontSize: "1.875rem", 
          fontWeight: "bold", 
          textAlign: "center", 
          marginBottom: "3rem", 
          color: "#1f2937" 
        }}>
          What Our Users Say
        </h2>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(1, 1fr)",
          gap: "2rem"
        }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <Card>
                <CardContent>
                  <div style={{ marginBottom: "1rem", color: "#3b82f6" }}>
                    <svg width="45" height="36" style={{ fill: "currentColor" }}>
                      <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                    </svg>
                  </div>
                  <p style={{ color: "#4b5563", marginBottom: "1.5rem", fontStyle: "italic" }}>{testimonial.quote}</p>
                  <div style={{ fontWeight: "600", color: "#111827" }}>{testimonial.author}</div>
                  <div style={{ color: "#6b7280", fontSize: "0.875rem" }}>{testimonial.role}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Call to Action Section
const CTASection = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    style={{
      background: "linear-gradient(to right, #2563eb, #9333ea)",
      color: "white",
      textAlign: "center",
      padding: "4rem 1rem"
    }}
  >
    <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
      <motion.h2 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        style={{ fontSize: "1.875rem", fontWeight: "bold", marginBottom: "1.5rem" }}
      >
        Ready to transform your programming education?
      </motion.h2>
      <motion.p 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        style={{ fontSize: "1.25rem", marginBottom: "2rem", opacity: "0.9" }}
      >
        Join thousands of students and educators who are already experiencing the benefits.
      </motion.p>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        style={{ 
          display: "flex", 
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem"
        }}
      >
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: "white",
            color: "#2563eb",
            fontWeight: "bold",
            padding: "0.75rem 2rem",
            borderRadius: "9999px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            alignSelf: "center"
          }}
        >
          Start Free Trial
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: "transparent",
            border: "2px solid white",
            color: "white",
            fontWeight: "bold",
            padding: "0.75rem 2rem",
            borderRadius: "9999px",
            alignSelf: "center"
          }}
        >
          Watch Demo
        </motion.button>
      </motion.div>
    </div>
  </motion.div>
);

// Footer Component
const Footer = () => (
  <footer style={{
    backgroundColor: "#1f2937",
    color: "#d1d5db",
    padding: "3rem 1rem"
  }}>
    <div style={{
      maxWidth: "72rem",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "2rem"
    }}>
      <div>
        <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem", color: "white" }}>
          AlgoForce
        </h3>
        <p style={{ fontSize: "0.875rem", color: "#9ca3af" }}>
          The ultimate platform for programming education with real-time feedback and advanced features.
        </p>
      </div>
      <div>
        <h4 style={{ fontWeight: "bold", marginBottom: "1rem", color: "white" }}>Features</h4>
        <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.875rem" }}>
          <li>Smart Feedback</li>
          <li>Performance Tracking</li>
          <li>VS Code Playground</li>
          <li>AI-Powered Questions</li>
        </ul>
      </div>
      <div>
        <h4 style={{ fontWeight: "bold", marginBottom: "1rem", color: "white" }}>Resources</h4>
        <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.875rem" }}>
          <li>Documentation</li>
          <li>API Reference</li>
          <li>Blog</li>
          <li>Community</li>
        </ul>
      </div>
      <div>
        <h4 style={{ fontWeight: "bold", marginBottom: "1rem", color: "white" }}>Company</h4>
        <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.875rem" }}>
          <li>About Us</li>
          <li>Careers</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
    <div style={{
      maxWidth: "72rem",
      margin: "3rem auto 0",
      paddingTop: "1.5rem",
      borderTop: "1px solid #374151",
      fontSize: "0.875rem",
      color: "#9ca3af",
      textAlign: "center"
    }}>
      © 2025 AlgoForce Pro. All rights reserved.
    </div>
  </footer>
);

// Main Landing Page Component
const Landing = () => {
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
    
    // Add responsive behavior
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Add media query styles
  const isMobile = windowWidth < 768;

  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "white", 
      fontFamily: "sans-serif" 
    }}>
      {loading ? (
        <div style={{ 
          minHeight: "100vh", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center"
        }}>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
            style={{ color: "#2563eb" }}
          >
            <svg className="w-16 h-16" width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V2M12 20V22M6.31412 6.31412L4.8999 4.8999M17.6859 17.6859L19.1001 19.1001M4 12H2M20 12H22M6.31412 17.6859L4.8999 19.1001M17.6859 6.31412L19.1001 4.8999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </motion.div>
        </div>
      ) : (
        <>
          <header style={{
            position: "sticky", 
            top: 0, 
            zIndex: 50, 
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
          }}>
            <div style={{
              maxWidth: "72rem",
              margin: "0 auto",
              padding: "1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <div style={{ fontWeight: "bold", fontSize: "1.25rem", color: "#2563eb" }}>
                AlgoForce
              </div>
              <nav style={{ 
                display: isMobile ? "none" : "flex", 
                gap: "1.5rem" 
              }}>
                <a href="#" style={{ color: "#4b5563", textDecoration: "none" }}>Features</a>
                <a href="#" style={{ color: "#4b5563", textDecoration: "none" }}>Pricing</a>
                <a href="#" style={{ color: "#4b5563", textDecoration: "none" }}>Resources</a>
                <a href="#" style={{ color: "#4b5563", textDecoration: "none" }}>About</a>
              </nav>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <a href="#" style={{ 
                  display: isMobile ? "none" : "inline", 
                  color: "#4b5563", 
                  textDecoration: "none" 
                }}>
                  Sign In
                </a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    backgroundColor: "#2563eb",
                    color: "white",
                    fontWeight: "500",
                    padding: "0.5rem 1rem",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    border: "none",
                    cursor: "pointer"
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#1d4ed8"}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#2563eb"}
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </header>
          
          <main>
            <HeroSection />
            <FeaturesSection />
            <TestimonialsSection />
            <CTASection />
          </main>
          
          <Footer />
        </>
      )}
    </div>
  );
};

export default Landing;