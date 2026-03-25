import InitiativeLayout from "@/components/InitiativeLayout";

export default function MediaDemocracy() {
  return (
    <InitiativeLayout
      title="Media & Democracy"
      focus="Misinformation, Digital Literacy"
      researchQuestion="Who owns the narrative? An analysis of media diversity in NSW."
    >
      <div className="space-y-8">
        <section>
          <h3 className="font-heading text-2xl mb-4 text-consulting-navy">Overview</h3>
          <p className="text-consulting-slate font-body leading-relaxed">
            The Media & Democracy pillar investigates the state of information ecosystems, media ownership 
            concentration, and their implications for democratic discourse. Our research maps media ownership 
            structures in NSW and analyzes how concentration affects narrative diversity and public access to 
            balanced information.
          </p>
        </section>

        <section>
          <h3 className="font-heading text-2xl mb-4 text-consulting-navy">Key Focus Areas</h3>
          <ul className="space-y-3">
            <li className="border-l-2 border-consulting-accent pl-4">
              <strong className="font-body">Media Ownership:</strong> Mapping concentration and cross-ownership patterns
            </li>
            <li className="border-l-2 border-consulting-accent pl-4">
              <strong className="font-body">Misinformation:</strong> Understanding spread patterns and counter-strategies
            </li>
            <li className="border-l-2 border-consulting-accent pl-4">
              <strong className="font-body">Digital Literacy:</strong> Educational interventions and civic engagement
            </li>
          </ul>
        </section>

        <section>
          <h3 className="font-heading text-2xl mb-4 text-consulting-navy">2026 Deliverables</h3>
          <div className="grid gap-4">
            <div className="bg-white border border-consulting-border p-6">
              <h4 className="font-heading text-lg mb-2">Q1: Ownership Mapping</h4>
              <p className="text-sm text-consulting-slate font-body">Comprehensive NSW media ownership database</p>
            </div>
            <div className="bg-white border border-consulting-border p-6">
              <h4 className="font-heading text-lg mb-2">Q2: Narrative Analysis</h4>
              <p className="text-sm text-consulting-slate font-body">Coverage patterns and bias assessment</p>
            </div>
            <div className="bg-white border border-consulting-border p-6">
              <h4 className="font-heading text-lg mb-2">Q3-Q4: Policy Recommendations</h4>
              <p className="text-sm text-consulting-slate font-body">Reform proposals for media diversity and digital literacy</p>
            </div>
          </div>
        </section>
      </div>
    </InitiativeLayout>
  );
}
