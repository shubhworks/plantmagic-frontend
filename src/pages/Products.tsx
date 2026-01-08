import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Filter } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { productCategories } from "@/lib/data";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const allProducts = productCategories.flatMap((category) =>
    category.products.map((product) => ({
      ...product,
      categoryId: category.id,
      categoryName: category.name,
    }))
  );

  const filteredProducts =
    activeCategory === "all"
      ? allProducts
      : allProducts.filter((product) => product.categoryId === activeCategory);

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
              Our Products
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Explore our complete range of bio-solutions designed for sustainable 
              agriculture and maximum crop performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="container-wide">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Filter by Category:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              variant={activeCategory === "all" ? "default" : "outline"}
              onClick={() => setActiveCategory("all")}
              className="rounded-full"
            >
              All Products
            </Button>
            {productCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="rounded-full"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <AnimatedSection className="mb-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {activeCategory === "all"
                  ? "All Products"
                  : productCategories.find((c) => c.id === activeCategory)?.name}
              </h2>
              <span className="text-muted-foreground">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
              </span>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 0.03}>
                <Link to={`/products/${product.id}`}>
                  <motion.div whileHover={{ y: -5 }}>
                    <Card className="border-border bg-card h-full group hover:shadow-card transition-all hover:border-secondary/50">
                      <CardContent className="p-6">
                        <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                          <span className="text-2xl font-bold text-secondary">
                            {product.name.charAt(0)}
                          </span>
                        </div>
                        <span className="inline-block px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground mb-2">
                          {product.categoryName}
                        </span>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-secondary transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex items-center mt-4 text-secondary text-sm font-medium">
                          View Details
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

      {/* Categories Overview */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Product Categories
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Browse our specialized categories for targeted agricultural solutions
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {productCategories.map((category, index) => (
              <AnimatedSection key={category.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="cursor-pointer"
                  onClick={() => {
                    setActiveCategory(category.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <Card className="border-border bg-card h-full group hover:shadow-card transition-all hover:border-secondary/50">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                        <span className="text-xl font-bold text-primary">
                          {category.products.length}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-secondary transition-colors mb-2">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.products.length} product{category.products.length !== 1 ? "s" : ""}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;