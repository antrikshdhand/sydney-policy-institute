import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

const Join = () => {
  const roles = [
    {
      title: "Research Fellows",
      description: "Conduct original policy research, draft policy briefs, and contribute to our knowledge base across our five core initiatives.",
    },
    {
      title: "Writers & Editors",
      description: "Craft compelling op-eds, edit publications, and ensure our content meets the highest editorial standards.",
    },
    {
      title: "Creative Team",
      description: "Design infographics, produce video content, create comics, and transform policy into engaging visual media.",
    },
    {
      title: "Events Coordinators",
      description: "Organize panels, workshops, and symposiums that bring together students, academics, and policymakers.",
    },
    {
      title: "Partnerships & Outreach",
      description: "Build relationships with universities, think tanks, NGOs, and government agencies to amplify our impact.",
    },
    {
      title: "Technology & Web",
      description: "Maintain our digital infrastructure, develop data visualization tools, and enhance our online presence.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="bg-academic-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-academic-navy mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Be part of a dynamic community shaping the future of policy research
            </p>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-6 text-center">
              Why Join SPI?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4 text-center">
                The Sydney Policy Institute offers students a unique opportunity to contribute to 
                meaningful policy research while developing professional skills in research, writing, 
                analysis, and communication. Our members work alongside faculty advisors and industry 
                experts, publish in reputable outlets, and build a network that extends far beyond 
                university.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Publish Your Work</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    See your research published and reach audiences beyond campus
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Build Your Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Connect with academics, policymakers, and fellow student researchers
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Develop Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Gain experience in research, writing, analysis, and public engagement
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-16 bg-academic-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Open Roles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {roles.map((role, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="font-heading">{role.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{role.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Ready to Apply?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We accept applications on a rolling basis. Send us your CV, a brief statement of 
              interest, and any relevant work samples to get started.
            </p>
            <a href="mailto:join@sydneypolicy.org">
              <Button size="lg" className="font-body">
                <Mail className="mr-2" size={20} />
                Email Us to Apply
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-6">
              Applications are open to all enrolled students and recent graduates
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Join;
