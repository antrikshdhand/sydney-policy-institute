import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Immigration = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="bg-academic-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-academic-navy mb-6">
              Immigration & Equal Justice
            </h1>
            <p className="text-xl text-muted-foreground">
              Advancing fair immigration policy and justice reform through data-driven advocacy for equitable systems and human rights protection.
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
                Our Immigration & Equal Justice initiative examines how migration policy intersects 
                with human rights, economic needs, and social cohesion. We advocate for evidence-based 
                immigration frameworks that balance national interests with humanitarian obligations.
              </p>
            </div>

            <h2 className="text-3xl font-heading font-bold mb-6 mt-12">Research Focus</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">Migration Policy</h3>
                  <p className="text-muted-foreground">
                    Analyzing skilled migration, family reunification, and humanitarian pathways.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">Refugee Protection</h3>
                  <p className="text-muted-foreground">
                    Examining asylum processes, resettlement programs, and international obligations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">Justice Reform</h3>
                  <p className="text-muted-foreground">
                    Studying criminal justice reform, sentencing policy, and rehabilitation programs.
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

export default Immigration;
