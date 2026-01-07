import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sprout, Leaf, Sun, Package } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const cropData: Record<string, {
  name: string;
  category: string;
  description: string;
  image: string;
  stages: { name: string; products: string[]; tips: string }[];
  crops: { name: string; image: string }[];
}> = {
  cereals: {
    name: "Cereals",
    category: "Arable Crops",
    description: "Complete nutrition and protection programs for cereal crops including wheat, rice, and maize.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1920&q=80",
    stages: [
      { name: "Seedling", products: ["Humagic Elixir", "Rhizo-Boost"], tips: "Focus on root establishment and early vigor" },
      { name: "Vegetative", products: ["Bio-Silicon", "Magne-Cal+"], tips: "Build strong stems and maximize tillering" },
      { name: "Reproductive", products: ["Bloom-Boost", "Phospho-Rich"], tips: "Support grain formation and filling" },
      { name: "Harvest", products: ["Potash-Plus", "Harvest-Guard"], tips: "Ensure quality and reduce shattering" },
    ],
    crops: [
      { name: "Wheat", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80" },
      { name: "Rice", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80" },
      { name: "Maize", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&q=80" },
      { name: "Barley", image: "https://images.unsplash.com/photo-1592181475067-c3f8e7ed6e30?w=400&q=80" },
    ],
  },
  vegetables: {
    name: "Vegetables",
    category: "High-Value Crops",
    description: "Stage-wise nutrition for high-quality vegetable production with maximum yield.",
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=1920&q=80",
    stages: [
      { name: "Seedling", products: ["Humagic Elixir", "Tricho-Shield"], tips: "Transplant establishment and disease prevention" },
      { name: "Vegetative", products: ["Bio-Silicon", "Micro-Max"], tips: "Vigorous growth and pest resistance" },
      { name: "Flowering", products: ["Bloom-Boost", "Magne-Cal+"], tips: "Flower retention and fruit set" },
      { name: "Fruiting", products: ["Potash-Plus", "Harvest-Guard"], tips: "Quality, color, and shelf life" },
    ],
    crops: [
      { name: "Tomato", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=80" },
      { name: "Chilli", image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=400&q=80" },
      { name: "Onion", image: "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=400&q=80" },
      { name: "Potato", image: "https://images.unsplash.com/photo-1518977676601-b53f82ber2a3?w=400&q=80" },
    ],
  },
  fruits: {
    name: "Fruits",
    category: "Orchard Crops",
    description: "Specialized programs for fruit orchards focusing on quality and yield.",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=1920&q=80",
    stages: [
      { name: "Dormancy/Pruning", products: ["Copper-Bio", "Humagic Elixir"], tips: "Tree health and bud preparation" },
      { name: "Flowering", products: ["Bloom-Boost", "Bio-Silicon"], tips: "Pollination support and fruit set" },
      { name: "Fruit Development", products: ["Magne-Cal+", "Potash-Plus"], tips: "Size, color, and sugar content" },
      { name: "Harvest", products: ["Harvest-Guard"], tips: "Firmness and post-harvest quality" },
    ],
    crops: [
      { name: "Mango", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&q=80" },
      { name: "Grape", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&q=80" },
      { name: "Pomegranate", image: "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?w=400&q=80" },
      { name: "Banana", image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80" },
    ],
  },
  "cash-crops": {
    name: "Cash Crops",
    category: "Commercial Crops",
    description: "Premium solutions for high-revenue commercial crop cultivation.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=1920&q=80",
    stages: [
      { name: "Establishment", products: ["Humagic Elixir", "Rhizo-Boost"], tips: "Root system development" },
      { name: "Vegetative", products: ["Bio-Silicon", "Magne-Cal+"], tips: "Canopy development and strength" },
      { name: "Productive", products: ["Bloom-Boost", "Potash-Plus"], tips: "Fiber/sugar quality" },
      { name: "Maturity", products: ["Harvest-Guard"], tips: "Quality retention and harvest timing" },
    ],
    crops: [
      { name: "Cotton", image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=400&q=80" },
      { name: "Sugarcane", image: "https://images.unsplash.com/photo-1559178290-66ea0c31c9c9?w=400&q=80" },
      { name: "Tea", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&q=80" },
      { name: "Coffee", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80" },
    ],
  },
};

const stageIcons = [Sprout, Leaf, Sun, Package];

const CropDetail = () => {
  const { category } = useParams<{ category: string }>();
  const data = cropData[category || "cereals"];

  if (!data) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <p>Crop category not found.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary py-20 md:py-28">
        <div className="absolute inset-0 opacity-20">
          <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
        </div>
        <div className="container-wide relative z-10">
          <Breadcrumbs
            items={[
              { label: "Crops", href: "/crops" },
              { label: data.name },
            ]}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
              {data.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {data.name}
            </h1>
            <p className="text-xl text-primary-foreground/90">{data.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Stage-wise Programs */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Stage-wise Nutrition Program
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Targeted solutions for each growth stage
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.stages.map((stage, index) => {
              const Icon = stageIcons[index];
              return (
                <AnimatedSection key={stage.name} delay={index * 0.1}>
                  <Card className="border-border h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
                        <Icon className="h-6 w-6 text-secondary" />
                      </div>
                      <CardTitle className="text-lg">{stage.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">{stage.tips}</p>
                      <div className="space-y-2">
                        <p className="text-xs font-medium text-foreground uppercase tracking-wider">
                          Recommended Products:
                        </p>
                        {stage.products.map((product) => (
                          <Link
                            key={product}
                            to={`/products/${product.toLowerCase().replace(/\s+/g, "-").replace(/\+/g, "")}`}
                            className="block text-secondary hover:underline text-sm"
                          >
                            {product}
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Individual Crops */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Specific Crop Programs
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.crops.map((crop, index) => (
              <AnimatedSection key={crop.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                    <img
                      src={crop.image}
                      alt={crop.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-semibold text-primary-foreground">
                        {crop.name}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Need a custom program?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Our agronomists can create tailored solutions for your specific conditions
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Contact Our Experts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default CropDetail;
