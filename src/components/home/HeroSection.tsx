import { motion } from "framer-motion";
import { Search, Play } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1920&q=80"
          alt="Healthy crop roots"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary-foreground"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl text-gray-100 lg:text-6xl font-bold leading-tight mb-6"
            >
              Partners with Nature for a{" "}
              <span className="text-amber-400">Sustainable Future</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl"
            >
              Empowering Indian agriculture with Bio-Magic biostimulants. 
              We restore soil vitality and maximize crop resilience through 
              biological innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="relative max-w-lg"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="What are you looking for?"
                className="pl-12 h-14 bg-background/95 border-0 text-foreground placeholder:text-muted-foreground rounded-full shadow-elevated"
              />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-6">
                Search
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center gap-4 mt-8"
            >
              <Button
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Our Story
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden lg:block"
          >
            {/* Placeholder for video/animated element */}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
