import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Users, FileText, Handshake, BookOpen } from "lucide-react";

const Index = () => {
  const project2026Pillars = [
    {
      title: "Economic Policy",
      focus: "Inflation & Tax",
      question: "The Student CPI",
      path: "/initiatives/economic-policy",
      description: "Analyzing cost-of-living pressures on students and proposing tax reforms that address generational equity."
    },
    {
      title: "Media & Democracy",
      focus: "Misinformation",
      question: "Who owns the narrative?",
      path: "/initiatives/media-democracy",
      description: "Investigating media ownership, platform accountability, and the future of independent journalism."
    },
    {
      title: "Housing & Cities",
      focus: "Zoning & Transport",
      question: "Locked Out: Fixing density",
      path: "/initiatives/housing-cities",
      description: "Proposing evidence-based solutions to housing affordability through planning reform and infrastructure."
    },
    {
      title: "Artificial Intelligence",
      focus: "AI Governance",
      question: "The AI Degree & Assessment",
      path: "/initiatives/ai-tech",
      description: "Examining how AI is reshaping education, assessment integrity, and workforce readiness."
    },
    {
      title: "Foreign Policy",
      focus: "Indo-Pacific",
      question: "The Pacific Step-Up",
      path: "/initiatives/foreign-policy",
      description: "Evaluating Australia's strategic partnerships and aid commitments in the Pacific region."
    }
  ];

  const metrics = [
    { icon: Users, label: "100 Members", value: "100" },
    { icon: FileText, label: "52 Weekly Op-Eds", value: "52" },
    { icon: Handshake, label: "6 Active Partnerships", value: "6" },
    { icon: BookOpen, label: "1 Flagship Report", value: "1" }
  ];

  const leadershipStructure = {
    core: [
      { role: "President", title: "Editor-in-Chief", name: "Sam Moon" },
      { role: "Vice President", title: "Chief of Staff", name: "Tamjid Sami" },
      { role: "Secretary", title: "Secretary", name: "Isha Desai" },
      { role: "Treasurer", title: "Treasurer", name: "Jake Lynch" }
    ],
    content: [
      { role: "Policy Director A", title: "Domestic Policy", name: "Lachlan Theodore Mansour" },
      { role: "Policy Director B", title: "Global Policy", name: "Naveen Subbiah" }
    ],
    growth: [
      { role: "Creative Director", title: "Creative Studio", name: "TBA" },
      { role: "Marketing Director", title: "Marketing", name: "TBA" },
      { role: "Event Director", title: "Events", name: "TBA" },
      { role: "Outreach Director", title: "Outreach", name: "Catherine Charlotte" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-consulting-light to-background border-b border-consulting-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-consulting-navy mb-6 leading-tight">
              Student Perspectives.<br />Independent Evidence.
            </h1>
            <p className="text-xl md:text-2xl text-consulting-slate mb-10 leading-relaxed">
              Unaligned with any party; allied only to integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                <Link to="/publications/briefs">
                  Read the 2026 Roadmap <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-consulting-border hover:bg-consulting-light">
                <Link to="/join">Join the Institute</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="py-12 px-4 bg-consulting-navy text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="h-8 w-8 mx-auto mb-3 text-white/80" />
                  <div className="text-4xl font-heading font-bold mb-1">{metric.value}</div>
                  <div className="text-sm text-white/70 font-medium">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Executive Governance */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-heading font-bold text-consulting-navy mb-16">
            Executive Governance
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* The Core */}
            <Card className="p-8 border-2 border-consulting-border bg-white">
              <h3 className="text-2xl font-heading font-bold text-consulting-navy mb-6 pb-3 border-b-2 border-consulting-border">
                The Core
              </h3>
              <div className="space-y-4">
                {leadershipStructure.core.map((member, index) => (
                  <div key={index} className="pb-3 border-b border-consulting-border/50 last:border-0">
                    <div className="font-heading font-semibold text-consulting-navy">{member.name}</div>
                    <div className="text-sm text-consulting-slate">{member.role} · {member.title}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Content Engine */}
            <Card className="p-8 border-2 border-consulting-border bg-white">
              <h3 className="text-2xl font-heading font-bold text-consulting-navy mb-6 pb-3 border-b-2 border-consulting-border">
                Content Engine
              </h3>
              <div className="space-y-4">
                {leadershipStructure.content.map((member, index) => (
                  <div key={index} className="pb-3 border-b border-consulting-border/50 last:border-0">
                    <div className="font-heading font-semibold text-consulting-navy">{member.name}</div>
                    <div className="text-sm text-consulting-slate">{member.role} · {member.title}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Growth Studio */}
            <Card className="p-8 border-2 border-consulting-border bg-white">
              <h3 className="text-2xl font-heading font-bold text-consulting-navy mb-6 pb-3 border-b-2 border-consulting-border">
                Growth Studio
              </h3>
              <div className="space-y-4">
                {leadershipStructure.growth.map((member, index) => (
                  <div key={index} className="pb-3 border-b border-consulting-border/50 last:border-0">
                    <div className="font-heading font-semibold text-consulting-navy">{member.name}</div>
                    <div className="text-sm text-consulting-slate">{member.role} · {member.title}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Project 2026 */}
      <section className="py-20 px-4 bg-consulting-light">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-heading font-bold text-consulting-navy mb-4">
              Project 2026
            </h2>
            <p className="text-xl text-consulting-slate">
              Five research areas defining our year ahead
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project2026Pillars.map((pillar, index) => (
              <Card key={index} className="p-8 border-2 border-consulting-border bg-white hover:shadow-lg transition-shadow group">
                <div className="mb-4">
                  <div className="text-sm font-semibold text-consulting-slate uppercase tracking-wider mb-2">
                    {pillar.focus}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-consulting-navy mb-3">
                    {pillar.title}
                  </h3>
                  <div className="text-base font-medium text-consulting-accent mb-4 italic">
                    "{pillar.question}"
                  </div>
                </div>
                <p className="text-consulting-slate mb-6 leading-relaxed">
                  {pillar.description}
                </p>
                <Link 
                  to={pillar.path}
                  className="inline-flex items-center text-consulting-navy font-semibold group-hover:text-consulting-accent transition-colors"
                >
                  Explore Research <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Engine */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-heading font-bold text-consulting-navy mb-4">
            The Editorial Engine
          </h2>
          <p className="text-xl text-consulting-slate mb-16">
            The Newsroom Rhythm
          </p>

          <Card className="p-12 border-2 border-consulting-border bg-white">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-consulting-navy text-white flex items-center justify-center text-2xl font-heading font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-heading font-bold text-consulting-navy mb-2">Analyst Draft</h3>
                <p className="text-sm text-consulting-slate">Research and initial composition</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-consulting-navy text-white flex items-center justify-center text-2xl font-heading font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-heading font-bold text-consulting-navy mb-2">Section Editor Review</h3>
                <p className="text-sm text-consulting-slate">Subject matter refinement</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-consulting-navy text-white flex items-center justify-center text-2xl font-heading font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-heading font-bold text-consulting-navy mb-2">Managing Editor Check</h3>
                <p className="text-sm text-consulting-slate">Quality and consistency</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-consulting-navy text-white flex items-center justify-center text-2xl font-heading font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-heading font-bold text-consulting-navy mb-2">Editor-in-Chief Approval</h3>
                <p className="text-sm text-consulting-slate">Final publication decision</p>
              </div>
            </div>

            <div className="border-t-2 border-consulting-border pt-8">
              <h3 className="font-heading font-bold text-consulting-navy mb-4 text-lg">Publication Formats</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 border border-consulting-border rounded bg-consulting-light">
                  <div className="font-semibold text-consulting-navy mb-1">Standard Op-Ed</div>
                  <div className="text-sm text-consulting-slate">800-1200 words, evidence-based analysis</div>
                </div>
                <div className="p-4 border border-consulting-border rounded bg-consulting-light">
                  <div className="font-semibold text-consulting-navy mb-1">The Editor's Desk</div>
                  <div className="text-sm text-consulting-slate">Executive perspective on current affairs</div>
                </div>
                <div className="p-4 border border-consulting-border rounded bg-consulting-light">
                  <div className="font-semibold text-consulting-navy mb-1">The Explainer</div>
                  <div className="text-sm text-consulting-slate">Breaking down complex policy issues</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-consulting-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-heading font-bold mb-6">
            Join the Conversation
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Be part of Australia's emerging generation of policy thinkers. Contribute research, write analysis, or help build our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-white text-consulting-navy hover:bg-white/90 border-0">
              <Link to="/join">Apply to Join</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/10">
              <Link to="/partnerships">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
