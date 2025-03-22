"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function TechnicalArt() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentShaderIndex, setCurrentShaderIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isShaderFading, setIsShaderFading] = useState(false);
  const [displayedImageIndex, setDisplayedImageIndex] = useState(0);
  const [displayedShaderIndex, setDisplayedShaderIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (isFading) {
      const timer = setTimeout(() => {
        setDisplayedImageIndex(currentImageIndex);
        setIsFading(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isFading, currentImageIndex]);

  useEffect(() => {
    if (isShaderFading) {
      const timer = setTimeout(() => {
        setDisplayedShaderIndex(currentShaderIndex);
        setIsShaderFading(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isShaderFading, currentShaderIndex]);

  // Add auto-scroll effect for technical images
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isFading) {
        nextImage();
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [currentImageIndex, isFading]);

  // Add auto-scroll effect for shader images
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isShaderFading) {
        nextShader();
      }
    }, 7500);

    return () => clearInterval(timer);
  }, [currentShaderIndex, isShaderFading]);

  const technicalImages = [
    {
      src: "/PCGMAZE.png",
      alt: "Technical Art - Shader Graph"
    },
    {
      src: "/PCGCAVE.png",
      alt: "Technical Art - Material Editor"
    }
  ];

  const shaderImages = [
    {
      src: "/WaterShaderImg2.png",
      alt: "Custom Shader - Holographic Effect"
    },
    {
      src: "/WaterShaderImg1.png",
      alt: "Custom Shader - Dissolve Effect"
    },
    {
      src: "/FullScreenShadeer.png",
      alt: "Custom Shader - Environment Blend"
    }
  ];

  const nextImage = () => {
    setIsFading(true);
    setCurrentImageIndex((prev) => (prev + 1) % technicalImages.length);
  };

  const prevImage = () => {
    setIsFading(true);
    setCurrentImageIndex((prev) => (prev - 1 + technicalImages.length) % technicalImages.length);
  };

  const nextShader = () => {
    setIsShaderFading(true);
    setCurrentShaderIndex((prev) => (prev + 1) % shaderImages.length);
  };

  const prevShader = () => {
    setIsShaderFading(true);
    setCurrentShaderIndex((prev) => (prev - 1 + shaderImages.length) % shaderImages.length);
  };

  return (
    <div className="min-h-screen bg-[#030014] overflow-hidden">
      {/* Animated Technical Background */}
      <div className="fixed inset-0 w-screen h-screen">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5"></div>
        </div>
        {/* Animated Code Lines */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
              style={{
                top: `${Math.random() * 100}%`,
                left: '-100%',
                width: '100%',
                animation: `slideRight ${10 + Math.random() * 20}s linear infinite`,
                animationDelay: `${-Math.random() * 20}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Header Section */}
      <header className="relative z-10">
        <nav className="fixed top-0 left-0 right-0 bg-black/10 backdrop-blur-xl border-b border-white/10">
          <div className="container mx-auto px-6 py-4">
            <Link
              href="/"
              className="inline-flex items-center text-white hover:text-primary transition-all duration-300 group"
            >
              <span className="relative overflow-hidden">
                <span className="inline-block transform group-hover:-translate-y-full transition-transform duration-300">Back to Home</span>
                <span className="absolute top-full left-0 transform group-hover:-translate-y-full transition-transform duration-300">← Return</span>
              </span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 flex items-center justify-center">
        <div 
          className={`relative z-20 text-center transform transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{
            transform: `perspective(1000px) rotateX(${(mousePosition.y - 50) * 0.02}deg) rotateY(${(mousePosition.x - 50) * 0.02}deg)`,
          }}
        >
          <div className="relative inline-block mb-8">
            <h1 className="text-7xl md:text-8xl xl:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-primary to-purple-500 mb-8 tracking-tight">
              Technical Art
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-primary to-purple-500 opacity-30 blur-xl"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Where code meets creativity - Crafting visual experiences through technical innovation
          </p>
          <div className="flex items-center justify-center space-x-8">
            <a
              href="#shader-work"
              className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">Shader Work</span>
            </a>
            <a
              href="#technical-systems"
              className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">Procedural Content Generation</span>
            </a>
          </div>
        </div>

        {/* Animated Circuit Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl mix-blend-overlay animate-pulse"></div>
            <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="url(#circuit-gradient)" strokeWidth="0.5"/>
              <defs>
                <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#A855F7" stopOpacity="0.2"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* Technical Systems Section */}
      <section id="technical-systems" className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="relative inline-block mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Technical Systems
              </h2>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-xl"></div>
            </div>
            
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden group perspective">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 transition-opacity duration-500 z-10"></div>
              
              <div className="relative h-full w-full transform group-hover:scale-105 transition-transform duration-700">
                <div className={`absolute inset-0 transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                  <Image
                    src={technicalImages[displayedImageIndex].src}
                    alt={technicalImages[displayedImageIndex].alt}
                    fill
                    className="object-cover"
                  />
                </div>
                {isFading && (
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300">
                    <Image
                      src={technicalImages[currentImageIndex].src}
                      alt={technicalImages[currentImageIndex].alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Navigation Controls */}
              <div className="absolute inset-0 z-20 flex items-center justify-between p-4">
                <button
                  onClick={prevImage}
                  className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
                >
                  <svg className="w-8 h-8 text-white transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
                >
                  <svg className="w-8 h-8 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                  style={{ width: `${((currentImageIndex + 1) / technicalImages.length) * 100}%` }}
                ></div>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 z-20 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-white font-mono">
                  {currentImageIndex + 1} / {technicalImages.length}
                </span>
              </div>

              {/* Technical Overlay */}
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Shader Work Section */}
      <section id="shader-work" className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="relative inline-block mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Shader Work
              </h2>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 opacity-30 blur-xl"></div>
            </div>
            
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 transition-opacity duration-500 z-10"></div>
              
              <div className="relative h-full w-full transform group-hover:scale-105 transition-transform duration-700">
                <div className={`absolute inset-0 transition-opacity duration-300 ${isShaderFading ? 'opacity-0' : 'opacity-100'}`}>
                  <Image
                    src={shaderImages[displayedShaderIndex].src}
                    alt={shaderImages[displayedShaderIndex].alt}
                    fill
                    className="object-cover"
                  />
                </div>
                {isShaderFading && (
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300">
                    <Image
                      src={shaderImages[currentShaderIndex].src}
                      alt={shaderImages[currentShaderIndex].alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Navigation Controls */}
              <div className="absolute inset-0 z-20 flex items-center justify-between p-4">
                <button
                  onClick={prevShader}
                  className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
                >
                  <svg className="w-8 h-8 text-white transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextShader}
                  className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
                >
                  <svg className="w-8 h-8 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
                  style={{ width: `${((currentShaderIndex + 1) / shaderImages.length) * 100}%` }}
                ></div>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 z-20 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-white font-mono">
                  {currentShaderIndex + 1} / {shaderImages.length}
                </span>
              </div>

              {/* Shader Pattern Overlay */}
              <div className="absolute inset-0 bg-[url('/shader-pattern.svg')] opacity-10"></div>
            </div>
          </div>
        </div>

        {/* Animated Circuit Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#030014] to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-block mb-8">
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-primary to-purple-500">
                Let's Innovate Together
              </h2>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-primary to-purple-500 opacity-30 blur-xl"></div>
            </div>
            <p className="text-gray-400 mb-12 text-lg">
              Ready to push the boundaries of technical art
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <a
                href="mailto:jacobpollard.work@gmail.com"
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <span className="inline-block p-4 bg-white/10 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    jacobpollard.work@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+61402552950"
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <span className="inline-block p-4 bg-white/10 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    +61 402 552 950
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 