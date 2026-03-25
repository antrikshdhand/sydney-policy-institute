import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EditorialEngine = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="bg-academic-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-academic-navy mb-6">
              Editorial Engine / Creative Studio
            </h1>
            <p className="text-xl text-muted-foreground">
              Transforming policy research into accessible multimedia content through op-eds, briefs, comics, and video to engage diverse audiences.
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
                Our Editorial Engine transforms complex policy research into engaging, accessible content 
                for diverse audiences. We believe that good policy research deserves to reach beyond 
                academic journals—through op-eds, video, comics, and multimedia storytelling, we make 
                policy analysis accessible to everyone.
              </p>
            </div>

            <h2 className="text-3xl font-heading font-bold mb-6 mt-12">What We Produce</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">Op-Eds</h3>
                  <p className="text-muted-foreground">
                    Timely commentary and analysis published in major outlets to shape public discourse.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">Policy Briefs</h3>
                  <p className="text-muted-foreground">
                    Concise summaries of research findings with actionable policy recommendations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">Comics & Graphics</h3>
                  <p className="text-muted-foreground">
                    Visual storytelling that makes complex policy concepts accessible and engaging.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">Video Reels</h3>
                  <p className="text-muted-foreground">
                    Short-form video content explaining policy issues for social media audiences.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <Link to="/publications/op-eds">
                <Button variant="default" className="font-body">
                  View All Publications <ArrowRight className="ml-2" size={16} />
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

export default EditorialEngine;
