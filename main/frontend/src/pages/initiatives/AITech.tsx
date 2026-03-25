import InitiativeLayout from "@/components/InitiativeLayout";

export default function AITech() {
  return (
    <InitiativeLayout
      title="AI & Tech"
      focus="AI Governance, Future of Work"
      researchQuestion="The AI Degree: How LLMs are reshaping USYD assessment."
    >
      <div className="space-y-8">
        <section>
          <h3 className="font-heading text-2xl mb-4 text-consulting-navy">Overview</h3>
          <p className="text-consulting-slate font-body leading-relaxed">
            The AI & Tech pillar investigates the transformative impact of artificial intelligence on higher 
            education, particularly assessment practices and learning outcomes. Our flagship research examines 
            how large language models are changing the nature of academic work at USYD, and proposes governance 
            frameworks that preserve educational integrity while embracing technological advancement.
          </p>
        </section>

        <section>
          <h3 className="font-heading text-2xl mb-4 text-consulting-navy">Key Focus Areas</h3>
          <ul className="space-y-3">
            <li className="border-l-2 border-consulting-accent pl-4">
              <strong className="font-body">Assessment Reform:</strong> Designing AI-resistant and AI-integrated evaluation methods
            </li>
            <li className="border-l-2 border-consulting-accent pl-4">
              <strong className="font-body">AI Governance:</strong> Policy frameworks for ethical AI use in education
            </li>
            <li className="border-l-2 border-consulting-accent pl-4">
              <strong className="font-body">Future of Work:</strong> Preparing students for AI-augmented careers
            </li>
          </ul>
        </section>

        <section>
          <h3 className="font-heading text-2xl mb-4 text-consulting-navy">2026 Deliverables</h3>
          <div className="grid gap-4">
            <div className="bg-white border border-consulting-border p-6">
              <h4 className="font-heading text-lg mb-2">Q1: Impact Assessment</h4>
              <p className="text-sm text-consulting-slate font-body">Survey and analysis of AI use in USYD coursework</p>
            </div>
            <div className="bg-white border border-consulting-border p-6">
              <h4 className="font-heading text-lg mb-2">Q2: Best Practice Review</h4>
              <p className="text-sm text-consulting-slate font-body">International comparison of AI assessment policies</p>
            </div>
            <div className="bg-white border border-consulting-border p-6">
              <h4 className="font-heading text-lg mb-2">Q3-Q4: Governance Framework</h4>
              <p className="text-sm text-consulting-slate font-body">Comprehensive AI policy recommendations for USYD</p>
            </div>
          </div>
        </section>
      </div>
    </InitiativeLayout>
  );
}
