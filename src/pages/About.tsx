import { motion } from "framer-motion";
import { CheckCircle, Users, Globe, Award, Target, Heart } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "Continuously developing new bio-solutions through cutting-edge research",
  },
  {
    icon: Heart,
    title: "Sustainability",
    description: "Committed to eco-friendly practices that protect our planet",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Working alongside farmers as trusted partners in their success",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Maintaining the highest quality standards in all our products",
  },
];

const milestones = [
  { year: "2008", title: "Company Founded", description: "Started with a vision to transform Indian agriculture" },
  { year: "2012", title: "First R&D Center", description: "Established research facility in Hyderabad" },
  { year: "2016", title: "100+ Products", description: "Expanded portfolio to serve diverse crop needs" },
  { year: "2020", title: "Pan-India Presence", description: "Reached farmers across all major agricultural states" },
  { year: "2024", title: "Global Standards", description: "Achieved international quality certifications" },
];

const team = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Head of R&D",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
  },
  {
    name: "Amit Patel",
    role: "Director of Operations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  },
  {
    name: "Dr. Sunita Reddy",
    role: "Chief Agronomist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
  },
];

const About = () => {
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
          <Breadcrumbs items={[{ label: "About Us" }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              About Plantmagic
            </h1>
            <p className="text-xl text-primary-foreground/90">
              For over 15 years, we've been at the forefront of biological innovation, 
              empowering Indian farmers with sustainable solutions that work with nature.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground text-lg mb-6">
                To transform Indian agriculture through biological innovation, making sustainable 
                farming practices accessible to every farmer while protecting our environment 
                for future generations.
              </p>
              <ul className="space-y-4">
                {[
                  "Develop world-class bio-stimulants tailored for Indian conditions",
                  "Support farmers with knowledge and technical expertise",
                  "Reduce chemical dependency in agriculture",
                  "Build a sustainable food production ecosystem",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=600&q=80"
                alt="Research and development"
                className="rounded-2xl shadow-card"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <Card className="border-border h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-7 w-7 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-primary">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "300+", label: "Bio-Solutions" },
              { value: "50K+", label: "Farmers Served" },
              { value: "25", label: "States Covered" },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
