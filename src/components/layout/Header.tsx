import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// const productLinks = [
//   { name: "Plant Health", href: "/products/plant-health", description: "Bio-stimulants for optimal growth" },
//   { name: "Bio-Silicon", href: "/products/bio-silicon", description: "Cellular strength builder" },
//   { name: "Humagic Elixir", href: "/products/humagic-elixir", description: "Humic & Fulvic acid blend" },
//   { name: "Magne-Cal+", href: "/products/magne-cal", description: "Calcium & Magnesium boost" },
//   { name: "Pest Control", href: "/products/pest-control", description: "Natural pest management" },
//   { name: "Disease Control", href: "/products/disease-control", description: "Bio-fungicides & protection" },
// ];

const cropLinks = [
  { name: "Cereals", href: "/crops/cereals", description: "Wheat, Rice, Maize" },
  { name: "Vegetables", href: "/crops/vegetables", description: "Tomato, Chilli, Onion" },
  { name: "Fruits", href: "/crops/fruits", description: "Mango, Grape, Pomegranate" },
  { name: "Cash Crops", href: "/crops/cash-crops", description: "Cotton, Sugarcane, Tobacco" },
];

const knowledgeLinks = [
  { name: "Guides", href: "/knowledge/guides", description: "Application & dosage guides" },
  { name: "Success Stories", href: "/knowledge/success-stories", description: "Farmer testimonials" },
  { name: "Research", href: "/knowledge/research", description: "Scientific publications" },
];

interface MegaMenuProps {
  title: string;
  links: { name: string; href: string; description: string }[];
  isOpen: boolean;
}

const MegaMenu = ({ title, links, isOpen }: MegaMenuProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.2 }}
        className="fixed top-20 left-1/2 -translate-x-1/2 bg-card border border-border rounded-lg shadow-elevated z-40 w-[95vw] max-w-3xl mt-2"
      >
        <div className="py-6 px-6">
          <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">{title}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="group p-3 rounded-lg hover:bg-accent transition-colors"
              >
                <p className="font-medium text-sm text-foreground group-hover:text-secondary transition-colors">
                  {link.name}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">P</span>
            </div>
            <span className="font-bold text-xl text-foreground">Plantmagic</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("products")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                to="/products"
                className={`flex items-center px-4 py-2 text-sm font-medium transition-colors hover:text-secondary ${
                  isActive("/products") ? "text-secondary" : "text-foreground"
                }`}
              >
                Products
              </Link>

              {/* <MegaMenu title="Our Products" links={productLinks} isOpen={activeMenu === "products"} /> */}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("crops")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                to="/crops"
                className={`flex items-center px-4 py-2 text-sm font-medium transition-colors hover:text-secondary ${
                  isActive("/crops") ? "text-secondary" : "text-foreground"
                }`}
              >
                Crops
              </Link>
              {/* <MegaMenu title="Crop Solutions" links={cropLinks} isOpen={activeMenu === "crops"} /> */}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("knowledge")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                to="/knowledge"
                className={`flex items-center px-4 py-2 text-sm font-medium transition-colors hover:text-secondary ${
                  isActive("/knowledge") ? "text-secondary" : "text-foreground"
                }`}
              >
                Knowledge Hub
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <MegaMenu title="Knowledge Hub" links={knowledgeLinks} isOpen={activeMenu === "knowledge"} />
            </div>

            <Link
              to="/about"
              className={`px-4 py-2 text-sm font-medium transition-colors hover:text-secondary ${
                isActive("/about") ? "text-secondary" : "text-foreground"
              }`}
            >
              About Us
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-foreground hover:text-secondary hover:bg-accent"
            >
              <Search className="h-5 w-5" />
            </Button>

            <Link to="/contact">
              <Button className="hidden md:inline-flex bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Contact us
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden pb-4"
            >
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search for products, crops, pests..."
                  className="pl-12 h-12 bg-muted border-0 focus-visible:ring-secondary"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <nav className="container-wide py-6 space-y-4">
              <Link to="/products" className="block py-2 text-foreground font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                Products
              </Link>
              <Link to="/crops" className="block py-2 text-foreground font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                Crops
              </Link>
              <Link to="/knowledge" className="block py-2 text-foreground font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                Knowledge Hub
              </Link>
              <Link to="/about" className="block py-2 text-foreground font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Contact us
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
