import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/common/AnimatedSection";

const news = [
  {
    id: 1,
    title: "Plantmagic launches new Bio-Silicon formulation for drought resistance",
    date: "January 2, 2024",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=400&q=80",
    href: "/knowledge/news/bio-silicon-launch",
  },
  {
    id: 2,
    title: "Success Story: 40% yield increase in Maharashtra cotton fields",
    date: "December 28, 2024",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80",
    href: "/knowledge/success-stories/maharashtra-cotton",
  },
  {
    id: 3,
    title: "New research facility opens in Hyderabad for biostimulant R&D",
    date: "December 20, 2024",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=80",
    href: "/knowledge/news/hyderabad-facility",
  },
];

export const NewsSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <AnimatedSection className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Featured News & Events
            </h2>
            <p className="text-muted-foreground">
              Stay updated with the latest from Plantmagic
            </p>
          </div>
          <Link to="/knowledge">
            <Button variant="outline" className="group">
              View All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 0.1}>
              <Link to={item.href}>
                <Card className="overflow-hidden border-border bg-card h-full group hover:shadow-card transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-muted-foreground text-sm mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      {item.date}
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
