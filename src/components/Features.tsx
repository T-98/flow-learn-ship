import { 
  Lightbulb, 
  Layers, 
  Gamepad2, 
  Zap, 
  Brain,
  Terminal
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Context-Aware Explanations",
      description: "Highlight any code and get instant, contextual explanations. DevFlow understands your codebase, not just snippets."
    },
    {
      icon: Layers,
      title: "0-to-1 Learning Paths",
      description: "Start from fundamentals and progress to advanced concepts. Each path is tailored to your current project and skill level."
    },
    {
      icon: Gamepad2,
      title: "Gamified Exercises",
      description: "Turn real coding tasks into engaging challenges. Earn points, track progress, and build muscle memory."
    },
    {
      icon: Brain,
      title: "Knowledge Assessments",
      description: "Smart quizzes identify gaps in your understanding before they become bugs in your code."
    },
    {
      icon: Terminal,
      title: "Inline Code Playground",
      description: "Practice concepts immediately in a sandbox environment. No setup, no context switching."
    },
    {
      icon: Zap,
      title: "Zero Tab Switching",
      description: "Everything happens in VS Code. Documentation, learning, and practice — all in one place."
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Everything you need to </span>
            <span className="text-gradient">level up</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            DevFlow isn't just another extension. It's your personal coding mentor that lives where you code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
