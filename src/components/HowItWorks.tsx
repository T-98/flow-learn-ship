import { Target, BookOpen, Code2, Sparkles } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Target,
      title: "Assess Your Knowledge",
      description: "DevFlow tests your foundational understanding with quick, intelligent assessments tailored to your current project.",
      color: "primary"
    },
    {
      number: "02",
      icon: BookOpen,
      title: "Learn in Context",
      description: "Get step-by-step guides bound to your actual tasks. No generic tutorials — just what you need, when you need it.",
      color: "accent"
    },
    {
      number: "03",
      icon: Code2,
      title: "Practice Inline",
      description: "Transform real code challenges into gamified exercises. Build and learn simultaneously without leaving your IDE.",
      color: "primary"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-96 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-96 bg-gradient-to-b from-transparent via-accent/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">The Flow</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Learning that </span>
            <span className="text-gradient">flows</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Three seamless steps that transform how you learn while building real projects.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16 last:mb-0 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Number and Icon */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <span className="absolute -top-4 -left-4 text-7xl font-bold text-muted/30 font-mono">
                    {step.number}
                  </span>
                  <div className={`relative w-24 h-24 rounded-2xl ${
                    step.color === 'primary' ? 'bg-primary/10 border-primary/30' : 'bg-accent/10 border-accent/30'
                  } border flex items-center justify-center shadow-lg`}>
                    <step.icon className={`w-10 h-10 ${
                      step.color === 'primary' ? 'text-primary' : 'text-accent'
                    }`} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground max-w-lg">
                  {step.description}
                </p>
              </div>

              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 w-px h-16 bg-gradient-to-b from-border to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
