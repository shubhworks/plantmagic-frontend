import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsRibbon } from "@/components/home/StatsRibbon";
import { SolutionFinder } from "@/components/home/SolutionFinder";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CropCategories } from "@/components/home/CropCategories";
import { NewsSection } from "@/components/home/NewsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsRibbon />
      <SolutionFinder />
      <FeaturedProducts />
      <CropCategories />
      <NewsSection />
    </Layout>
  );
};

export default Index;
