import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const popularLinks = [
  { name: "Solution Finder", href: "/#solution-finder" },
  { name: "Dosage Calculator", href: "/tools/dosage-calculator" },
  { name: "Bio-Silicon", href: "/products/bio-silicon" },
  { name: "Crop Guides", href: "/knowledge/guides" },
];

const productLinks = [
  { name: "Plant Health", href: "/products/plant-health" },
  { name: "Pest Control", href: "/products/pest-control" },
  { name: "Disease Control", href: "/products/disease-control" },
  { name: "All Products", href: "/products" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">P</span>
              </div>
              <span className="font-bold text-xl">Plantmagic</span>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Partners with Nature for a Sustainable Future. Empowering Indian agriculture 
              with Bio-Magic biostimulants since 2008.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Popular Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Popular Links</h4>
            <ul className="space-y-3">
              {popularLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-secondary" />
                <p className="text-primary-foreground/80 text-sm">
                  123 Green Valley, Bio-Tech Park,<br />
                  Hyderabad, Telangana 500081
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <a href="tel:+911234567890" className="text-primary-foreground/80 text-sm hover:text-secondary">
                  +91 123 456 7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <a href="mailto:info@plantmagic.in" className="text-primary-foreground/80 text-sm hover:text-secondary">
                  info@plantmagic.in
                </a>
              </div>
            </div>

            <h5 className="font-medium mb-3">Newsletter</h5>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Plantmagic.in. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-primary-foreground/60 text-sm hover:text-secondary">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 text-sm hover:text-secondary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
