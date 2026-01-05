import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-glow opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">VS Code Extension</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Escape </span>
            <span className="text-gradient">tutorial hell.</span>
            <br />
            <span className="text-foreground">Learn while you </span>
            <span className="text-gradient">build.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            DevFlow embeds contextual learning directly in your IDE. Understand code in real-time, 
            without switching tabs or drowning in documentation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl">
              Install for Free
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gradient font-mono">10K+</p>
              <p className="text-sm text-muted-foreground mt-1">Developers</p>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gradient font-mono">50%</p>
              <p className="text-sm text-muted-foreground mt-1">Faster Learning</p>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gradient font-mono">4.9★</p>
              <p className="text-sm text-muted-foreground mt-1">VS Code Rating</p>
            </div>
          </div>
        </div>

        {/* Code preview mockup */}
        <div className="mt-20 max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
            <div className="bg-card p-3 flex items-center gap-2 border-b border-border/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-muted-foreground font-mono ml-2">main.tsx — DevFlow</span>
            </div>
            <div className="bg-gradient-to-b from-card to-background p-6 md:p-8">
              <pre className="font-mono text-sm md:text-base overflow-x-auto">
                <code>
                  <span className="text-muted-foreground">{"// Highlight any code to learn"}</span>{"\n"}
                  <span className="text-accent">const</span>{" "}
                  <span className="text-primary">useDebounce</span>{" = "}
                  <span className="text-accent">{"<T>"}</span>
                  {"("}
                  <span className="text-foreground">value</span>
                  {": "}
                  <span className="text-accent">T</span>
                  {", "}
                  <span className="text-foreground">delay</span>
                  {": "}
                  <span className="text-accent">number</span>
                  {") => {"}{"\n"}
                  {"  "}
                  <span className="text-accent">const</span>
                  {" ["}
                  <span className="text-foreground">debounced</span>
                  {", "}
                  <span className="text-foreground">setDebounced</span>
                  {"] = "}
                  <span className="text-primary">useState</span>
                  {"(value);"}{"\n"}
                  {"  "}{"\n"}
                  {"  "}
                  <span className="text-primary">useEffect</span>
                  {"(() => {"}{"\n"}
                  {"    "}
                  <span className="text-accent">const</span>
                  {" timer = "}
                  <span className="text-primary">setTimeout</span>
                  {"(() => {"}{"\n"}
                  {"      "}
                  <span className="text-foreground">setDebounced</span>
                  {"(value);"}{"\n"}
                  {"    }"}{", delay);"}{"\n"}
                  {"  }"}{", [value, delay]);"}{"\n"}
                  {"};"}
                </code>
              </pre>

              {/* DevFlow panel overlay */}
              <div className="absolute bottom-8 right-8 w-80 glass rounded-xl p-4 shadow-glow animate-float">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded bg-gradient-primary flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">D</span>
                  </div>
                  <span className="font-mono text-sm font-semibold text-foreground">DevFlow</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  <span className="text-primary font-semibold">useDebounce</span> delays updating a value until after a specified time has passed since the last change.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 rounded text-xs bg-primary/20 text-primary font-mono">React Hook</span>
                  <span className="px-2 py-1 rounded text-xs bg-accent/20 text-accent font-mono">Performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
