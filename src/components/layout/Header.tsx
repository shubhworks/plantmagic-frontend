import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const productCategories = [
  {
    title: "Bio-Stimulants",
    items: [
      { name: "Root Enhancers", href: "/products/root-enhancers" },
      { name: "Growth Promoters", href: "/products/growth-promoters" },
      { name: "Stress Relievers", href: "/products/stress-relievers" },
    ]
  },
  {
    title: "Crop Protection",
    items: [
      { name: "Bio-Fungicides", href: "/products/bio-fungicides" },
      { name: "Bio-Pesticides", href: "/products/bio-pesticides" },
      { name: "Natural Solutions", href: "/products/natural-solutions" },
    ]
  },
  {
    title: "Soil Health",
    items: [
      { name: "Soil Conditioners", href: "/products/soil-conditioners" },
      { name: "Organic Matter", href: "/products/organic-matter" },
      { name: "Microbial Solutions", href: "/products/microbial-solutions" },
    ]
  }
];

const cropCategories = [
  {
    title: "Field Crops",
    items: [
      { name: "Wheat", href: "/crops/wheat" },
      { name: "Rice", href: "/crops/rice" },
      { name: "Maize", href: "/crops/maize" },
      { name: "Cotton", href: "/crops/cotton" },
    ]
  },
  {
    title: "Vegetables",
    items: [
      { name: "Tomato", href: "/crops/tomato" },
      { name: "Potato", href: "/crops/potato" },
      { name: "Onion", href: "/crops/onion" },
      { name: "Chilli", href: "/crops/chilli" },
    ]
  },
  {
    title: "Fruits",
    items: [
      { name: "Mango", href: "/crops/mango" },
      { name: "Grapes", href: "/crops/grapes" },
      { name: "Citrus", href: "/crops/citrus" },
      { name: "Pomegranate", href: "/crops/pomegranate" },
    ]
  }
];

export const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname.startsWith(path);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <>
      {/* Logo - Fixed on top left of hero (only when not scrolled) */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-6 left-6 z-50"
          >
            <Link to="/" className="flex items-center group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-white group-hover:text-secondary transition-all duration-300 drop-shadow-lg"
              >
                <img src="/logo.png" alt="PlantMagic Logo" width="200" />
              </motion.div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header */}
      <header className={`fixed top-6 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'left-1/2 -translate-x-1/2 w-full max-w-4xl px-4' 
          : 'right-6 w-auto'
      }`}>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`transition-all duration-500 overflow-visible ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-xl border border-gray-200 rounded-full shadow-2xl' 
              : ''
          }`}
        >
          <div className="flex items-center h-14 px-6">
            {/* Logo in navbar (only when scrolled) */}
            <AnimatePresence>
              {isScrolled && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mr-6"
                >
                  <Link to="/" className="flex items-center group">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="text-lg font-bold text-primary group-hover:text-secondary transition-all duration-300"
                    >
                      <img src="/logo1.png" alt="PlantMagic Logo" width="120" />
                    </motion.div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {/* Products Dropdown */}
              <div className="relative">
                <motion.button
                  whileHover={{ y: -2 }}
                  onClick={() => handleMenuClick("products")}
                  className={`flex items-center text-sm font-medium py-2 px-3 rounded-full transition-all duration-300 ${
                    isActive("/products") 
                      ? "text-secondary bg-secondary/10" 
                      : isScrolled 
                        ? "text-gray-700 hover:text-secondary hover:bg-gray-100" 
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  Products
                  <motion.div
                    animate={{ rotate: activeMenu === "products" ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </motion.div>
                </motion.button>
                
                {/* Products Mega Menu */}
                <AnimatePresence>
                  {activeMenu === "products" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px] ${
                        isScrolled ? 'bg-white border-gray-200' : 'bg-primary/30 border-primary/40'
                      } backdrop-blur-xl border rounded-2xl shadow-2xl z-50`}
                    >
                      <div className="p-6">
                        <div className="grid grid-cols-3 gap-4">
                          {productCategories.map((category, index) => (
                            <div key={index}>
                              <h3 className={`font-semibold ${
                                isScrolled ? 'text-gray-900' : 'text-white'
                              } mb-3 text-xs uppercase tracking-wide`}>
                                {category.title}
                              </h3>
                              <ul className="space-y-1">
                                {category.items.map((item) => (
                                  <li key={item.href}>
                                    <Link
                                      to={item.href}
                                      onClick={() => setActiveMenu(null)}
                                      className={`text-xs ${
                                        isScrolled 
                                          ? 'text-gray-600 hover:text-secondary hover:bg-gray-100' 
                                          : 'text-white/80 hover:text-white hover:bg-white/10'
                                      } transition-all duration-200 block py-1 px-2 rounded-lg`}
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Crops Dropdown */}
              <div className="relative">
                <motion.button
                  whileHover={{ y: -2 }}
                  onClick={() => handleMenuClick("crops")}
                  className={`flex items-center text-sm font-medium py-2 px-3 rounded-full transition-all duration-300 ${
                    isActive("/crops") 
                      ? "text-secondary bg-secondary/10" 
                      : isScrolled 
                        ? "text-gray-700 hover:text-secondary hover:bg-gray-100" 
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  Crops
                  <motion.div
                    animate={{ rotate: activeMenu === "crops" ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </motion.div>
                </motion.button>
                
                {/* Crops Mega Menu */}
                <AnimatePresence>
                  {activeMenu === "crops" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px] ${
                        isScrolled ? 'bg-white border-gray-200' : 'bg-primary/30 border-primary/40'
                      } backdrop-blur-xl border rounded-2xl shadow-2xl z-50`}
                    >
                      <div className="p-6">
                        <div className="grid grid-cols-3 gap-4">
                          {cropCategories.map((category, index) => (
                            <div key={index}>
                              <h3 className={`font-semibold ${
                                isScrolled ? 'text-gray-900' : 'text-white'
                              } mb-3 text-xs uppercase tracking-wide`}>
                                {category.title}
                              </h3>
                              <ul className="space-y-1">
                                {category.items.map((item) => (
                                  <li key={item.href}>
                                    <Link
                                      to={item.href}
                                      onClick={() => setActiveMenu(null)}
                                      className={`text-xs ${
                                        isScrolled 
                                          ? 'text-gray-600 hover:text-secondary hover:bg-gray-100' 
                                          : 'text-white/80 hover:text-white hover:bg-white/10'
                                      } transition-all duration-200 block py-1 px-2 rounded-lg`}
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other Navigation Links */}
              <motion.div whileHover={{ y: -2 }}>
                <Link
                  to="/knowledge"
                  className={`text-sm font-medium py-2 px-3 rounded-full transition-all duration-300 ${
                    isActive("/knowledge") 
                      ? "text-secondary bg-secondary/10" 
                      : isScrolled 
                        ? "text-gray-700 hover:text-secondary hover:bg-gray-100" 
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  Knowledge
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -2 }}>
                <Link
                  to="/about"
                  className={`text-sm font-medium py-2 px-3 rounded-full transition-all duration-300 ${
                    isActive("/about") 
                      ? "text-secondary bg-secondary/10" 
                      : isScrolled 
                        ? "text-gray-700 hover:text-secondary hover:bg-gray-100" 
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  About
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -2 }}>
                <Link
                  to="/contact"
                  className={`text-sm font-medium py-2 px-3 rounded-full transition-all duration-300 ${
                    isActive("/contact") 
                      ? "text-secondary bg-secondary/10" 
                      : isScrolled 
                        ? "text-gray-700 hover:text-secondary hover:bg-gray-100" 
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  Contact
                </Link>
              </motion.div>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-2 ml-6">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className={`${
                    isScrolled 
                      ? 'text-gray-600 hover:text-secondary hover:bg-gray-100' 
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  } rounded-full transition-all duration-300 h-8 w-8`}
                >
                  <Search className="h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`lg:hidden ${
                    isScrolled 
                      ? 'text-gray-600 hover:text-secondary hover:bg-gray-100' 
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  } rounded-full transition-all duration-300 h-8 w-8`}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Search Bar */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`overflow-hidden border-t ${
                  isScrolled ? 'border-gray-200 bg-gray-50' : 'border-primary/30 bg-primary/20'
                } backdrop-blur-sm`}
              >
                <div className="py-3 px-6">
                  <div className="relative">
                    <Search className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 ${
                      isScrolled ? 'text-gray-400' : 'text-white/60'
                    }`} />
                    <Input
                      placeholder="Search products, crops..."
                      className={`pl-10 h-10 ${
                        isScrolled 
                          ? 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-secondary' 
                          : 'bg-primary/20 border-primary/40 text-white placeholder:text-white/70 focus:border-secondary'
                      } focus:ring-secondary/50 rounded-full text-sm`}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-primary/30 backdrop-blur-xl border border-primary/40 rounded-2xl shadow-2xl overflow-hidden z-50"
          >
            <nav className="p-4 space-y-1">
              <Link
                to="/products"
                className="block py-2 px-3 text-white/90 font-medium hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/crops"
                className="block py-2 px-3 text-white/90 font-medium hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Crops
              </Link>
              <Link
                to="/knowledge"
                className="block py-2 px-3 text-white/90 font-medium hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Knowledge
              </Link>
              <Link
                to="/about"
                className="block py-2 px-3 text-white/90 font-medium hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 text-sm"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block py-2 px-3 text-white/90 font-medium hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close menus */}
      {(activeMenu || isMobileMenuOpen) && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={() => {
            setActiveMenu(null);
            setIsMobileMenuOpen(false);
          }}
        />
      )}
    </>
  );
};