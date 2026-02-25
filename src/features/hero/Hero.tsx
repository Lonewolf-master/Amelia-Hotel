import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../../components/common/Button';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animations
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });
      
      tl.fromTo(titleRef.current, 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, delay: 0.5 }
      )
      .fromTo(subtitleRef.current, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1 }, 
        '-=1'
      )
      .fromTo(ctaRef.current, 
        { scale: 0.9, opacity: 0 }, 
        { scale: 1, opacity: 1 }, 
        '-=0.8'
      );

      // Parallax Effect
      gsap.to('.hero-bg-container', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background Container */}
      <div className="hero-bg-container absolute inset-0 z-0 scale-110">
        {/* Overlays for depth and readability */}
        <div className="absolute inset-0 bg-slate-950/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950 z-10" />
        
        {/* Video with Poster (Initial Image) */}
        <video 
          autoPlay
          loop 
          muted 
          playsInline
          poster="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="w-full h-full object-cover"
        >
          <source 
            src="https://videos.pexels.com/video-files/3205736/3205736-uhd_2560_1440_25fps.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>

      <div className="relative z-20 text-center px-8">
        <h1 
          ref={titleRef}
          className="text-6xl md:text-9xl mb-6 luxury-heading flex flex-col items-center"
        >
          <span className="text-sm uppercase tracking-[0.5em] mb-4 text-gold/80 italic font-sans font-normal">Welcome to</span>
          <span className="flex flex-wrap justify-center gap-x-8">
            <span>Exquisite</span>
            <span className="text-white/90">Living</span>
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-slate-300 max-w-2xl mx-auto mb-12 text-lg md:text-xl font-light tracking-wide drop-shadow-lg"
        >
          Discover a sanctuary of refined elegance and personalized service in the heart of Buea.
        </p>

        <div ref={ctaRef}>
          <Button variant="luxury" className="px-12 py-4">
            Discover More
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
};
