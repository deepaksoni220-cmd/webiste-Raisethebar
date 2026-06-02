import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const containerRef = useRef(null);
  const [formState, setFormState] = useState({ submitted: false });

  useGSAP(() => {
    gsap.from(".contact-header", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(".contact-box", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      delay: 0.3
    });
  }, { scope: containerRef });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ submitted: true });
    // Simulate API call
    setTimeout(() => {
      setFormState({ submitted: false });
      (e.target as HTMLFormElement).reset();
      alert("Message sent! We'll get back to you soon.");
    }, 1500);
  };

  return (
    <div ref={containerRef} className="pt-24 pb-0">
      <Helmet>
        <title>Contact Us | Raise The Bar Fitness Center</title>
        <meta name="description" content="Get in touch with Raise The Bar Fitness Center in Wanowrie, Pune. Start your fitness journey today." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              "name": "Raise The Bar Fitness Center",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2nd Floor, Parmar Gallery, Jagtap Chowk, above Axis Bank, Vikas Nagar",
                "addressLocality": "Wanowrie, Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411040",
                "addressCountry": "IN"
              },
              "telephone": "079722 70054",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "175"
              }
            }
          `}
        </script>
      </Helmet>

      <section className="py-20 text-center container mx-auto px-4 contact-header">
        <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tighter mb-6 text-primary">
          Step Up
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground font-medium">
          Ready to join Pune's most dedicated fitness community? Drop us a line or walk through our doors.
        </p>
      </section>

      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Form */}
          <div className="contact-box bg-card border border-border p-8 md:p-12 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
            <h2 className="text-3xl font-black font-display uppercase tracking-tight mb-8">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold tracking-wider uppercase text-muted-foreground">Full Name</label>
                  <input required type="text" id="name" className="w-full bg-background border border-border p-4 text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold tracking-wider uppercase text-muted-foreground">Phone Number</label>
                  <input required type="tel" id="phone" className="w-full bg-background border border-border p-4 text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="+91" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold tracking-wider uppercase text-muted-foreground">Email Address</label>
                <input required type="email" id="email" className="w-full bg-background border border-border p-4 text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="interest" className="text-sm font-bold tracking-wider uppercase text-muted-foreground">Area of Interest</label>
                <select id="interest" className="w-full bg-background border border-border p-4 text-foreground focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer">
                  <option value="general">General Membership</option>
                  <option value="crossfit">Crossfit</option>
                  <option value="personal-training">Personal Training</option>
                  <option value="zumba">Zumba / Dance</option>
                  <option value="yoga">Yoga</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold tracking-wider uppercase text-muted-foreground">Message</label>
                <textarea required id="message" rows={4} className="w-full bg-background border border-border p-4 text-foreground focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Tell us about your goals..."></textarea>
              </div>
              
              <Button type="submit" disabled={formState.submitted} size="xl" className="w-full rounded-none font-bold uppercase tracking-wider py-6 text-lg">
                {formState.submitted ? "Sending..." : "Submit Inquiry"} <Send className="ml-2" size={18} />
              </Button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-12">
            <div className="contact-box">
              <h2 className="text-3xl font-black font-display uppercase tracking-tight mb-8">The Hub</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary border border-border flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-wider text-sm text-muted-foreground mb-2">Location</h3>
                    <p className="text-lg">2nd Floor, Parmar Gallery, Jagtap Chowk,<br/>above Axis Bank, Vikas Nagar, Wanowrie,<br/>Pune, Maharashtra 411040</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary border border-border flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-wider text-sm text-muted-foreground mb-2">Phone</h3>
                    <p className="text-lg font-display">079722 70054</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary border border-border flex items-center justify-center text-primary shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-wider text-sm text-muted-foreground mb-2">Hours</h3>
                    <p className="text-lg">Mon - Sat: 5:30 AM - 10:30 PM<br/>Sun: 7:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-box bg-card border border-border p-6 flex items-center gap-6">
              <div className="text-center shrink-0">
                <div className="text-4xl font-black font-display text-primary">4.9</div>
                <div className="flex gap-1 text-primary justify-center my-1">
                  {[1,2,3,4,5].map(i => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                </div>
              </div>
              <div>
                <h3 className="font-bold font-display uppercase text-lg">Google Reviews</h3>
                <p className="text-muted-foreground text-sm">Based on 175+ reviews from our members in Pune.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-[500px] border-t border-border bg-secondary relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.565814578135!2d73.8967924!3d18.4988081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1c699999999%3A0x6b4fb24e477f13f1!2sRaise%20The%20Bar%20Fitness%20Center!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(1) contrast(1.2) brightness(0.8)' }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Raise The Bar Location Map"
        ></iframe>
      </div>
    </div>
  );
}
