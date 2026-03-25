import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { leadershipData, groupPhotoCaption } from "@/data/leadership";

const Leadership = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Block */}
      <section className="bg-academic-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-academic-navy mb-6">
              Executive Board 2025–2026
            </h1>
            <p className="text-xl text-muted-foreground">
              Our Executive Board brings together passionate students and experienced leaders to guide SPI's research agenda, operations, and strategic direction.
            </p>
          </div>
        </div>
      </section>

      {/* Group Photo */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="aspect-[21/9] bg-muted rounded-lg flex items-center justify-center mb-4">
              <p className="text-muted-foreground text-sm">Group Photo Placeholder</p>
            </div>
            <p className="text-sm text-muted-foreground text-center italic">
              {groupPhotoCaption}
            </p>
          </div>
        </div>
      </section>

      {/* Executive Board */}
      <section className="py-16 bg-academic-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8">Executive Board</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {leadershipData
                .filter((member) => member.category === "Executive Board")
                .map((member, index) => (
                  <Card key={index} className="border-2">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-heading font-semibold mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary font-semibold mb-2">
                        {member.position}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        {member.degree} · {member.year}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.bio}
                      </p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8">Directors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leadershipData
                .filter((member) => member.category === "Directors")
                .map((member, index) => (
                  <Card key={index} className="border-2">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-heading font-semibold mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary font-semibold mb-2">
                        {member.position}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        {member.degree} · {member.year}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.bio}
                      </p>
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

export default Leadership;
