import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

const OpEds = () => {
  const opeds: Array<{
    id: number;
    title: string;
    author: string;
    date: string;
    summary: string;
    initiative: string;
    tags: string[];
  }> = [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="bg-academic-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-academic-navy mb-6">
              Op-Eds
            </h1>
            <p className="text-xl text-muted-foreground">
              Student perspectives on pressing policy issues
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {opeds.length === 0 ? (
              <div className="text-center py-16">
                <FileText size={64} className="mx-auto text-muted-foreground/50 mb-4" />
                <h3 className="text-xl font-heading font-semibold text-academic-navy mb-2">Coming Soon</h3>
                <p className="text-muted-foreground">New op-eds will be published here shortly.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {opeds.map((oped) => (
                  <Card key={oped.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mb-3">
                        <Badge variant="secondary" className="text-xs font-semibold">
                          {oped.initiative}
                        </Badge>
                      </div>
                      <CardTitle className="font-heading text-2xl mb-2">
                        {oped.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        By {oped.author} • {new Date(oped.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{oped.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {oped.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OpEds;
