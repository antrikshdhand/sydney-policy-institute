import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AIRegulation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="bg-academic-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-academic-navy mb-6">
              Artificial Intelligence Regulation
            </h1>
            <p className="text-xl text-muted-foreground">
              Shaping responsible AI governance frameworks balancing innovation, ethical deployment, safety standards, and democratic oversight.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-6">Overview</h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our AI Regulation initiative examines how governments can harness artificial intelligence's 
                benefits while mitigating its risks. We research regulatory frameworks that promote innovation, 
                ensure safety, protect privacy, and maintain human agency.
              </p>
            </div>

            <h2 className="text-3xl font-heading font-bold mb-6 mt-12">Research Focus</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">AI Safety & Ethics</h3>
                  <p className="text-muted-foreground">
                    Examining standards for algorithmic transparency, bias mitigation, and safety testing.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">Regulatory Frameworks</h3>
                  <p className="text-muted-foreground">
                    Analyzing governance models from risk-based approaches to sector-specific regulations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">Labor Impact</h3>
                  <p className="text-muted-foreground">
                    Studying how AI affects employment and what policies can support workforce transitions.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <Link to="/publications/op-eds">
                <Button variant="default" className="font-body">
                  Read Our Publications <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIRegulation;
