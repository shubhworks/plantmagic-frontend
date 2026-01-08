import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, Leaf, Award, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "Products", href: "/products" },
  { name: "Crops", href: "/crops" },
  { name: "Knowledge", href: "/knowledge" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const solutions = [
  { name: "Bio-Stimulants", href: "/products/bio-stimulants" },
  { name: "Crop Protection", href: "/products/crop-protection" },
  { name: "Soil Health", href: "/products/soil-health" },
  { name: "Plant Nutrition", href: "/products/plant-nutrition" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const stats = [
  { icon: Leaf, value: "300+", label: "Bio-Solutions" },
  { icon: Users, value: "50K+", label: "Happy Farmers" },
  { icon: Globe, value: "15+", label: "States Covered" },
  { icon: Award, value: "ISO", label: "Certified" },
];

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10 py-12">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary to-amber-400 rounded-xl flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-bold text-2xl bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                    PlantMagic
                  </span>
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Empowering sustainable agriculture through innovative bio-solutions. 
                  Your trusted partner for healthier crops and better yields.
                </p>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-secondary transition-all duration-300 border border-white/20"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6 text-secondary">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className="text-white/80 hover:text-secondary transition-colors text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-secondary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-semibold text-lg mb-6 text-secondary">Solutions</h4>
              <ul className="space-y-3">
                {solutions.map((solution, index) => (
                  <motion.li
                    key={solution.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={solution.href}
                      className="text-white/80 hover:text-secondary transition-colors text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-secondary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {solution.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h4 className="font-semibold text-lg mb-6 text-secondary">Get In Touch</h4>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 mt-1 text-secondary flex-shrink-0" />
                  <p className="text-white/80 text-sm leading-relaxed">
                    Bio-Tech Park, Hyderabad<br />
                    Telangana, India
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                  <a href="tel:+911234567890" className="text-white/80 text-sm hover:text-secondary transition-colors">
                    +91 123 456 7890
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                  <a href="mailto:info@plantmagic.in" className="text-white/80 text-sm hover:text-secondary transition-colors">
                    info@plantmagic.in
                  </a>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <h5 className="font-medium mb-3 text-white">Stay Updated</h5>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-sm h-9"
                  />
                  <Button className="bg-gradient-to-r from-secondary to-amber-400 hover:from-secondary/90 hover:to-amber-400/90 text-white shrink-0 h-9 px-4 text-sm">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10 bg-black/20">
        <div className="container-wide py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 PlantMagic. All rights reserved. Made with 💚 for farmers.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-white/60 text-sm hover:text-secondary transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-white/60 text-sm hover:text-secondary transition-colors">
                Terms
              </Link>
              <Link to="/sitemap" className="text-white/60 text-sm hover:text-secondary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};