import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Trophy, FileText, Video, Calendar } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: "guides",
    name: "Application Guides",
    description: "Step-by-step guides for product application and best practices",
    icon: BookOpen,
    count: "25+ Guides",
    href: "/knowledge/guides",
  },
  {
    id: "success-stories",
    name: "Success Stories",
    description: "Real results from farmers across India using Plantmagic solutions",
    icon: Trophy,
    count: "50+ Stories",
    href: "/knowledge/success-stories",
  },
  {
    id: "research",
    name: "Research & Publications",
    description: "Scientific research backing our bio-stimulant formulations",
    icon: FileText,
    count: "30+ Papers",
    href: "/knowledge/research",
  },
];

const featuredContent = [
  {
    id: 1,
    type: "Guide",
    title: "Complete Bio-Silicon Application Guide",
    description: "Learn the optimal timing, dosage, and methods for Bio-Silicon application",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    href: "/knowledge/guides/bio-silicon",
  },
  {
    id: 2,
    type: "Success Story",
    title: "40% Yield Increase in Maharashtra Cotton",
    description: "How a cotton farmer transformed his yields with Plantmagic solutions",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=600&q=80",
    href: "/knowledge/success-stories/maharashtra-cotton",
  },
  {
    id: 3,
    type: "Video",
    title: "Understanding Humic Acids for Soil Health",
    description: "A deep dive into how humic acids improve soil structure and nutrient availability",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80",
    href: "/knowledge/videos/humic-acids",
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: "Farmer Training: Bio-Stimulant Basics",
    date: "January 15, 2024",
    location: "Hyderabad, Telangana",
  },
  {
    id: 2,
    title: "Plantmagic at AgriTech India 2024",
    date: "February 5-7, 2024",
    location: "New Delhi",
  },
];

const Knowledge = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary py-20 md:py-28">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1920&q=80"
            alt="Research lab"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-wide relative z-10">
          <Breadcrumbs items={[{ label: "Knowledge Hub" }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Knowledge Hub
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Explore guides, success stories, and research to maximize your agricultural success 
              with Plantmagic bio-solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <AnimatedSection key={category.id} delay={index * 0.1}>
                <Link to={category.href}>
                  <motion.div whileHover={{ y: -5 }}>
                    <Card className="border-border h-full group hover:shadow-card transition-shadow">
                      <CardContent className="p-8">
                        <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                          <category.icon className="h-7 w-7 text-secondary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-muted-foreground mb-4">{category.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-secondary font-medium">{category.count}</span>
                          <ArrowRight className="h-5 w-5 text-secondary transition-transform group-hover:translate-x-1" />
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

      {/* Featured Content */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Content</h2>
            <p className="text-muted-foreground text-lg">
              Popular resources from our knowledge base
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredContent.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.1}>
                <Link to={item.href}>
                  <motion.div whileHover={{ y: -5 }}>
                    <Card className="overflow-hidden border-border h-full group">
                      <div className="relative h-48">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                            {item.type === "Video" && <Video className="h-3 w-3 mr-1" />}
                            {item.type}
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Upcoming Events
              </h2>
              <p className="text-muted-foreground mb-8">
                Join us at training sessions and industry events
              </p>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="border-border">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                        <Calendar className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {event.date} • {event.location}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button className="mt-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&q=80"
                  alt="Farmer training"
                  className="rounded-2xl shadow-card"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-2xl -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Knowledge;
