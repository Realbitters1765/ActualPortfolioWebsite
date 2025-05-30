"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectTemplate() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [displayedImageIndex, setDisplayedImageIndex] = useState(0);
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

  const nextImage = () => {
    setIsFading(true);
    setCurrentImageIndex((prev) => (prev + 1) % shaderImages.length);
  };

  const prevImage = () => {
    setIsFading(true);
    setCurrentImageIndex((prev) => (prev - 1 + shaderImages.length) % shaderImages.length);
  };

  const shaderImages = [
    {
      src: "/CellShader.png",
      alt: "Custom Shader - Cell Shader"
    },
    {
      src: "/impact frame shaderoff.png",
      alt: "Custom Shader - Impact Frame Shader Off"
    },
    {
      src: "/impact frame shaderon.png",
      alt: "Custom Shader - Impact Frame Shader On"
    }
  ];

  return (
    <div className="min-h-screen bg-[#140003] overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 w-screen h-screen">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff00002e_1px,transparent_1px),linear-gradient(to_bottom,#ff00002e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-900/5"></div>
        </div>
        {/* Enhanced Animated Code Lines */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
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
        <nav className="fixed top-0 left-0 right-0 bg-black/10 backdrop-blur-xl border-b border-red-500/10">
          <div className="container mx-auto px-6 py-4">
            <Link
              href="/"
              className="inline-flex items-center text-white hover:text-red-500 transition-all duration-300 group"
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
            <h1 className="text-7xl md:text-8xl xl:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-600 to-red-700 mb-8 tracking-tight">
              Project Showcase
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 opacity-30 blur-xl"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            My best contributions and work on this project.
          </p>
          <div className="flex items-center justify-center space-x-8">
            <a
              href="#shaders"
              className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/50 to-red-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">Shaders</span>
            </a>
            <a
              href="#animations"
              className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-700/50 to-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">Animations</span>
            </a>
            <a
              href="#vfx"
              className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/50 to-red-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">Visual Effects</span>
            </a>
          </div>
        </div>
      </section>

      {/* Shaders Section */}
      <section id="shaders" className="relative py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12">Shader Work</h2>
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <div className={`transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
              <Image
                src={shaderImages[displayedImageIndex].src}
                alt={shaderImages[displayedImageIndex].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-lg font-medium">{shaderImages[displayedImageIndex].alt}</p>
            </div>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </section>


 
      {/* VFX Section */}
      <section id="vfx" className="relative py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12">Visual Effects</h2>
          
          {/* Ultimate Animation Video */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-6">Ultimate Animation</h3>
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <video
                src="/ultimate move.mp4"
                className="w-full h-full object-cover"
                controls
                autoPlay
                loop
                muted
              />
            </div>
          </div>

          {/* Visual Effects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* VFX 1 */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/VisualEffect1.png"
                  alt="Visual Effect 1"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Advanced Visual Effects</h3>
                <p className="text-gray-300">
                  Custom visual effects created using Unity's visual effect graph, using a couple of custom scrolling texture shaders to produce the intended effect.
                  
                </p>
              </div>
            </div>

            {/* VFX 2 */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/VisualEffect2.png"
                  alt="Visual Effect 2"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Attack Visual Effects</h3>
                <p className="text-gray-300">
                  Visual effects used to enhance the visual appeal of the games combat system.
                  
                </p>
              </div>
            </div>

            {/* VFX 3 */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/visualeffect3.png"
                  alt="Visual Effect 3"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Laser Pillar GRaph</h3>
                <p className="text-gray-300">
                  This is the graph used to create the laser pillar effect shown in the ultimate effect.
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 