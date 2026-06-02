import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Target, Shield, Zap } from "lucide-react";

import trainer1 from "@assets/trainer-1.png";
import trainer2 from "@assets/trainer-2.png";
import trainer3 from "@assets/trainer-3.png";
import community from "@assets/community.png";
import heroBg from "@assets/hero-bg.png";
import classCrossfit from "@assets/class-crossfit.png";
import classAerobics from "@assets/class-aerobics.png";
import classYoga from "@assets/class-yoga.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Header Animation
    gsap.from(".about-header", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Scroll Animations
    gsap.utils.toArray(".reveal-section").forEach((section: any) => {
      gsap.from(section.querySelectorAll(".reveal-item"), {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });
    });

    // Animated Counters
    gsap.utils.toArray(".stat-counter").forEach((counter: any) => {
      const target = parseFloat(counter.getAttribute("data-target") || "0");
      
      ScrollTrigger.create({
        trigger: counter,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(counter, {
            innerHTML: target,
            duration: 2,
            ease: "power2.out",
            snap: { innerHTML: 1 },
            onUpdate: function() {
              counter.innerHTML = Math.round(parseFloat(counter.innerHTML));
            }
          });
        }
      });
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-24 pb-12">
      <Helmet>
        <title>About Us | Raise The Bar Fitness Center</title>
        <meta name="description" content="Learn about our mission, meet our expert trainers, and see why we are Pune's top fitness community." />
      </Helmet>

      {/* Header */}
      <section className="py-20 text-center container mx-auto px-4 about-header">
        <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tighter mb-6 text-primary">
          Our Story
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground font-medium">
          Born from a passion for true fitness, Raise The Bar is more than a gym. It's a community forged in sweat and dedication.
        </p>
      </section>

      {/* Mission */}
      <section className="py-24 bg-card reveal-section border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 reveal-item">
              <img 
                src={community} 
                alt="Our fitness community" 
                className="w-full aspect-[4/3] object-cover border border-border"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="reveal-item text-sm font-bold text-primary tracking-widest uppercase">The Mission</h2>
              <h3 className="reveal-item text-4xl md:text-5xl font-black font-display uppercase tracking-tight">
                Redefining Fitness In Pune
              </h3>
              <p className="reveal-item text-lg text-muted-foreground leading-relaxed">
                We noticed a gap in the fitness industry. Too many corporate gyms treated members as numbers. We wanted a place where the trainers actually knew your name, where your goals became our goals, and where the energy when you walk through the door immediately makes you want to work harder.
              </p>
              <p className="reveal-item text-lg text-muted-foreground leading-relaxed">
                Raise The Bar was built to be that place. A gritty, authentic, high-energy hub where egos are left at the door and hard work is the only currency that matters.
              </p>
              <div className="reveal-item grid grid-cols-2 gap-8 pt-8 border-t border-border">
                <div>
                  <div className="text-5xl font-black font-display text-primary mb-2 stat-counter" data-target="175">0</div>
                  <div className="font-bold tracking-wider uppercase text-sm">5-Star Reviews</div>
                </div>
                <div>
                  <div className="text-5xl font-black font-display text-primary mb-2 stat-counter" data-target="5000">0</div>
                  <div className="font-bold tracking-wider uppercase text-sm">Lives Changed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 reveal-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="reveal-item text-4xl md:text-5xl font-black font-display uppercase tracking-tight mb-16">
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Community First", icon: Users, desc: "We support each other. Your victories are our victories." },
              { title: "Relentless Focus", icon: Target, desc: "Show up, put in the work, and results will follow." },
              { title: "Zero Ego", icon: Shield, desc: "Everyone starts somewhere. We judge by effort, not ability." },
              { title: "Raw Energy", icon: Zap, desc: "Bring the intensity. We provide the environment." }
            ].map((val, i) => (
              <div key={i} className="reveal-item bg-card p-8 border border-border flex flex-col items-center text-center group hover:border-primary transition-colors">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <val.icon size={32} />
                </div>
                <h3 className="text-xl font-bold font-display uppercase mb-3">{val.title}</h3>
                <p className="text-muted-foreground">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-card reveal-section border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-item">
            <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight mb-4">
              Meet The Experts
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our trainers aren't just certified—they live and breathe fitness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Vikram S.", role: "Head Coach / Crossfit", img: trainer1 },
              { name: "Neha R.", role: "Yoga & Core Specialist", img: trainer2 },
              { name: "Arjun M.", role: "Strength & Conditioning", img: trainer3 }
            ].map((trainer, i) => (
              <div key={i} className="reveal-item group">
                <div className="aspect-[3/4] overflow-hidden border border-border mb-6">
                  <img 
                    src={trainer.img} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                </div>
                <h3 className="text-2xl font-black font-display uppercase mb-1">{trainer.name}</h3>
                <p className="text-primary font-bold tracking-wider text-sm uppercase">{trainer.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 reveal-section">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="reveal-item text-4xl md:text-5xl font-black font-display uppercase tracking-tight">
            The Hub
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          <div className="reveal-item aspect-square overflow-hidden border border-border">
            <img src={heroBg} alt="Gym Equipment" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="reveal-item aspect-square overflow-hidden border border-border">
            <img src={classCrossfit} alt="Training Area" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="reveal-item aspect-square overflow-hidden border border-border md:col-span-2">
            <img src={community} alt="Community" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="reveal-item aspect-square overflow-hidden border border-border md:col-span-2">
            <img src={classAerobics} alt="Aerobics Studio" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="reveal-item aspect-square overflow-hidden border border-border">
            <img src={classYoga} alt="Yoga Studio" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="reveal-item aspect-square overflow-hidden border border-border flex items-center justify-center bg-primary text-primary-foreground p-8 text-center">
            <h3 className="text-2xl font-black font-display uppercase">Join The Movement</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
