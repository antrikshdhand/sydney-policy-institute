import InitiativeLayout from "@/components/InitiativeLayout";

export default function HousingCities() {
  return (
    <InitiativeLayout
      title="Housing & Cities"
      focus="Zoning, Transport"
      researchQuestion="Locked Out: A roadmap for fixing student housing density."
    >
      <div className="space-y-8">
        <section>
          <h3 className="font-heading text-2xl mb-4 text-consulting-navy">Overview</h3>
          <p className="text-consulting-slate font-body leading-relaxed">
            The Housing & Cities pillar examines urban planning constraints that limit student housing 
            affordability and accessibility. Our research investigates zoning restrictions, transport 
            infrastructure, and density regulations that prevent adequate housing supply near university 
            campuses, proposing evidence-based reforms to unlock housing capacity.
          </p>
        </section>

        <section>
          <h3 className="font-heading text-2xl mb-4 text-consulting-navy">Key Focus Areas</h3>
          <ul className="space-y-3">
            <li className="border-l-2 border-consulting-accent pl-4">
              <strong className="font-body">Zoning Reform:</strong> Analyzing restrictive residential zoning near campuses
            </li>
            <li className="border-l-2 border-consulting-accent pl-4">
              <strong className="font-body">Transport Access:</strong> Public transit connectivity and housing location decisions
            </li>
            <li className="border-l-2 border-consulting-accent pl-4">
              <strong className="font-body">Density Solutions:</strong> Best practice examples and implementation pathways
            </li>
          </ul>
        </section>

        <section>
          <h3 className="font-heading text-2xl mb-4 text-consulting-navy">2026 Deliverables</h3>
          <div className="grid gap-4">
            <div className="bg-white border border-consulting-border p-6">
              <h4 className="font-heading text-lg mb-2">Q1: Zoning Audit</h4>
              <p className="text-sm text-consulting-slate font-body">Comprehensive mapping of residential restrictions near USYD</p>
            </div>
            <div className="bg-white border border-consulting-border p-6">
              <h4 className="font-heading text-lg mb-2">Q2: Comparative Analysis</h4>
              <p className="text-sm text-consulting-slate font-body">International case studies of successful density reforms</p>
            </div>
            <div className="bg-white border border-consulting-border p-6">
              <h4 className="font-heading text-lg mb-2">Q3-Q4: Reform Roadmap</h4>
              <p className="text-sm text-consulting-slate font-body">Phased implementation plan for increasing student housing capacity</p>
            </div>
          </div>
        </section>
      </div>
    </InitiativeLayout>
  );
}
