import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Housing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="bg-academic-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-academic-navy mb-6">
              Housing Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              Developing affordable housing solutions through zoning reform, supply-side interventions, and inclusive urban development strategies.
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
                Our Housing Policy initiative addresses Australia's housing affordability crisis through 
                comprehensive research on supply constraints, regulatory barriers, and innovative policy 
                solutions that can make housing accessible to all Australians.
              </p>
            </div>

            <h2 className="text-3xl font-heading font-bold mb-6 mt-12">Research Focus</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">Zoning Reform</h3>
                  <p className="text-muted-foreground">
                    Examining how planning regulations can be modernized to enable higher-density development.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">Supply-Side Solutions</h3>
                  <p className="text-muted-foreground">
                    Analyzing policies to increase housing supply including development incentives and streamlined approvals.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">Affordable Housing</h3>
                  <p className="text-muted-foreground">
                    Studying social housing models, rent assistance, and first-home buyer programs.
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

export default Housing;
