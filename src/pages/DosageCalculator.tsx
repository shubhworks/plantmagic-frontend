import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Droplets, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

const products = [
  { id: "bio-silicon", name: "Bio-Silicon", dosage: 0.5, unit: "L/acre" },
  { id: "humagic-elixir", name: "Humagic Elixir", dosage: 1, unit: "L/acre" },
  { id: "magne-cal", name: "Magne-Cal+", dosage: 0.75, unit: "L/acre" },
  { id: "rhizo-boost", name: "Rhizo-Boost", dosage: 0.25, unit: "kg/acre" },
  { id: "bloom-boost", name: "Bloom-Boost", dosage: 0.5, unit: "L/acre" },
  { id: "potash-plus", name: "Potash-Plus", dosage: 1, unit: "L/acre" },
];

const applicationMethods = [
  { id: "foliar", name: "Foliar Spray", multiplier: 1 },
  { id: "drip", name: "Drip Irrigation", multiplier: 2 },
  { id: "soil", name: "Soil Application", multiplier: 1.5 },
];

const DosageCalculator = () => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [landArea, setLandArea] = useState("");
  const [applicationMethod, setApplicationMethod] = useState("foliar");
  const [showResult, setShowResult] = useState(false);

  const product = products.find((p) => p.id === selectedProduct);
  const method = applicationMethods.find((m) => m.id === applicationMethod);

  const calculateDosage = () => {
    if (!product || !landArea || !method) return null;
    return (parseFloat(landArea) * product.dosage * method.multiplier).toFixed(2);
  };

  const handleCalculate = () => {
    if (selectedProduct && landArea) {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setSelectedProduct("");
    setLandArea("");
    setApplicationMethod("foliar");
    setShowResult(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary py-16 md:py-20">
        <div className="container-wide">
          <Breadcrumbs
            items={[
              { label: "Tools", href: "/tools" },
              { label: "Dosage Calculator" },
            ]}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
              <Calculator className="h-4 w-4 mr-2" />
              Tool
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Dosage Calculator
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Calculate the exact quantity of Plantmagic products you need for your field
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection>
              <Card className="border-border shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-secondary" />
                    Calculate Your Dosage
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {!showResult ? (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="product">Select Product</Label>
                        <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a product" />
                          </SelectTrigger>
                          <SelectContent>
                            {products.map((product) => (
                              <SelectItem key={product.id} value={product.id}>
                                {product.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="area">Land Area (in Acres)</Label>
                        <Input
                          id="area"
                          type="number"
                          placeholder="e.g., 10"
                          value={landArea}
                          onChange={(e) => setLandArea(e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="method">Application Method</Label>
                        <Select value={applicationMethod} onValueChange={setApplicationMethod}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {applicationMethods.map((method) => (
                              <SelectItem key={method.id} value={method.id}>
                                {method.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <Button
                        onClick={handleCalculate}
                        disabled={!selectedProduct || !landArea}
                        className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                      >
                        Calculate Dosage
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-6"
                    >
                      <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                        <Calculator className="h-8 w-8 text-secondary" />
                      </div>

                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {product?.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        For {landArea} acres via {method?.name}
                      </p>

                      <div className="p-6 rounded-xl bg-secondary/10 mb-6">
                        <p className="text-muted-foreground text-sm mb-1">You need</p>
                        <p className="text-5xl font-bold text-secondary">
                          {calculateDosage()}
                        </p>
                        <p className="text-muted-foreground text-sm mt-1">
                          {product?.unit.includes("L") ? "Liters" : "Kilograms"}
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-muted text-left mb-6">
                        <p className="text-sm text-muted-foreground">
                          <strong>Note:</strong> Base dosage is {product?.dosage} {product?.unit} for foliar spray. 
                          Drip irrigation requires 2x the amount, soil application requires 1.5x.
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <Button variant="outline" onClick={handleReset} className="flex-1">
                          Calculate Again
                        </Button>
                        <Link to={`/products/${selectedProduct}`} className="flex-1">
                          <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                            View Product
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Tips */}
            <AnimatedSection delay={0.2} className="mt-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Application Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                      Always shake products well before mixing
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                      Apply foliar sprays early morning or late evening for best absorption
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                      Avoid mixing with strong alkaline or acidic chemicals
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                      Store products in cool, dry place away from direct sunlight
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DosageCalculator;
