import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>DevFlow — Learn While You Code | VS Code Extension</title>
        <meta 
          name="description" 
          content="Escape tutorial hell with DevFlow. A VS Code extension that embeds contextual learning directly in your IDE. Learn, build, and ship without switching tabs." 
        />
        <meta name="keywords" content="VS Code extension, learn coding, developer tools, contextual learning, IDE, tutorial, programming" />
        <link rel="canonical" href="https://devflow.dev" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Problem />
          <HowItWorks />
          <Features />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
