import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Activity, Dumbbell, Users, HeartPulse, ArrowRight } from "lucide-react";

import heroBg from "@assets/hero-bg.png";
import classAerobics from "@assets/class-aerobics.png";
import classYoga from "@assets/class-yoga.png";
import classCrossfit from "@assets/class-crossfit.png";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Hero Animations
    const tl = gsap.timeline();
    
    tl.from(".hero-word", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      delay: 0.2
    })
    .from(".hero-sub", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4")
    .from(".hero-cta", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6");

    // Scroll Animations
    gsap.utils.toArray(".reveal-section").forEach((section: any) => {
      gsap.from(section.querySelectorAll(".reveal-item"), {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <Helmet>
        <title>Raise The Bar Fitness Center | Premium Gym in Pune</title>
        <meta name="description" content="Pune's premier fitness center. High-energy, community-driven space offering Crossfit, Zumba, Personal Training, and more." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Intense gym training" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/70 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center mt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display uppercase tracking-tighter leading-[0.9] mb-6 overflow-hidden">
            <div className="flex flex-wrap justify-center gap-4">
              <span className="hero-word inline-block">Push</span>
              <span className="hero-word inline-block text-primary">Past</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <span className="hero-word inline-block">Your</span>
              <span className="hero-word inline-block">Limits</span>
            </div>
          </h1>
          <p className="hero-sub max-w-2xl mx-auto text-lg md:text-2xl text-muted-foreground font-medium mb-10">
            Pune's most motivated people train here. Raw energy meets discipline in a community-driven fitness hub.
          </p>
          <div className="hero-cta">
            <Button size="xl" asChild className="text-lg px-8 py-6 rounded-none font-bold uppercase tracking-wider">
              <Link href="/contact">Start Your Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Stats */}
      <section className="py-20 bg-card reveal-section border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="reveal-item">
              <div className="text-4xl md:text-6xl font-black font-display text-primary mb-2">175+</div>
              <div className="text-sm md:text-base font-bold tracking-wider text-muted-foreground uppercase">5-Star Reviews</div>
            </div>
            <div className="reveal-item">
              <div className="text-4xl md:text-6xl font-black font-display text-primary mb-2">10+</div>
              <div className="text-sm md:text-base font-bold tracking-wider text-muted-foreground uppercase">Expert Trainers</div>
            </div>
            <div className="reveal-item">
              <div className="text-4xl md:text-6xl font-black font-display text-primary mb-2">10</div>
              <div className="text-sm md:text-base font-bold tracking-wider text-muted-foreground uppercase">Class Types</div>
            </div>
            <div className="reveal-item">
              <div className="text-4xl md:text-6xl font-black font-display text-primary mb-2">7</div>
              <div className="text-sm md:text-base font-bold tracking-wider text-muted-foreground uppercase">Days a Week</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-background reveal-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-item">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Our Disciplines</h2>
            <h3 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight">Train With Purpose</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Crossfit", icon: Dumbbell, desc: "High-intensity functional training for maximum results." },
              { title: "Personal Training", icon: Users, desc: "1-on-1 expert guidance tailored to your specific goals." },
              { title: "Zumba & Dance", icon: Activity, desc: "Electrifying cardio workouts that feel like a party." },
              { title: "Yoga", icon: HeartPulse, desc: "Build core strength, flexibility, and mental clarity." },
            ].map((service, i) => (
              <div key={i} className="reveal-item group bg-card border border-border p-8 hover:border-primary transition-colors">
                <service.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold font-display uppercase mb-3">{service.title}</h4>
                <p className="text-muted-foreground mb-6">{service.desc}</p>
                <Link href="/services" className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center reveal-item">
            <Button variant="outline" asChild className="rounded-none border-border hover:bg-primary hover:text-primary-foreground hover:border-primary">
              <Link href="/services">View All 10 Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Image Gallery Showcase */}
      <section className="py-24 bg-card border-y border-border reveal-section overflow-hidden">
        <div className="container mx-auto px-4 mb-12 text-center reveal-item">
          <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight">Inside The Hub</h2>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          <div className="min-w-[80vw] md:min-w-[40vw] lg:min-w-[30vw] aspect-[4/5] relative snap-center reveal-item group overflow-hidden">
            <img src={classCrossfit} alt="Crossfit" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl font-black font-display uppercase">Power & Strength</h3>
            </div>
          </div>
          <div className="min-w-[80vw] md:min-w-[40vw] lg:min-w-[30vw] aspect-[4/5] relative snap-center reveal-item group overflow-hidden">
            <img src={classAerobics} alt="Aerobics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl font-black font-display uppercase">High Energy Cardio</h3>
            </div>
          </div>
          <div className="min-w-[80vw] md:min-w-[40vw] lg:min-w-[30vw] aspect-[4/5] relative snap-center reveal-item group overflow-hidden">
            <img src={classYoga} alt="Yoga" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl font-black font-display uppercase">Focus & Flow</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background reveal-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-item">
            <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight">Real Results</h2>
            <p className="text-muted-foreground mt-4">Don't just take our word for it.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rahul S.", text: "Best gym in Wanowrie. The trainers are highly professional and the energy here is unmatched. It's not just a gym, it's a community." },
              { name: "Priya M.", text: "The Zumba classes are amazing! I actually look forward to working out now. Clean facilities and great equipment." },
              { name: "Amit K.", text: "Transformed my fitness journey. The crossfit sessions push you to your limits but the trainers ensure your form is perfect." },
            ].map((review, i) => (
              <div key={i} className="reveal-item bg-card p-8 border border-border">
                <div className="flex gap-1 text-primary mb-6">
                  {[1,2,3,4,5].map(star => (
                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg italic mb-6">"{review.text}"</p>
                <div className="font-bold font-display uppercase tracking-wider">{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground reveal-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="reveal-item text-4xl md:text-6xl font-black font-display uppercase tracking-tighter mb-6">Ready to Raise The Bar?</h2>
          <p className="reveal-item text-xl mb-10 max-w-2xl mx-auto font-medium opacity-90">Join Pune's premier fitness center today and start your transformation.</p>
          <div className="reveal-item flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" asChild className="bg-background text-foreground hover:bg-background/90 rounded-none font-bold uppercase tracking-wider px-8 py-6 text-lg">
              <Link href="/contact">Join Now</Link>
            </Button>
            <Button size="xl" variant="outline" asChild className="border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary rounded-none font-bold uppercase tracking-wider px-8 py-6 text-lg">
              <a href="tel:07972270054">Call 079722 70054</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
