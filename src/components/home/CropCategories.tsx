import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";

const categories = [
  {
    id: "cereals",
    name: "Cereals",
    examples: "Wheat, Rice, Maize",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80",
    href: "/crops/cereals",
  },
  {
    id: "vegetables",
    name: "Vegetables",
    examples: "Tomato, Chilli, Onion",
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400&q=80",
    href: "/crops/vegetables",
  },
  {
    id: "fruits",
    name: "Fruits",
    examples: "Mango, Grape, Pomegranate",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&q=80",
    href: "/crops/fruits",
  },
  {
    id: "cash-crops",
    name: "Cash Crops",
    examples: "Cotton, Sugarcane, Tobacco",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&q=80",
    href: "/crops/cash-crops",
  },
];

export const CropCategories = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Solutions by Crop
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stage-wise nutrition programs tailored for each crop type
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <AnimatedSection key={category.id} delay={index * 0.1}>
              <Link to={category.href}>
                <motion.div
                  className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-primary-foreground mb-1">
                      {category.name}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm mb-3">
                      {category.examples}
                    </p>
                    <div className="flex items-center text-secondary text-sm font-medium opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      Explore solutions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
