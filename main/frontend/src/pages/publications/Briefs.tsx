import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Briefs = () => {
  const briefs = [
    {
      id: 1,
      title: "AI Governance: A Framework for Australia",
      author: "Sarah Chen & Emma Rodriguez",
      date: "2024-03-12",
      summary: "This brief proposes a risk-based regulatory framework for AI systems in Australia, balancing innovation with safety and accountability.",
      initiative: "AI Regulation",
      tags: ["AI", "Regulation", "Governance"],
      pages: 24,
    },
    {
      id: 2,
      title: "Housing Affordability: Supply-Side Solutions",
      author: "Michael Torres & David Kim",
      date: "2024-03-08",
      summary: "A comprehensive analysis of zoning reform, development incentives, and infrastructure investment to address housing affordability.",
      initiative: "Housing Policy",
      tags: ["Housing", "Urban Planning", "Supply"],
      pages: 32,
    },
    {
      id: 3,
      title: "Refugee Resettlement: International Best Practices",
      author: "Aisha Patel",
      date: "2024-02-25",
      summary: "Examining successful refugee resettlement models from Canada, Germany, and New Zealand with lessons for Australia.",
      initiative: "Immigration & Equal Justice",
      tags: ["Immigration", "Refugees", "Human Rights"],
      pages: 28,
    },
    {
      id: 4,
      title: "Monetary Policy in the 2020s: New Challenges",
      author: "James Liu",
      date: "2024-02-18",
      summary: "Analysis of how central banks can navigate high inflation, supply chain disruptions, and climate risks.",
      initiative: "Job Security & Inflation",
      tags: ["Monetary Policy", "Inflation", "Economics"],
      pages: 20,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="bg-academic-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-academic-navy mb-6">
              Policy Briefs
            </h1>
            <p className="text-xl text-muted-foreground">
              In-depth research and policy recommendations
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {briefs.map((brief) => (
                <Card key={brief.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="secondary" className="text-xs font-semibold">
                        {brief.initiative}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{brief.pages} pages</span>
                    </div>
                    <CardTitle className="font-heading text-2xl mb-2">
                      {brief.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      By {brief.author} • {new Date(brief.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{brief.summary}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {brief.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="font-body">
                        <FileText size={16} className="mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Briefs;
