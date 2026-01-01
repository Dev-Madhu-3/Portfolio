import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/common/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import CustomCursor from "./components/common/CustomCursor";
import { Toaster } from "react-hot-toast";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Mouse move handler for custom cursor
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Loading screen
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-dark-bg">
        <div className="text-center">
          <div className="text-6xl font-display font-bold gradient-text mb-4">
            Madhu Uppala
          </div>
          <div className="loading-dots text-2xl text-neon-blue">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-dark-bg text-white overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor position={cursorPosition} />

      {/* Background Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: Math.random() * 5 + 2 + "px",
              height: Math.random() * 5 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDelay: Math.random() * 5 + "s",
              animationDuration: Math.random() * 10 + 10 + "s",
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#151520",
            color: "#ffffff",
            border: "1px solid #2a2a3a",
          },
        }}
      />
    </div>
  );
}

export default App;
