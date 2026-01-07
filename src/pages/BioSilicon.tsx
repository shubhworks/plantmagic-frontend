import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Droplets, CheckCircle, ArrowRight, Calculator, Clock, Beaker, Leaf } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const benefits = [
  "Builds mechanical barrier at cellular level",
  "Reduces transpiration by 20-30%",
  "Increases stem and leaf strength",
  "Prevents pest penetration",
  "Enhances heat & drought tolerance",
  "Compatible with most fertilizers",
];

const applicationSteps = [
  {
    step: 1,
    title: "Preparation",
    description: "Shake the bottle well before use. Ensure sprayer is clean and free from previous chemical residues.",
    icon: Beaker,
  },
  {
    step: 2,
    title: "Mixing",
    description: "Add Bio-Silicon to the water tank last, after other inputs. Mix thoroughly for uniform distribution.",
    icon: Droplets,
  },
  {
    step: 3,
    title: "Application",
    description: "Apply as foliar spray early morning or late evening. Can also be used through drip irrigation.",
    icon: Leaf,
  },
];

const BioSilicon = () => {
  const [landArea, setLandArea] = useState("");
  const dosagePerAcre = 0.5; // 500ml per acre
  
  const calculatedDosage = landArea ? (parseFloat(landArea) * dosagePerAcre).toFixed(1) : null;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary py-16 md:py-24">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80"
            alt="Plant cells"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-wide relative z-10">
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products" },
              { label: "Plant Health", href: "/products/plant-health" },
              { label: "Bio-Silicon" },
            ]}
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
                <Shield className="h-4 w-4 mr-2" />
                Plant Health
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Bio-Silicon
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                A concentrated liquid bio-stimulant rich in plant-available Silica. 
                It builds a 'mechanical barrier' at the cellular level, strengthening 
                your crops from within.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Order Now
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Download Brochure
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
                alt="Bio-Silicon product"
                className="rounded-2xl shadow-elevated"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="application">Application</TabsTrigger>
              <TabsTrigger value="calculator">Calculator</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-12">
              {/* How it Works */}
              <AnimatedSection>
                <div className="max-w-3xl mx-auto text-center mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    How Bio-Silicon Works
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Silica is absorbed and deposited in the epidermal cell walls, forming a 
                    'Silica-Cuticle Double Layer.' This reduces water loss through transpiration, 
                    increases stem and leaf strength, and creates a physical barrier against 
                    pest and pathogen penetration.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80"
                      alt="Healthy plant cells"
                      className="rounded-2xl shadow-card"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-6">
                      Key Benefits
                    </h3>
                    <ul className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <motion.li
                          key={benefit}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                          <span className="text-foreground">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </TabsContent>

            <TabsContent value="application">
              <AnimatedSection>
                <div className="max-w-3xl mx-auto text-center mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Application Guide
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Follow these steps for optimal results with Bio-Silicon
                  </p>
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto">
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

                    {applicationSteps.map((step, index) => (
                      <motion.div
                        key={step.step}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="relative flex gap-6 mb-8 last:mb-0"
                      >
                        <div className="relative z-10 w-16 h-16 rounded-full bg-secondary flex items-center justify-center shrink-0">
                          <step.icon className="h-7 w-7 text-secondary-foreground" />
                        </div>
                        <Card className="flex-1 border-border">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-2 text-secondary text-sm font-medium mb-2">
                              <Clock className="h-4 w-4" />
                              Step {step.step}
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">
                              {step.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {step.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Application rates table */}
                <Card className="max-w-2xl mx-auto mt-12 border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Droplets className="h-5 w-5 text-secondary" />
                      Recommended Dosage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 text-muted-foreground font-medium">Application Method</th>
                          <th className="text-left py-3 text-muted-foreground font-medium">Dosage</th>
                          <th className="text-left py-3 text-muted-foreground font-medium">Frequency</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="py-3 text-foreground">Foliar Spray</td>
                          <td className="py-3 text-foreground">500 ml/acre</td>
                          <td className="py-3 text-foreground">Every 15-20 days</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 text-foreground">Drip Irrigation</td>
                          <td className="py-3 text-foreground">1 L/acre</td>
                          <td className="py-3 text-foreground">Monthly</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-foreground">Seed Treatment</td>
                          <td className="py-3 text-foreground">5 ml/kg seed</td>
                          <td className="py-3 text-foreground">Before sowing</td>
                        </tr>
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </TabsContent>

            <TabsContent value="calculator">
              <AnimatedSection>
                <Card className="max-w-lg mx-auto border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="h-5 w-5 text-secondary" />
                      Dosage Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="land-area" className="text-foreground">
                        Enter Land Area (in Acres)
                      </Label>
                      <Input
                        id="land-area"
                        type="number"
                        placeholder="e.g., 5"
                        value={landArea}
                        onChange={(e) => setLandArea(e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    {calculatedDosage && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-6 rounded-lg bg-secondary/10 text-center"
                      >
                        <p className="text-muted-foreground mb-2">You need</p>
                        <p className="text-4xl font-bold text-secondary">
                          {calculatedDosage} Liters
                        </p>
                        <p className="text-muted-foreground mt-2">
                          of Bio-Silicon for foliar application
                        </p>
                      </motion.div>
                    )}

                    <p className="text-sm text-muted-foreground">
                      Calculation based on 500ml per acre for foliar spray. 
                      For drip irrigation, double the quantity.
                    </p>

                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default BioSilicon;
