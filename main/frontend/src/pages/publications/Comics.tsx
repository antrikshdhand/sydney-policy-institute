import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Comics = () => {
  const comics = [
    {
      id: 1,
      title: "The Housing Ladder",
      creator: "Alex Zhang",
      date: "2024-03-18",
      description: "A visual story explaining how zoning laws create housing shortages and what can be done about it.",
      initiative: "Housing Policy",
      tags: ["Housing", "Zoning", "Comics"],
    },
    {
      id: 2,
      title: "The AI Mirror",
      creator: "Sophie Martin",
      date: "2024-03-05",
      description: "An illustrated exploration of algorithmic bias and how AI systems reflect the data they're trained on.",
      initiative: "AI Regulation",
      tags: ["AI", "Ethics", "Bias"],
    },
    {
      id: 3,
      title: "Journey Home: A Refugee's Story",
      creator: "Maria Santos",
      date: "2024-02-22",
      description: "Following one family's experience through the asylum process, highlighting policy gaps and humanitarian challenges.",
      initiative: "Immigration & Equal Justice",
      tags: ["Immigration", "Refugees", "Human Stories"],
    },
    {
      id: 4,
      title: "The Inflation Balloon",
      creator: "Jordan Lee",
      date: "2024-02-10",
      description: "Making sense of inflation, interest rates, and their impact on everyday Australians through visual metaphors.",
      initiative: "Job Security & Inflation",
      tags: ["Inflation", "Economics", "Education"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="bg-academic-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-academic-navy mb-6">
              Comics
            </h1>
            <p className="text-xl text-muted-foreground">
              Policy through visual storytelling
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {comics.map((comic) => (
                <Card key={comic.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="aspect-video bg-academic-light flex items-center justify-center border-b">
                    <span className="text-muted-foreground text-sm">Comic Preview</span>
                  </div>
                  <CardHeader>
                    <div className="mb-3">
                      <Badge variant="secondary" className="text-xs font-semibold">
                        {comic.initiative}
                      </Badge>
                    </div>
                    <CardTitle className="font-heading text-xl mb-2">
                      {comic.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      By {comic.creator} • {new Date(comic.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{comic.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {comic.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
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

export default Comics;
