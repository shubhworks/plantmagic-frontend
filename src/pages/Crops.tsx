import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { cropCategories } from "@/lib/data";

const Crops = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary py-20 md:py-28">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80"
            alt="Green fields"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-wide relative z-10">
          <Breadcrumbs items={[{ label: "Crops" }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Crop Solutions
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Stage-wise nutrition programs tailored for each crop type. 
              From germination to harvest, we've got your crops covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Crop Categories */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {cropCategories.map((category, index) => (
              <AnimatedSection key={category.id} delay={index * 0.1}>
                <Link to={category.href}>
                  <motion.div whileHover={{ y: -5 }} className="h-full">
                    <Card className="overflow-hidden border-border h-full group">
                      <div className="relative h-64">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                            {category.name}
                          </h3>
                          <p className="text-primary-foreground/80 text-sm">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {category.crops.map((crop) => (
                            <span
                              key={crop}
                              className="inline-block px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                            >
                              {crop}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center text-secondary font-medium">
                          View crop programs
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

      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Can't find your crop?
            </h2>
            <p className="text-muted-foreground mb-8">
              Our experts can create custom nutrition programs for any crop. 
              Contact us for personalized recommendations.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-8 py-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg font-medium"
              >
                Talk to an Expert
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Crops;
