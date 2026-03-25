import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Lightbulb, BookOpen } from "lucide-react";
import { leadershipData, groupPhotoCaption } from "@/data/leadership";

const About = () => {
  const values = [
    {
      icon: <Target size={32} />,
      title: "Evidence-Based",
      description: "Our work is grounded in rigorous research, data analysis, and academic scholarship.",
    },
    {
      icon: <Users size={32} />,
      title: "Student-Led",
      description: "Driven by passionate students bringing fresh perspectives to policy challenges.",
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Solutions-Oriented",
      description: "We focus on actionable policy recommendations that can drive real change.",
    },
    {
      icon: <BookOpen size={32} />,
      title: "Accessible",
      description: "Complex policy made clear through diverse formats from briefs to comics.",
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
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-6">Our Mission</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The Sydney Policy Institute is a student-led think tank dedicated to producing 
                evidence-based policy research and analysis on the most pressing issues facing 
                Australia. Founded by students, we translate rigorous policy analysis into clear, 
                accessible ideas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We work across five core initiatives—Job Security & Inflation, Immigration & 
                Equal Justice, Housing Policy, AI Regulation, and our Editorial Engine—to deliver 
                research that matters. Our team of undergraduate and graduate students collaborates 
                with faculty advisors and industry experts to ensure our work meets the highest 
                standards of policy scholarship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-academic-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-primary flex-shrink-0">
                        {value.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-semibold mb-2">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-6">What We Do</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-heading font-semibold mb-3">Research & Analysis</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We conduct original research on pressing policy issues, combining quantitative 
                  analysis with qualitative insights to produce comprehensive policy briefs and 
                  white papers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-3">Public Engagement</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Through op-eds, podcasts, video content, and even comics, we translate complex 
                  policy into formats that resonate with diverse audiences.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-3">Events & Dialogue</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We host panels, workshops, and symposiums that bring together students, 
                  academics, policymakers, and the public to discuss critical issues.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-3">Partnerships</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We collaborate with universities, think tanks, NGOs, and government agencies 
                  to amplify our impact and ensure our research reaches decision-makers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-academic-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Hero Block */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-academic-navy mb-4">
                Executive Board 2025–2026
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our Executive Board brings together passionate students and experienced leaders to guide SPI's research agenda, operations, and strategic direction.
              </p>
            </div>

            {/* Group Photo Placeholder */}
            <div className="mb-16">
              <div className="aspect-[21/9] bg-muted rounded-lg flex items-center justify-center mb-4">
                <p className="text-muted-foreground text-sm">Group Photo Placeholder</p>
              </div>
              <p className="text-sm text-muted-foreground text-center italic">
                {groupPhotoCaption}
              </p>
            </div>

            {/* Executive Board */}
            <div className="mb-12">
              <h3 className="text-2xl font-heading font-bold mb-6">Executive Board</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {leadershipData
                  .filter((member) => member.category === "Executive Board")
                  .map((member, index) => (
                    <Card key={index} className="border-2">
                      <CardContent className="pt-6">
                        <h4 className="text-xl font-heading font-semibold mb-1">
                          {member.name}
                        </h4>
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

            {/* Directors */}
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6">Directors</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {leadershipData
                  .filter((member) => member.category === "Directors")
                  .map((member, index) => (
                    <Card key={index} className="border-2">
                      <CardContent className="pt-6">
                        <h4 className="text-xl font-heading font-semibold mb-1">
                          {member.name}
                        </h4>
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
