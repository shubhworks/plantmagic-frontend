import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Shield, Sprout } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/common/AnimatedSection";

const products = [
  {
    id: "bio-silicone-s220",
    name: "Bio Silicone S220",
    category: "Plant Health",
    description: "Concentrated liquid bio-stimulant rich in plant-available Silica. Builds cellular mechanical barriers.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80",
    href: "/products/bio-silicone-s220",
  },
  {
    id: "humagic-elixir",
    name: "Humagic Elixir",
    category: "Soil Health",
    description: "Premium Humic & Fulvic acid blend for root development and nutrient mobilization.",
    icon: Sprout,
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&q=80",
    href: "/products/humagic-elixir",
  },
  {
    id: "magic-xl",
    name: "Magic XL",
    category: "Nutrition",
    description: "Premium biostimulant formula for enhanced plant growth and maximum yield potential.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=400&q=80",
    href: "/products/magic-xl",
  },
];

export const FeaturedProducts = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Bio-Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Scientifically formulated biostimulants for every growth stage
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <AnimatedSection key={product.id} delay={index * 0.1}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="overflow-hidden border-border bg-card h-full group">
                  <div onClick={() => {
                    window.location.href = product.href;
                  }} className="relative h-48 cursor-pointer overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <CardContent onClick={() => {
                    window.location.href = product.href;
                  }} className="p-6 cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <product.icon className="h-5 w-5 text-secondary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {product.name}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <Link to={product.href}>
                      <Button variant="ghost" className="p-0 h-auto text-secondary hover:text-secondary/80 hover:bg-transparent group">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="text-center mt-12">
          <Link to="/products">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};
