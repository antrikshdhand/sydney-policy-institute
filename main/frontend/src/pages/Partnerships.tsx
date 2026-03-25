import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, FileText, Mail } from "lucide-react";

const Partnerships = () => {
  const partnershipTypes = [
    {
      icon: <Building2 size={32} />,
      title: "Academic Institutions",
      description: "Collaborate with universities and research centers to enhance our policy research and expand our reach.",
    },
    {
      icon: <Users size={32} />,
      title: "Think Tanks & NGOs",
      description: "Partner with established policy organizations to amplify our impact and share resources.",
    },
    {
      icon: <FileText size={32} />,
      title: "Government Agencies",
      description: "Work with public sector bodies to ensure our research informs actual policy decisions.",
    },
  ];

  const benefits = [
    "Access to student research talent and fresh perspectives",
    "Opportunities for co-authored publications and joint events",
    "Expanded audience reach through our network",
    "Contribution to developing the next generation of policy leaders",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="bg-academic-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-academic-navy mb-6">
              Partnerships
            </h1>
            <p className="text-xl text-muted-foreground">
              Collaborating to expand the impact of student policy research
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Partnership Opportunities
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {partnershipTypes.map((type, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="pt-6">
                    <div className="text-primary mb-4">
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-3">
                      {type.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-academic-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8">
              Why Partner With SPI?
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Sydney Policy Institute brings together passionate student researchers 
                with academic rigor and fresh perspectives. Our partnerships provide mutual 
                benefits that advance both our missions.
              </p>
            </div>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-8">
              Current Partners
            </h2>
            <Card className="border-2">
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground">
                  We are currently building our partnership network. Be among the first 
                  to collaborate with Australia's leading student policy think tank.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Interested in Partnering?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              We welcome inquiries from universities, think tanks, NGOs, and government 
              agencies interested in collaborating with our team.
            </p>
            <a href="mailto:partnerships@sydneypolicy.org">
              <Button size="lg" variant="secondary" className="font-body">
                <Mail className="mr-2" size={20} />
                Get in Touch
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partnerships;
