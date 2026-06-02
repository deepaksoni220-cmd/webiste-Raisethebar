import { Link } from "wouter";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/">
              <span className="text-2xl font-display font-black tracking-tighter text-foreground">
                RAISE THE BAR
              </span>
            </Link>
            <p className="text-muted-foreground">
              Pune's premier fitness destination. Push past your limits in a high-energy, community-driven space.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="/classes" className="text-muted-foreground hover:text-primary transition-colors">Classes</Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Crossfit</Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Personal Training</Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Yoga Classes</Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Weight Training</Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Nutrition Consulting</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-muted-foreground">
                <MapPin className="shrink-0 text-primary" size={20} />
                <span>2nd Floor, Parmar Gallery, Jagtap Chowk, above Axis Bank, Vikas Nagar, Wanowrie, Pune 411040</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="shrink-0 text-primary" size={20} />
                <span>079722 70054</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="shrink-0 text-primary" size={20} />
                <span>hello@raisethebarpune.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Raise The Bar Fitness Center. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 font-bold">175+</span>
            <span className="text-sm text-muted-foreground">5-Star Google Reviews</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
