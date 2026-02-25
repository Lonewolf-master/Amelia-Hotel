import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../../components/common/Button';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
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
      gsap.to('.hero-bg', {
        yPercent: 30,
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
      {/* Background Media Placeholder */}
      <div className="hero-bg absolute inset-0 z-0 opacity-40 scale-110">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950 z-10" />
        {/* Placeholder image for now */}
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
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
          className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg md:text-xl font-light tracking-wide"
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

export default Hero;
