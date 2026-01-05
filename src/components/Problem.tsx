import { ExternalLink, RefreshCw, Brain, Zap } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: ExternalLink,
      title: "Tab Overload",
      description: "Constantly switching between docs, Stack Overflow, ChatGPT, and your IDE."
    },
    {
      icon: RefreshCw,
      title: "Context Loss",
      description: "Losing your flow state every time you alt-tab to search for answers."
    },
    {
      icon: Brain,
      title: "Passive Learning",
      description: "Watching tutorials without truly understanding or retaining concepts."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">The </span>
            <span className="text-gradient">tutorial trap</span>
            <span className="text-foreground"> is real</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            You spend hours learning, but when it's time to code, you're stuck Googling the same things again.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Solution teaser */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">DevFlow changes everything</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
