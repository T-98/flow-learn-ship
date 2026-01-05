import { Button } from "@/components/ui/button";
import { ArrowRight, Code2 } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-glow" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl glass p-8 md:p-16 text-center overflow-hidden">
            {/* Decorative border glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-10" />
            <div className="absolute inset-[1px] rounded-3xl bg-card" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-8 shadow-glow">
                <Code2 className="w-8 h-8 text-primary-foreground" />
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-foreground">Start your </span>
                <span className="text-gradient">flow state</span>
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Join thousands of developers who learn faster, build better, and ship more — 
                all without leaving their favorite IDE.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl">
                  Install DevFlow Free
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                Free forever for individual developers. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
