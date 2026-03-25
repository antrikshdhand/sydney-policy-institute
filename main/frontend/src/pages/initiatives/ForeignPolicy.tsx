import InitiativeLayout from "@/components/InitiativeLayout";

export default function ForeignPolicy() {
  return (
    <InitiativeLayout
      title="Foreign Policy"
      focus="Indo-Pacific, Soft Power"
      researchQuestion="The Pacific Step-Up: Is Australia doing enough?"
    >
      <div className="space-y-8">
        <section>
          <h3 className="font-heading text-2xl mb-4 text-consulting-navy">Overview</h3>
          <p className="text-consulting-slate font-body leading-relaxed">
            The Foreign Policy pillar examines Australia's strategic engagement in the Indo-Pacific region, 
            with particular focus on the Pacific Step-Up initiative and soft power projection. Our research 
            evaluates the effectiveness of current diplomatic, development, and defense investments, assessing 
            whether Australia's regional strategy matches stated ambitions and regional needs.
          </p>
        </section>

        <section>
          <h3 className="font-heading text-2xl mb-4 text-consulting-navy">Key Focus Areas</h3>
          <ul className="space-y-3">
            <li className="border-l-2 border-consulting-accent pl-4">
              <strong className="font-body">Pacific Engagement:</strong> Analyzing aid, infrastructure, and diplomatic presence
            </li>
            <li className="border-l-2 border-consulting-accent pl-4">
              <strong className="font-body">Strategic Competition:</strong> Assessing great power dynamics in the region
            </li>
            <li className="border-l-2 border-consulting-accent pl-4">
              <strong className="font-body">Soft Power:</strong> Cultural diplomacy, education, and people-to-people ties
            </li>
          </ul>
        </section>

        <section>
          <h3 className="font-heading text-2xl mb-4 text-consulting-navy">2026 Deliverables</h3>
          <div className="grid gap-4">
            <div className="bg-white border border-consulting-border p-6">
              <h4 className="font-heading text-lg mb-2">Q1: Investment Audit</h4>
              <p className="text-sm text-consulting-slate font-body">Comprehensive review of Pacific Step-Up commitments and delivery</p>
            </div>
            <div className="bg-white border border-consulting-border p-6">
              <h4 className="font-heading text-lg mb-2">Q2: Regional Perception Study</h4>
              <p className="text-sm text-consulting-slate font-body">Surveying Pacific perspectives on Australian engagement</p>
            </div>
            <div className="bg-white border border-consulting-border p-6">
              <h4 className="font-heading text-lg mb-2">Q3-Q4: Strategic Recommendations</h4>
              <p className="text-sm text-consulting-slate font-body">Policy blueprint for enhanced regional partnership</p>
            </div>
          </div>
        </section>
      </div>
    </InitiativeLayout>
  );
}
