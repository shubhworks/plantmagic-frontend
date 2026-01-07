import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Sprout, Droplets, Bug, Leaf, Zap } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: "plant-health",
    name: "Plant Health",
    description: "Bio-stimulants that strengthen cellular structure and boost natural immunity",
    icon: Leaf,
    products: ["Bio-Silicon", "Humagic Elixir", "Magne-Cal+"],
    href: "/products/plant-health",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
  },
  {
    id: "pest-control",
    name: "Pest Control",
    description: "Natural solutions for effective pest management without chemical residues",
    icon: Bug,
    products: ["Neem Guard", "Bio-Trap", "Pheromone Lures"],
    href: "/products/pest-control",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80",
  },
  {
    id: "disease-control",
    name: "Disease Control",
    description: "Bio-fungicides and protective solutions for disease prevention",
    icon: Shield,
    products: ["Tricho-Shield", "Bacillus Mix", "Copper-Bio"],
    href: "/products/disease-control",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80",
  },
];

const featuredProducts = [
  {
    id: "bio-silicon",
    name: "Bio-Silicon",
    category: "Plant Health",
    description: "Concentrated liquid bio-stimulant rich in plant-available Silica",
    icon: Shield,
    href: "/products/bio-silicon",
  },
  {
    id: "humagic-elixir",
    name: "Humagic Elixir",
    category: "Soil Health",
    description: "Premium Humic & Fulvic acid blend for root development",
    icon: Sprout,
    href: "/products/humagic-elixir",
  },
  {
    id: "magne-cal",
    name: "Magne-Cal+",
    category: "Nutrition",
    description: "Calcium & Magnesium formula for chlorophyll synthesis",
    icon: Droplets,
    href: "/products/magne-cal",
  },
  {
    id: "rhizo-boost",
    name: "Rhizo-Boost",
    category: "Root Health",
    description: "Mycorrhizal inoculant for enhanced nutrient uptake",
    icon: Zap,
    href: "/products/rhizo-boost",
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary py-20 md:py-28">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=80"
            alt="Agriculture field"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-wide relative z-10">
          <Breadcrumbs items={[{ label: "Products" }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our Bio-Solutions
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Scientifically formulated biostimulants backed by 15+ years of research 
              and proven results across Indian agricultural conditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Browse by Category
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find the right solution for your specific agricultural needs
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <AnimatedSection key={category.id} delay={index * 0.1}>
                <Link to={category.href}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Card className="overflow-hidden border-border h-full">
                      <div className="relative h-48">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                            <category.icon className="h-6 w-6 text-secondary-foreground" />
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {category.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {category.products.map((product) => (
                            <span
                              key={product}
                              className="inline-block px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                            >
                              {product}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* All Products Grid */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 0.05}>
                <Link to={product.href}>
                  <motion.div whileHover={{ y: -5 }}>
                    <Card className="border-border bg-card h-full group hover:shadow-card transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                          <product.icon className="h-6 w-6 text-secondary" />
                        </div>
                        <span className="text-xs text-secondary font-medium">
                          {product.category}
                        </span>
                        <h3 className="text-lg font-semibold text-foreground mt-1 mb-2 group-hover:text-secondary transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {product.description}
                        </p>
                        <div className="flex items-center mt-4 text-secondary text-sm font-medium">
                          Learn more
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
