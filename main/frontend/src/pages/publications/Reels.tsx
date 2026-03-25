import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";

const Reels = () => {
  const reels: Array<{
    id: number;
    title: string;
    creator: string;
    date: string;
    description: string;
    initiative: string;
    tags: string[];
    duration: string;
  }> = [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="bg-academic-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-academic-navy mb-6">
              Reels
            </h1>
            <p className="text-xl text-muted-foreground">
              Policy explained in 60 seconds or less
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {reels.length === 0 ? (
              <div className="text-center py-16">
                <Play size={64} className="mx-auto text-muted-foreground/50 mb-4" />
                <h3 className="text-xl font-heading font-semibold text-academic-navy mb-2">Coming Soon</h3>
                <p className="text-muted-foreground">New reels will be added here shortly.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-6">
                {reels.map((reel) => (
                  <Card key={reel.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="aspect-[9/16] bg-academic-light flex items-center justify-center border-b relative group cursor-pointer">
                      <Play size={48} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {reel.duration}
                      </span>
                    </div>
                    <CardHeader>
                      <div className="mb-2">
                        <Badge variant="secondary" className="text-xs font-semibold">
                          {reel.initiative}
                        </Badge>
                      </div>
                      <CardTitle className="font-heading text-lg mb-1">
                        {reel.title}
                      </CardTitle>
                      <CardDescription className="text-xs">
                        By {reel.creator}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">{reel.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {reel.tags.map((tag, index) => (
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

export default Reels;
