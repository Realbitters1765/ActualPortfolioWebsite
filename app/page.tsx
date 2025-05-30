"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
// i cum!
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 z-10"></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/showreel.mp4" type="video/mp4" />
          </video>
        </div>

        <div className={`relative z-20 text-center transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold text-white mb-6 tracking-tight">
            Jacob Pollard
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Game Developer & Technical Artist
          </p>
          <div className="flex items-center justify-center space-x-6">
            <a
              href="#work"
              className="px-8 py-4 bg-primary/90 text-white rounded-lg hover:bg-primary transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Featured Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Technical Art Card */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                <Image
                  src="/CoverImg1.png"
                  alt="Technical Art...dawdawdawffawfawadfawd."
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-bold text-white mb-3">Technical Art</h3>
                <p className="text-gray-300 mb-4">
                  Shaders, VFX, and Technical Solutions
                </p>
                <Link
                  href="/technicalart"
                  className="inline-flex items-center text-white hover:text-primary transition-colors duration-300"
                >
                  <span>Explore Work</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* 3D Art Card */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                <Image
                  src="/MeatPlaceImg1.png"
                  alt="3D Art"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-bold text-white mb-3">3D Art</h3>
                <p className="text-gray-300 mb-4">
                  Character Models & Environment Design
                </p>
                <Link
                  href="/3dart"
                  className="inline-flex items-center text-white hover:text-primary transition-colors duration-300"
                >
                  <span>Explore Work</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
      </section>

      {/* About Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  About Me
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Hey! I'm Jacob, an aspiring game developer specializing in 3D and Technical Art. 
                  I'm passionate about creating immersive experiences through innovative technical solutions 
                  and compelling artistic design.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white">
                    Unreal Engine
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white">
                    Unity
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white">
                    Blender
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-white">
                    ZBrush
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/IMG_5185-2.JPG"
                    alt="Jacob Pollard"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/30 rounded-full filter blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Let's Work Together
            </h2>
            <p className="text-gray-300 mb-12 text-lg">
              Open to new opportunities and exciting projects
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <span className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                    <svg
                      className="w-8 h-8 text-primary"
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
                  <a
                    href="mailto:jacobpollard.work@gmail.com"
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    jacobpollard.work@gmail.com
                  </a>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <span className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                    <svg
                      className="w-8 h-8 text-primary"
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
                  <a
                    href="tel:+61402552950"
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    +61 402 552 950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </section>
    </div>
  );
}
