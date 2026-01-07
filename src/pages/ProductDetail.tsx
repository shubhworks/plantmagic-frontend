import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Droplets, Leaf, Shield, Sprout, FlaskConical, Beaker } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const productData: Record<string, {
  name: string;
  category: string;
  categoryId: string;
  tagline: string;
  description: string;
  benefits: string[];
  composition: string;
  dosage: string;
  application: string[];
  crops: string[];
}> = {
  "black-magic": {
    name: "Black Magic",
    category: "Biostimulents",
    categoryId: "biostimulents",
    tagline: "Premium Humic Acid Formulation",
    description: "Black Magic is a highly concentrated humic acid-based biostimulant that enhances soil fertility and promotes robust plant growth. It improves nutrient uptake and water retention in soil.",
    benefits: ["Enhances root development", "Improves soil structure", "Increases nutrient absorption", "Promotes beneficial microbial activity", "Reduces soil salinity effects"],
    composition: "Humic Acid: 12%, Fulvic Acid: 3%, Potassium: 8%",
    dosage: "500ml per acre for soil application",
    application: ["Soil drench during land preparation", "Drip irrigation at vegetative stage", "Foliar spray for quick absorption"],
    crops: ["Cereals", "Vegetables", "Fruits", "Cash Crops"],
  },
  "magic-tonic": {
    name: "Magic Tonic",
    category: "Biostimulents",
    categoryId: "biostimulents",
    tagline: "Complete Plant Nutrition Booster",
    description: "Magic Tonic is an all-in-one plant tonic designed to provide essential nutrients and growth hormones for overall plant health and vigor.",
    benefits: ["Boosts vegetative growth", "Enhances flowering", "Improves fruit setting", "Increases chlorophyll content", "Strengthens plant immunity"],
    composition: "Amino Acids: 10%, Seaweed Extract: 5%, Trace Elements: 2%",
    dosage: "2-3ml per liter of water",
    application: ["Foliar spray every 15 days", "Drip irrigation during growth stages"],
    crops: ["All crops"],
  },
  "shilajit": {
    name: "Shilajit",
    category: "Biostimulents",
    categoryId: "biostimulents",
    tagline: "Natural Mineral-Rich Growth Enhancer",
    description: "Shilajit is a natural mineral compound that provides over 85 minerals in ionic form, promoting exceptional plant growth and stress resistance.",
    benefits: ["Rich in natural minerals", "Enhances stress tolerance", "Improves soil health", "Promotes root growth", "Increases yield quality"],
    composition: "Natural Shilajit Extract: 15%, Fulvic Acid: 8%",
    dosage: "250ml per acre",
    application: ["Soil application before sowing", "Fertigation during crop growth"],
    crops: ["Vegetables", "Fruits", "Plantation Crops"],
  },
  "magic-xl": {
    name: "Magic XL",
    category: "Biostimulents",
    categoryId: "biostimulents",
    tagline: "Extra Large Yield Formula",
    description: "Magic XL is specially formulated to maximize crop yield by enhancing photosynthesis efficiency and nutrient translocation to fruits and grains.",
    benefits: ["Increases fruit size", "Enhances grain filling", "Improves crop quality", "Boosts sugar content", "Extends shelf life"],
    composition: "Potassium: 20%, Phosphorus: 10%, Boron: 0.5%",
    dosage: "400ml per acre",
    application: ["Apply at flowering stage", "Repeat at fruit development stage"],
    crops: ["Fruits", "Vegetables", "Cereals"],
  },
  "humagic-elixir": {
    name: "Humagic Elixir",
    category: "Biostimulents",
    categoryId: "biostimulents",
    tagline: "Premium Humic & Fulvic Blend",
    description: "Humagic Elixir combines the power of humic and fulvic acids to create a superior soil conditioner that enhances nutrient availability and root development.",
    benefits: ["Improves soil CEC", "Chelates micronutrients", "Enhances root mass", "Promotes beneficial bacteria", "Reduces fertilizer requirement"],
    composition: "Humic Acid: 10%, Fulvic Acid: 5%, Amino Acids: 3%",
    dosage: "500ml per acre",
    application: ["Base application", "Through drip irrigation", "Foliar spray"],
    crops: ["All crops"],
  },
  "soil-grow": {
    name: "Soil Grow",
    category: "Biostimulents",
    categoryId: "biostimulents",
    tagline: "Complete Soil Rejuvenator",
    description: "Soil Grow is designed to restore and maintain soil health by adding organic matter and beneficial microorganisms to degraded soils.",
    benefits: ["Restores soil fertility", "Adds organic carbon", "Improves water holding capacity", "Reduces soil compaction", "Promotes earthworm activity"],
    composition: "Organic Matter: 25%, Beneficial Microbes: 10^8 CFU/ml",
    dosage: "1 liter per acre",
    application: ["Apply during land preparation", "Repeat every 45 days"],
    crops: ["All crops"],
  },
  "magic-p": {
    name: "Magic P",
    category: "Biostimulents",
    categoryId: "biostimulents",
    tagline: "Phosphorus Mobilizer",
    description: "Magic P solubilizes fixed phosphorus in soil and makes it available to plants, enhancing root development and energy transfer.",
    benefits: ["Releases locked phosphorus", "Enhances root growth", "Improves flowering", "Increases tillering", "Boosts ATP production"],
    composition: "Phosphorus Solubilizing Bacteria: 10^9 CFU/ml",
    dosage: "500ml per acre",
    application: ["Soil application", "Seed treatment"],
    crops: ["Cereals", "Pulses", "Oilseeds"],
  },
  "magic-k": {
    name: "Magic K",
    category: "Biostimulents",
    categoryId: "biostimulents",
    tagline: "Potassium Mobilizer",
    description: "Magic K mobilizes potassium from soil minerals, improving crop quality, disease resistance, and water use efficiency.",
    benefits: ["Mobilizes soil potassium", "Improves fruit quality", "Enhances disease resistance", "Reduces water stress", "Strengthens cell walls"],
    composition: "Potassium Mobilizing Bacteria: 10^9 CFU/ml",
    dosage: "500ml per acre",
    application: ["Soil drench", "Drip irrigation"],
    crops: ["Fruits", "Vegetables", "Cash Crops"],
  },
  "black-magic-gr": {
    name: "Black Magic GR",
    category: "Biostimulents",
    categoryId: "biostimulents",
    tagline: "Granular Humic Formulation",
    description: "Black Magic GR is the granular version of our popular Black Magic, designed for easy soil incorporation and slow-release benefits.",
    benefits: ["Easy application", "Slow-release action", "Long-lasting effects", "Improves soil texture", "Enhances root zone"],
    composition: "Humic Acid: 15%, Organic Matter: 40%",
    dosage: "10kg per acre",
    application: ["Mix with basal fertilizer", "Apply during sowing"],
    crops: ["All crops"],
  },
  "vegetable-magic": {
    name: "Vegetable Magic",
    category: "Biostimulents",
    categoryId: "biostimulents",
    tagline: "Specialized Vegetable Nutrition",
    description: "Vegetable Magic is formulated specifically for vegetable crops, providing balanced nutrition for high-quality produce with excellent taste and appearance.",
    benefits: ["Enhances vegetable quality", "Improves color and texture", "Increases shelf life", "Boosts nutritional value", "Promotes uniform growth"],
    composition: "NPK: 19:19:19, Trace Elements, Amino Acids",
    dosage: "3-4ml per liter of water",
    application: ["Foliar spray every 10-15 days", "Drip irrigation"],
    crops: ["All vegetables"],
  },
  "black-magic-zyme-granules": {
    name: "Black Magic Zyme Granules",
    category: "Biostimulents",
    categoryId: "biostimulents",
    tagline: "Enzyme-Enriched Granules",
    description: "Black Magic Zyme Granules combine humic acids with natural enzymes to break down organic residues and release nutrients for plant uptake.",
    benefits: ["Decomposes crop residues", "Releases bound nutrients", "Improves soil biology", "Reduces disease incidence", "Enhances nutrient cycling"],
    composition: "Humic Acid: 10%, Cellulase, Protease, Amylase enzymes",
    dosage: "8kg per acre",
    application: ["Apply after harvest", "Incorporate into soil"],
    crops: ["All crops"],
  },
  "cyto-elixirs": {
    name: "Cyto Elixirs",
    category: "PGR's",
    categoryId: "pgrs",
    tagline: "Cytokinin-Based Growth Regulator",
    description: "Cyto Elixirs contains natural cytokinins that promote cell division, delay senescence, and enhance fruit quality.",
    benefits: ["Promotes cell division", "Delays leaf aging", "Enhances fruit size", "Improves branching", "Increases yield"],
    composition: "Natural Cytokinins: 0.04%",
    dosage: "1ml per liter of water",
    application: ["Foliar spray at vegetative stage", "Apply at fruit setting"],
    crops: ["Fruits", "Vegetables", "Flowers"],
  },
  "gibbra-elixir": {
    name: "Gibbra Elixir",
    category: "PGR's",
    categoryId: "pgrs",
    tagline: "Gibberellin Growth Promoter",
    description: "Gibbra Elixir contains gibberellins that promote stem elongation, break seed dormancy, and enhance fruit development.",
    benefits: ["Promotes stem elongation", "Breaks seed dormancy", "Enhances fruit set", "Improves grape quality", "Increases internode length"],
    composition: "Gibberellic Acid: 0.001%",
    dosage: "0.5ml per liter of water",
    application: ["Spray at flowering", "Apply during fruit development"],
    crops: ["Grapes", "Citrus", "Vegetables"],
  },
  "magic-hower": {
    name: "Magic Hower",
    category: "PGR's",
    categoryId: "pgrs",
    tagline: "Flowering & Fruiting Enhancer",
    description: "Magic Hower is designed to induce and enhance flowering, improve fruit setting, and reduce flower drop in various crops.",
    benefits: ["Induces early flowering", "Reduces flower drop", "Improves fruit set", "Enhances pollination", "Increases fruit retention"],
    composition: "Plant hormones blend, Boron, Molybdenum",
    dosage: "2ml per liter of water",
    application: ["Apply at pre-flowering stage", "Repeat during flowering"],
    crops: ["Mango", "Citrus", "Vegetables", "Pulses"],
  },
  "white-out": {
    name: "White Out",
    category: "Biologicals",
    categoryId: "biologicals",
    tagline: "Biological Fungicide",
    description: "White Out is a biological fungicide containing beneficial Trichoderma species that protect plants from soil-borne fungal diseases.",
    benefits: ["Controls root rot", "Prevents wilt diseases", "Promotes root growth", "Enhances soil health", "Safe for beneficials"],
    composition: "Trichoderma viride: 2 x 10^9 CFU/ml",
    dosage: "500ml per acre",
    application: ["Soil drench", "Seed treatment", "Drip irrigation"],
    crops: ["All crops"],
  },
  "fungal-out": {
    name: "Fungal Out",
    category: "Biologicals",
    categoryId: "biologicals",
    tagline: "Broad-Spectrum Bio-Fungicide",
    description: "Fungal Out contains multiple species of beneficial fungi that provide broad-spectrum protection against various fungal pathogens.",
    benefits: ["Controls multiple fungi", "Systemic action", "Residue-free", "Improves plant immunity", "Safe for environment"],
    composition: "Multi-strain fungal consortium",
    dosage: "2ml per liter of water",
    application: ["Foliar spray", "Preventive application"],
    crops: ["Vegetables", "Fruits", "Cereals"],
  },
  "virus-shield": {
    name: "Virus Shield",
    category: "Biologicals",
    categoryId: "biologicals",
    tagline: "Antiviral Plant Protector",
    description: "Virus Shield is formulated to enhance plant's natural resistance against viral infections and reduce virus transmission.",
    benefits: ["Boosts antiviral immunity", "Reduces virus spread", "Enhances SAR response", "Improves plant vigor", "Reduces vector attraction"],
    composition: "Plant extracts, Salicylic acid derivatives",
    dosage: "2ml per liter of water",
    application: ["Preventive foliar spray", "Apply every 15 days"],
    crops: ["Tomato", "Pepper", "Cucurbits", "Papaya"],
  },
  "gardian-shield-pro": {
    name: "Gardian Shield Pro",
    category: "Biologicals",
    categoryId: "biologicals",
    tagline: "Complete Plant Protection",
    description: "Gardian Shield Pro is a comprehensive bio-protection solution combining multiple beneficial organisms for complete plant defense.",
    benefits: ["Multi-mode protection", "Controls pests and diseases", "Promotes plant health", "Organic certified", "Long-lasting effect"],
    composition: "Consortium of beneficial microbes",
    dosage: "500ml per acre",
    application: ["Soil and foliar application", "Integrated pest management"],
    crops: ["All crops"],
  },
  "bacto-shield-pro": {
    name: "Bacto Shield Pro",
    category: "Biologicals",
    categoryId: "biologicals",
    tagline: "Bacterial Disease Control",
    description: "Bacto Shield Pro contains antagonistic bacteria that suppress bacterial pathogens and promote plant health.",
    benefits: ["Controls bacterial diseases", "Induces resistance", "Promotes growth", "Prevents bacterial wilt", "Safe and effective"],
    composition: "Pseudomonas fluorescens: 2 x 10^9 CFU/ml",
    dosage: "500ml per acre",
    application: ["Soil drench", "Foliar spray", "Seed treatment"],
    crops: ["Vegetables", "Fruits", "Plantation crops"],
  },
  "viro-shield": {
    name: "Viro Shield",
    category: "Biologicals",
    categoryId: "biologicals",
    tagline: "Advanced Viral Protection",
    description: "Viro Shield provides advanced protection against viral diseases by activating plant's systemic acquired resistance.",
    benefits: ["Activates plant immunity", "Reduces viral load", "Promotes recovery", "Enhances growth", "Preventive action"],
    composition: "Bio-active compounds, Immune boosters",
    dosage: "1.5ml per liter of water",
    application: ["Spray at early growth stages", "Repeat every 20 days"],
    crops: ["All susceptible crops"],
  },
  "magic-cap": {
    name: "Magic Cap",
    category: "Micronutrients",
    categoryId: "micronutrients",
    tagline: "Calcium & Boron Formula",
    description: "Magic Cap provides readily available calcium and boron for strong cell walls, reduced blossom end rot, and improved fruit quality.",
    benefits: ["Prevents blossom end rot", "Strengthens cell walls", "Improves fruit firmness", "Enhances storage life", "Reduces cracking"],
    composition: "Calcium: 11%, Boron: 0.5%",
    dosage: "2ml per liter of water",
    application: ["Foliar spray during fruiting", "Drip irrigation"],
    crops: ["Tomato", "Pepper", "Apple", "Mango"],
  },
  "magic-zn": {
    name: "Magic ZN",
    category: "Micronutrients",
    categoryId: "micronutrients",
    tagline: "Chelated Zinc Solution",
    description: "Magic ZN provides chelated zinc for enhanced absorption, promoting enzyme activity and auxin synthesis in plants.",
    benefits: ["Corrects zinc deficiency", "Promotes growth hormones", "Enhances grain quality", "Improves pollination", "Boosts enzyme activity"],
    composition: "Zinc EDTA: 12%",
    dosage: "1ml per liter of water",
    application: ["Foliar spray", "Soil application"],
    crops: ["Rice", "Wheat", "Maize", "Citrus"],
  },
  "magic-bag": {
    name: "Magic Bag",
    category: "Micronutrients",
    categoryId: "micronutrients",
    tagline: "Multi-Micronutrient Mix",
    description: "Magic Bag contains all essential micronutrients in balanced proportion to correct multiple deficiencies in a single application.",
    benefits: ["Complete micronutrient supply", "Prevents hidden hunger", "Improves photosynthesis", "Enhances yield quality", "Balanced nutrition"],
    composition: "Zn: 3%, Fe: 2%, Mn: 1%, B: 0.5%, Cu: 0.5%, Mo: 0.1%",
    dosage: "2g per liter of water",
    application: ["Foliar spray at critical stages", "Mix with other fertilizers"],
    crops: ["All crops"],
  },
  "zinc-magic": {
    name: "Zinc Magic",
    category: "Micronutrients",
    categoryId: "micronutrients",
    tagline: "High-Efficiency Zinc",
    description: "Zinc Magic is a high-efficiency zinc formulation with enhanced absorption technology for faster deficiency correction.",
    benefits: ["Rapid absorption", "Long-lasting effect", "Prevents khaira disease", "Improves grain zinc content", "Enhances tiller production"],
    composition: "Zinc Sulphate: 21%, with absorption enhancers",
    dosage: "2g per liter of water",
    application: ["Foliar application", "Soil broadcast"],
    crops: ["Rice", "Wheat", "Pulses"],
  },
  "bio-silicone-s220": {
    name: "Bio Silicone S220",
    category: "Water Treatments",
    categoryId: "water-treatments",
    tagline: "Silicone-Based Spreader",
    description: "Bio Silicone S220 is a non-ionic surfactant that improves spray coverage and penetration of agricultural inputs.",
    benefits: ["Super spreading action", "Improves coverage", "Reduces water usage", "Enhances absorption", "Compatible with all inputs"],
    composition: "Organosilicone surfactant: 22%",
    dosage: "0.25ml per liter of water",
    application: ["Add to spray tank as last ingredient", "Use with all foliar sprays"],
    crops: ["All crops"],
  },
  "bio-silicone-s240": {
    name: "Bio Silicone S240",
    category: "Water Treatments",
    categoryId: "water-treatments",
    tagline: "Premium Spreading Agent",
    description: "Bio Silicone S240 is our premium grade silicone spreader with enhanced spreading and sticking properties.",
    benefits: ["Maximum spread factor", "Rain-fast properties", "Reduces drift", "Improves efficacy", "Cost-effective"],
    composition: "Modified organosilicone: 24%",
    dosage: "0.2ml per liter of water",
    application: ["Add last to spray mixture", "Compatible with all pesticides"],
    crops: ["All crops"],
  },
  "bio-better": {
    name: "Bio Better",
    category: "Water Treatments",
    categoryId: "water-treatments",
    tagline: "Water Conditioner",
    description: "Bio Better conditions water by adjusting pH and reducing hardness for optimal performance of agricultural chemicals.",
    benefits: ["Optimizes spray water pH", "Reduces water hardness", "Improves chemical stability", "Enhances efficacy", "Prevents antagonism"],
    composition: "pH buffers, Water softeners",
    dosage: "1ml per liter of water",
    application: ["Add to water before other inputs", "Use with all spray applications"],
    crops: ["All crops"],
  },
  "magic-tuner": {
    name: "Magic Tuner",
    category: "Water Treatments",
    categoryId: "water-treatments",
    tagline: "pH Tuning Solution",
    description: "Magic Tuner precisely adjusts spray water pH to the optimal range for maximum pesticide and fertilizer effectiveness.",
    benefits: ["Precise pH control", "Prevents alkaline hydrolysis", "Extends spray solution life", "Improves mixing", "Color indicator system"],
    composition: "Acidifying agents, pH indicators",
    dosage: "0.5-1ml per liter based on water pH",
    application: ["Test water pH first", "Add before other chemicals"],
    crops: ["All crops"],
  },
};

const defaultProduct = {
  name: "Product",
  category: "Biostimulents",
  categoryId: "biostimulents",
  tagline: "Premium Agricultural Solution",
  description: "A high-quality agricultural product designed to enhance crop health and productivity.",
  benefits: ["Improves plant health", "Enhances growth", "Increases yield", "Eco-friendly formulation"],
  composition: "Proprietary blend of natural ingredients",
  dosage: "As per crop requirement",
  application: ["Foliar spray", "Soil application", "Drip irrigation"],
  crops: ["All crops"],
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId && productData[productId] ? productData[productId] : defaultProduct;

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case "biostimulents":
        return Sprout;
      case "pgrs":
        return Leaf;
      case "biologicals":
        return Shield;
      case "micronutrients":
        return FlaskConical;
      case "water-treatments":
        return Droplets;
      default:
        return Beaker;
    }
  };

  const CategoryIcon = getCategoryIcon(product.categoryId);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary py-16 md:py-24">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1920&q=80"
            alt="Product background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-wide relative z-10">
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products" },
              { label: product.category, href: `/products?category=${product.categoryId}` },
              { label: product.name },
            ]}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mt-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center">
                <CategoryIcon className="h-8 w-8 text-secondary-foreground" />
              </div>
              <span className="px-4 py-1 bg-secondary/20 rounded-full text-secondary-foreground text-sm font-medium">
                {product.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              {product.name}
            </h1>
            <p className="text-xl text-primary-foreground/90 italic">
              {product.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Details */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-foreground mb-4">About {product.name}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {product.description}
                </p>

                <Tabs defaultValue="benefits" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="benefits">Benefits</TabsTrigger>
                    <TabsTrigger value="application">Application</TabsTrigger>
                    <TabsTrigger value="crops">Suitable Crops</TabsTrigger>
                  </TabsList>
                  <TabsContent value="benefits" className="mt-6">
                    <ul className="space-y-3">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="application" className="mt-6">
                    <ul className="space-y-3">
                      {product.application.map((method, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-bold text-secondary">{index + 1}</span>
                          </div>
                          <span className="text-foreground">{method}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="crops" className="mt-6">
                    <div className="flex flex-wrap gap-2">
                      {product.crops.map((crop, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground"
                        >
                          {crop}
                        </span>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.2}>
                <Card className="border-border sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Product Information</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <span className="text-sm text-muted-foreground block mb-1">Composition</span>
                        <p className="text-foreground">{product.composition}</p>
                      </div>
                      
                      <div>
                        <span className="text-sm text-muted-foreground block mb-1">Recommended Dosage</span>
                        <p className="text-foreground font-medium">{product.dosage}</p>
                      </div>
                      
                      <div>
                        <span className="text-sm text-muted-foreground block mb-1">Category</span>
                        <p className="text-foreground">{product.category}</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <Button asChild className="w-full mb-3">
                        <Link to="/tools/dosage-calculator">
                          Calculate Dosage
                        </Link>
                      </Button>
                      <Button variant="outline" asChild className="w-full">
                        <Link to="/contact">
                          Get Expert Advice
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Related Products
            </h2>
            <p className="text-muted-foreground">
              Explore more products from {product.category}
            </p>
          </AnimatedSection>

          <div className="flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link to={`/products`} className="flex items-center gap-2">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;