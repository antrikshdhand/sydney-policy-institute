import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const JobSecurity = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="bg-academic-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-academic-navy mb-6">
              Job Security & Inflation
            </h1>
            <p className="text-xl text-muted-foreground">
              Analyzing economic policy to protect workers while managing inflation through evidence-based research and sustainable growth strategies.
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
                Our Job Security & Inflation initiative examines the complex relationship between 
                employment stability and price stability. We research how policy can protect workers 
                during economic transitions while maintaining responsible fiscal and monetary policy.
              </p>
            </div>

            <h2 className="text-3xl font-heading font-bold mb-6 mt-12">Research Focus</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">Labor Market Transitions</h3>
                  <p className="text-muted-foreground">
                    Studying how workers navigate industry shifts and what policies can facilitate smooth transitions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">Inflation Management</h3>
                  <p className="text-muted-foreground">
                    Analyzing central bank policy, fiscal responses, and their impacts on cost of living.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">Wage Policy</h3>
                  <p className="text-muted-foreground">
                    Examining minimum wage, collective bargaining, and wage growth in relation to productivity.
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

export default JobSecurity;
