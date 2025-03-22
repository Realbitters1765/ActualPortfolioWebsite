"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ThreeDArt() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentEnvImageIndex, setCurrentEnvImageIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isEnvFading, setIsEnvFading] = useState(false);
  const [displayedImageIndex, setDisplayedImageIndex] = useState(0);
  const [displayedEnvImageIndex, setDisplayedEnvImageIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isFading) {
      const timer = setTimeout(() => {
        setDisplayedImageIndex(currentImageIndex);
        setIsFading(false);
      }, 300); // Match this with CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isFading, currentImageIndex]);

  useEffect(() => {
    if (isEnvFading) {
      const timer = setTimeout(() => {
        setDisplayedEnvImageIndex(currentEnvImageIndex);
        setIsEnvFading(false);
      }, 300); // Match this with CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isEnvFading, currentEnvImageIndex]);

  // Add auto-scroll effect for character images
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isFading) {
        nextImage();
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [currentImageIndex, isFading]);

  // Add auto-scroll effect for environment images
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isEnvFading) {
        nextEnvImage();
      }
    }, 7500);

    return () => clearInterval(timer);
  }, [currentEnvImageIndex, isEnvFading]);

  const characterImages = [
    {
      src: "/NewLevelSequence.0000.jpeg",
      alt: "Elephant Man Character Model - View 1"
    },
    {
      src: "/NewLevelSequence.0001.jpeg",
      alt: "Elephant Man Character Model - View 2"
    },
    {
      src: "/NewLevelSequence.0002.jpeg",
      alt: "Elephant Man Character Model - View 3"
    },
    {
      src: "/NewLevelSequence.0003.jpeg",
      alt: "Elephant Man Character Model - View 4"
    },
    {
      src: "/NewLevelSequence.0004.jpeg",
      alt: "Elephant Man Character Model - View 5"
    }
  ];

  const environmentImages = [
    {
      src: "/MeatPlaceImg1.png",
      alt: "Meat Place Environment - Overview"
    },
    {
      src: "/MeatPlaceImg2.png",
      alt: "Meat Place Environment - Interior"
    },
    {
      src: "/MeatPlaceImg3.png",
      alt: "Meat Place Environment - Details"
    }
  ];

  const nextImage = () => {
    setIsFading(true);
    setCurrentImageIndex((prev) => (prev + 1) % characterImages.length);
  };

  const prevImage = () => {
    setIsFading(true);
    setCurrentImageIndex((prev) => (prev - 1 + characterImages.length) % characterImages.length);
  };

  const nextEnvImage = () => {
    setIsEnvFading(true);
    setCurrentEnvImageIndex((prev) => (prev + 1) % environmentImages.length);
  };

  const prevEnvImage = () => {
    setIsEnvFading(true);
    setCurrentEnvImageIndex((prev) => (prev - 1 + environmentImages.length) % environmentImages.length);
  };

  return (
    <div className="min-h-screen bg-[#030014] overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 w-screen h-screen">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#030014]/50 to-[#030014]"></div>
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
        <div className={`relative z-20 text-center transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-7xl md:text-8xl xl:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-blue-500 mb-8 tracking-tight">
            3D Artistry
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Exploring the intersection of technical precision and creative expression
          </p>
          <div className="flex items-center justify-center space-x-8">
            <a
              href="#character-models"
              className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">Character Models</span>
            </a>
            <a
              href="#environments"
              className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">Environments</span>
            </a>
          </div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full filter blur-3xl mix-blend-overlay animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl mix-blend-overlay animate-pulse delay-1000"></div>
      </section>

      {/* Character Models Section */}
      <section id="character-models" className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-16">
              Character Models
            </h2>
            
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 transition-opacity duration-500 z-10"></div>
              
              <div className="relative h-full w-full">
                <div className={`absolute inset-0 transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                  <Image
                    src={characterImages[displayedImageIndex].src}
                    alt={characterImages[displayedImageIndex].alt}
                    fill
                    className="object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {isFading && (
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300">
                    <Image
                      src={characterImages[currentImageIndex].src}
                      alt={characterImages[currentImageIndex].alt}
                      fill
                      className="object-cover transform scale-105"
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
                  className="h-full bg-gradient-to-r from-primary to-blue-500 transition-all duration-300"
                  style={{ width: `${((currentImageIndex + 1) / characterImages.length) * 100}%` }}
                ></div>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 z-20 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-white font-mono">
                  {currentImageIndex + 1} / {characterImages.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environment Section */}
      <section id="environments" className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-primary mb-16">
              Environments
            </h2>
            
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden group perspective">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 transition-opacity duration-500 z-10"></div>
              
              <div className="relative h-full w-full transform group-hover:rotate-y-12 transition-transform duration-700">
                <div className={`absolute inset-0 transition-opacity duration-300 ${isEnvFading ? 'opacity-0' : 'opacity-100'}`}>
                  <Image
                    src={environmentImages[displayedEnvImageIndex].src}
                    alt={environmentImages[displayedEnvImageIndex].alt}
                    fill
                    className="object-cover"
                  />
                </div>
                {isEnvFading && (
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300">
                    <Image
                      src={environmentImages[currentEnvImageIndex].src}
                      alt={environmentImages[currentEnvImageIndex].alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Navigation Controls */}
              <div className="absolute inset-0 z-20 flex items-center justify-between p-4">
                <button
                  onClick={prevEnvImage}
                  className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
                >
                  <svg className="w-8 h-8 text-white transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextEnvImage}
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
                  className="h-full bg-gradient-to-r from-blue-500 to-primary transition-all duration-300"
                  style={{ width: `${((currentEnvImageIndex + 1) / environmentImages.length) * 100}%` }}
                ></div>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 z-20 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-white font-mono">
                  {currentEnvImageIndex + 1} / {environmentImages.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl mix-blend-overlay animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl mix-blend-overlay animate-float-delayed"></div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-blue-500 mb-8">
              Let's Create Together
            </h2>
            <p className="text-gray-400 mb-12 text-lg">
              Open to collaborations and new opportunities
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <a
                href="mailto:jacobpollard.work@gmail.com"
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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