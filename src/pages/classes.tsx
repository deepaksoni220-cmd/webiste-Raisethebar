import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import classAerobics from "@assets/class-aerobics.png";
import classYoga from "@assets/class-yoga.png";
import classCrossfit from "@assets/class-crossfit.png";

gsap.registerPlugin(ScrollTrigger);

const schedule = [
  { time: "06:00 AM", class: "Crossfit", trainer: "Vikram S.", type: "strength" },
  { time: "07:30 AM", class: "Yoga", trainer: "Neha R.", type: "mind-body" },
  { time: "09:00 AM", class: "Aerobics", trainer: "Pooja D.", type: "cardio" },
  { time: "10:30 AM", class: "Weight Training", trainer: "Arjun M.", type: "strength" },
  { time: "05:00 PM", class: "Zumba", trainer: "Simran K.", type: "cardio" },
  { time: "06:30 PM", class: "Bollybeats", trainer: "Raj T.", type: "cardio" },
  { time: "08:00 PM", class: "Crossfit", trainer: "Vikram S.", type: "strength" }
];

export default function Classes() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".classes-header", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(".schedule-row", {
      x: -50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".schedule-container",
        start: "top 80%",
      }
    });
    
    gsap.from(".featured-class", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".featured-container",
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-24 pb-12">
      <Helmet>
        <title>Class Schedule | Raise The Bar Fitness Center</title>
        <meta name="description" content="View our weekly class schedule. Join our high-energy group fitness classes in Pune." />
      </Helmet>

      <section className="py-20 text-center container mx-auto px-4 classes-header">
        <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tighter mb-6 text-primary">
          Class Schedule
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground font-medium">
          Commit to a time. Show up. Put in the work.
        </p>
      </section>

      {/* Featured Classes */}
      <section className="py-12 bg-card border-y border-border featured-container">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black font-display uppercase tracking-tight mb-12 text-center">Featured Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="featured-class group relative aspect-[4/5] overflow-hidden border border-border cursor-pointer">
              <img src={classCrossfit} alt="Crossfit" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent flex flex-col justify-end p-8">
                <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 w-fit mb-3">High Intensity</span>
                <h3 className="text-3xl font-black font-display uppercase mb-2">Crossfit</h3>
                <p className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  Push your physical limits with constantly varied functional movements performed at high intensity.
                </p>
              </div>
            </div>
            
            <div className="featured-class group relative aspect-[4/5] overflow-hidden border border-border cursor-pointer">
              <img src={classAerobics} alt="Zumba" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent flex flex-col justify-end p-8">
                <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 w-fit mb-3">Cardio</span>
                <h3 className="text-3xl font-black font-display uppercase mb-2">Zumba & Dance</h3>
                <p className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  Ditch the workout, join the party. Burn massive calories while dancing to electrifying beats.
                </p>
              </div>
            </div>

            <div className="featured-class group relative aspect-[4/5] overflow-hidden border border-border cursor-pointer">
              <img src={classYoga} alt="Yoga" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent flex flex-col justify-end p-8">
                <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 w-fit mb-3">Mind & Body</span>
                <h3 className="text-3xl font-black font-display uppercase mb-2">Power Yoga</h3>
                <p className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  Build incredible core strength, flexibility, and focus through dynamic flowing sequences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Table */}
      <section className="py-24 schedule-container">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-black font-display uppercase tracking-tight">Daily Timetable</h2>
              <p className="text-muted-foreground mt-2">Schedule is subject to change. Please book in advance.</p>
            </div>
            <div className="flex gap-4 text-sm font-bold uppercase tracking-wider">
              <span className="flex items-center gap-2"><div className="w-3 h-3 bg-red-500 rounded-full"></div> Strength</span>
              <span className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-500 rounded-full"></div> Cardio</span>
              <span className="flex items-center gap-2"><div className="w-3 h-3 bg-green-500 rounded-full"></div> Mind-Body</span>
            </div>
          </div>

          <div className="bg-card border border-border overflow-hidden">
            <div className="grid grid-cols-12 bg-secondary/50 border-b border-border p-4 font-bold font-display uppercase tracking-wider text-sm hidden md:grid">
              <div className="col-span-3">Time</div>
              <div className="col-span-5">Class</div>
              <div className="col-span-4">Trainer</div>
            </div>
            
            <div className="divide-y divide-border">
              {schedule.map((slot, i) => (
                <div key={i} className="schedule-row grid grid-cols-1 md:grid-cols-12 p-4 items-center hover:bg-secondary/30 transition-colors">
                  <div className="col-span-3 font-bold text-lg md:text-base text-primary mb-1 md:mb-0">
                    {slot.time}
                  </div>
                  <div className="col-span-5 mb-2 md:mb-0 flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      slot.type === 'strength' ? 'bg-red-500' : 
                      slot.type === 'cardio' ? 'bg-blue-500' : 'bg-green-500'
                    }`} />
                    <span className="font-display font-bold text-xl md:text-lg uppercase">{slot.class}</span>
                  </div>
                  <div className="col-span-4 text-muted-foreground flex justify-between items-center">
                    <span>{slot.trainer}</span>
                    <a href="/contact" className="text-xs font-bold uppercase tracking-wider bg-background border border-border px-3 py-1 hover:border-primary hover:text-primary transition-colors">
                      Book
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
