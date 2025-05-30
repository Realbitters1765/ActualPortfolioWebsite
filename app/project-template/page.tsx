"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectTemplate() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [displayedImageIndex, setDisplayedImageIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
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

  // Add auto-scroll effect for project images
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isFading) {
        nextImage();
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [currentImageIndex, isFading]);

  const projectImages = [
    {
      src: "/project1.png",
      alt: "Project Screenshot 1"
    },
    {
      src: "/project2.png",
      alt: "Project Screenshot 2"
    },
    {
      src: "/project3.png",
      alt: "Project Screenshot 3"
    }
  ];

  const nextImage = () => {
    setIsFading(true);
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setIsFading(true);
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <div className="min-h-screen bg-[#030014] overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 w-screen h-screen">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5"></div>
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
        >
          <div className="relative inline-block mb-8">
            <h1 className="text-7xl md:text-8xl xl:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-primary to-purple-500 mb-8 tracking-tight">
              Project Name
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-primary to-purple-500 opacity-30 blur-xl"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Brief project description and overview
          </p>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="relative inline-block mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Project Details
              </h2>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-xl"></div>
            </div>
            
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden group perspective">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 transition-opacity duration-500 z-10"></div>
              
              <div className="relative h-full w-full transform group-hover:scale-105 transition-transform duration-700">
                <div className={`absolute inset-0 transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                  <Image
                    src={projectImages[displayedImageIndex].src}
                    alt={projectImages[displayedImageIndex].alt}
                    fill
                    className="object-cover"
                  />
                </div>
                {isFading && (
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300">
                    <Image
                      src={projectImages[currentImageIndex].src}
                      alt={projectImages[currentImageIndex].alt}
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
                  style={{ width: `${((currentImageIndex + 1) / projectImages.length) * 100}%` }}
                ></div>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 z-20 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-white font-mono">
                  {currentImageIndex + 1} / {projectImages.length}
                </span>
              </div>
            </div>

            {/* Project Information */}
            <div className="mt-16 grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Overview</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Detailed description of the project, its goals, and your role in it.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Technical Details</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Information about the technologies, tools, and techniques used in the project.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Challenges & Solutions</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Description of key challenges faced and how they were overcome.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Results</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Outcomes and achievements of the project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-block mb-8">
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-primary to-purple-500">
                Interested in Working Together?
              </h2>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-primary to-purple-500 opacity-30 blur-xl"></div>
            </div>
            <p className="text-gray-400 mb-12 text-lg">
              Let's discuss how we can collaborate on your next project
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