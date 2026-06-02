import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Activity, Dumbbell, Flame, Heart, 
  Music, UserCheck, Utensils, Zap, Bike, Smile
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "crossfit",
    title: "Crossfit",
    icon: Dumbbell,
    desc: "A high-intensity fitness program incorporating elements from several sports and types of exercise.",
    benefits: ["Builds immense strength", "Improves cardiovascular endurance", "Highly scalable for all levels"]
  },
  {
    id: "personal-training",
    title: "Personal Training",
    icon: UserCheck,
    desc: "One-on-one expert guidance to help you reach your specific fitness goals faster and safer.",
    benefits: ["Customized workout plans", "Form correction and injury prevention", "Accountability and motivation"]
  },
  {
    id: "zumba",
    title: "Zumba",
    icon: Flame,
    desc: "An aerobic fitness program featuring movements inspired by various styles of Latin American dance.",
    benefits: ["Burns massive calories", "Full body toning", "Stress relief in a party atmosphere"]
  },
  {
    id: "yoga",
    title: "Yoga Classes",
    icon: Heart,
    desc: "A group of physical, mental, and spiritual practices aimed at achieving mind-body balance.",
    benefits: ["Increases flexibility and balance", "Reduces stress and anxiety", "Improves core strength"]
  },
  {
    id: "weight-training",
    title: "Weight Training",
    icon: Zap,
    desc: "Focused sessions designed to build muscle mass, increase strength, and transform body composition.",
    benefits: ["Boosts metabolism", "Increases bone density", "Sculpts and defines physique"]
  },
  {
    id: "aerobics",
    title: "Aerobics",
    icon: Activity,
    desc: "Rhythmic aerobic exercise combined with stretching and strength training routines.",
    benefits: ["Improves cardiovascular health", "Increases stamina", "Enhances immune system"]
  },
  {
    id: "dance-fitness",
    title: "Dance Fitness",
    icon: Music,
    desc: "Energetic group classes that combine dance choreography with cardiovascular exercise.",
    benefits: ["Improves coordination", "Boosts cardiovascular fitness", "Fun, social workout environment"]
  },
  {
    id: "nutrition",
    title: "Nutrition Consulting",
    icon: Utensils,
    desc: "Expert dietary guidance to complement your physical training and accelerate results.",
    benefits: ["Personalized meal plans", "Sustainable eating habits", "Optimized recovery and energy"]
  },
  {
    id: "cycling",
    title: "Cycling",
    icon: Bike,
    desc: "High-intensity indoor cycling classes set to motivating music.",
    benefits: ["Low-impact on joints", "Intense calorie burn", "Builds lower body strength"]
  },
  {
    id: "bollybeats",
    title: "Bollybeats",
    icon: Smile,
    desc: "A high-energy dance workout set to the latest Bollywood tracks.",
    benefits: ["Intense cardio session", "Culturally rich and fun", "Improves rhythm and agility"]
  }
];

export default function Services() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".services-header", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(".service-card", {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 85%",
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-24 pb-12">
      <Helmet>
        <title>Our Services | Raise The Bar Fitness Center</title>
        <meta name="description" content="Explore our 10 diverse fitness services including Crossfit, Zumba, Personal Training, Yoga, and Nutrition Consulting in Pune." />
      </Helmet>

      <section className="py-20 text-center container mx-auto px-4 services-header">
        <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tighter mb-6 text-primary">
          Our Disciplines
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground font-medium">
          10 targeted ways to push past your limits. Find your format, bring your effort.
        </p>
      </section>

      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4 services-grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="service-card group bg-background border border-border p-8 hover:border-primary transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-secondary flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors border border-border">
                    <service.icon size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-black font-display uppercase mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 h-[80px]">
                    {service.desc}
                  </p>
                  
                  <div className="space-y-3 pt-6 border-t border-border">
                    <h4 className="font-bold text-sm tracking-wider uppercase text-foreground">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">▹</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mini CTA */}
      <section className="py-24 text-center container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black font-display uppercase tracking-tight mb-6">
          Not sure where to start?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Our expert trainers can help you design a customized program that mixes the right disciplines for your specific goals.
        </p>
        <a href="/contact" className="inline-flex h-14 items-center justify-center bg-primary text-primary-foreground px-8 font-bold tracking-wider uppercase hover:bg-primary/90 transition-colors">
          Book a Consultation
        </a>
      </section>
    </div>
  );
}
