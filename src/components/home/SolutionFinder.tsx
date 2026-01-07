import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Link } from "react-router-dom";

const cropTypes = ["Cereals", "Fruits", "Vegetables", "Oilseeds", "Cash Crops"];
const growthStages = ["Germination", "Vegetative", "Flowering", "Fruiting"];
const goals = ["Root Growth", "Stress Tolerance", "Yield Quality", "Nutrient Uptake"];

interface SolutionResult {
  name: string;
  description: string;
  href: string;
}

const getSolution = (stage: string, goal: string): SolutionResult => {
  const solutions: Record<string, Record<string, SolutionResult>> = {
    "Germination": {
      "Root Growth": { name: "Humagic Elixir", description: "Humic/Fulvic acid blend for root establishment", href: "/products/humagic-elixir" },
      "Stress Tolerance": { name: "Bio-Silicon", description: "Cellular strength for seedling vigor", href: "/products/bio-silicon" },
      "Yield Quality": { name: "Rhizo-Boost", description: "Mycorrhizal inoculant for nutrient access", href: "/products/rhizo-boost" },
      "Nutrient Uptake": { name: "Humagic Elixir", description: "Enhanced nutrient solubilization", href: "/products/humagic-elixir" },
    },
    "Vegetative": {
      "Root Growth": { name: "Humagic Elixir", description: "Deep root development & soil health", href: "/products/humagic-elixir" },
      "Stress Tolerance": { name: "Bio-Silicon", description: "Heat & drought resistance", href: "/products/bio-silicon" },
      "Yield Quality": { name: "Magne-Cal+", description: "Chlorophyll boost for photosynthesis", href: "/products/magne-cal" },
      "Nutrient Uptake": { name: "Micro-Max", description: "Complete micronutrient formula", href: "/products/micro-max" },
    },
    "Flowering": {
      "Root Growth": { name: "Phospho-Rich", description: "Phosphorus for flower initiation", href: "/products/phospho-rich" },
      "Stress Tolerance": { name: "Bio-Silicon", description: "Cellular strength under stress", href: "/products/bio-silicon" },
      "Yield Quality": { name: "Bloom-Boost", description: "Flower quality & fruit set", href: "/products/bloom-boost" },
      "Nutrient Uptake": { name: "Magne-Cal+", description: "Calcium for cell wall strength", href: "/products/magne-cal" },
    },
    "Fruiting": {
      "Root Growth": { name: "Humagic Elixir", description: "Sustained nutrient supply", href: "/products/humagic-elixir" },
      "Stress Tolerance": { name: "Potash-Plus", description: "Stress tolerance & quality", href: "/products/potash-plus" },
      "Yield Quality": { name: "Magne-Cal+", description: "Fruit firmness & shelf life", href: "/products/magne-cal" },
      "Nutrient Uptake": { name: "Harvest-Guard", description: "Complete fruit nutrition", href: "/products/harvest-guard" },
    },
  };

  return solutions[stage]?.[goal] || { name: "Bio-Silicon", description: "Universal plant strengthener", href: "/products/bio-silicon" };
};

export const SolutionFinder = () => {
  const [step, setStep] = useState(1);
  const [selectedCrop, setSelectedCrop] = useState("");
  const [selectedStage, setSelectedStage] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setStep(1);
    setSelectedCrop("");
    setSelectedStage("");
    setSelectedGoal("");
    setShowResult(false);
  };

  const solution = getSolution(selectedStage, selectedGoal);

  const canProceed = 
    (step === 1 && selectedCrop) ||
    (step === 2 && selectedStage) ||
    (step === 3 && selectedGoal);

  return (
    <section id="solution-finder" className="section-padding bg-background">
      <AnimatedSection className="container-wide">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4 mr-2" />
              Solution Finder
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find the right solution for your crop
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Answer a few questions and we'll recommend the perfect bio-stimulant for your needs.
            </p>
          </div>

          <Card className="border-border shadow-card">
            <CardHeader className="border-b border-border">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">
                  {showResult ? "Your Recommendation" : `Step ${step} of 3`}
                </CardTitle>
                {!showResult && (
                  <div className="flex gap-2">
                    {[1, 2, 3].map((s) => (
                      <div
                        key={s}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          s === step ? "bg-secondary" : s < step ? "bg-secondary/50" : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <AnimatePresence mode="wait">
                {!showResult ? (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step === 1 && (
                      <div>
                        <h3 className="text-lg font-medium text-foreground mb-4">
                          Select your crop type
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {cropTypes.map((crop) => (
                            <button
                              key={crop}
                              onClick={() => setSelectedCrop(crop)}
                              className={`p-4 rounded-lg border transition-all text-left ${
                                selectedCrop === crop
                                  ? "border-secondary bg-secondary/5 text-secondary"
                                  : "border-border hover:border-secondary/50"
                              }`}
                            >
                              <span className="font-medium">{crop}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div>
                        <h3 className="text-lg font-medium text-foreground mb-4">
                          Select growth stage
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                          {growthStages.map((stage) => (
                            <button
                              key={stage}
                              onClick={() => setSelectedStage(stage)}
                              className={`p-4 rounded-lg border transition-all text-left ${
                                selectedStage === stage
                                  ? "border-secondary bg-secondary/5 text-secondary"
                                  : "border-border hover:border-secondary/50"
                              }`}
                            >
                              <span className="font-medium">{stage}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div>
                        <h3 className="text-lg font-medium text-foreground mb-4">
                          Select your primary goal
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                          {goals.map((goal) => (
                            <button
                              key={goal}
                              onClick={() => setSelectedGoal(goal)}
                              className={`p-4 rounded-lg border transition-all text-left ${
                                selectedGoal === goal
                                  ? "border-secondary bg-secondary/5 text-secondary"
                                  : "border-border hover:border-secondary/50"
                              }`}
                            >
                              <span className="font-medium">{goal}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between mt-8">
                      <Button
                        variant="outline"
                        onClick={() => step > 1 && setStep(step - 1)}
                        disabled={step === 1}
                      >
                        Back
                      </Button>
                      <Button
                        onClick={handleNext}
                        disabled={!canProceed}
                        className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                      >
                        {step === 3 ? "Get Recommendation" : "Next"}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                      <CheckCircle className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {solution.name}
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      For {selectedCrop} • {selectedStage} Stage • {selectedGoal}
                    </p>
                    <p className="text-foreground mb-6">{solution.description}</p>
                    <div className="flex justify-center gap-4">
                      <Button variant="outline" onClick={handleReset}>
                        Start Over
                      </Button>
                      <Link to={solution.href}>
                        <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                          View Product
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>
    </section>
  );
};
