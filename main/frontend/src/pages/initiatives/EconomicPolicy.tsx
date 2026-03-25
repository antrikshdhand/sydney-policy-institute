import InitiativeLayout from "@/components/InitiativeLayout";

export default function EconomicPolicy() {
  return (
    <InitiativeLayout
      title="Economic Policy"
      focus="Inflation, Cost of Living"
      researchQuestion="The Student CPI: What is the real inflation rate for young Australians?"
    >
      <div className="space-y-8">
        <section>
          <h3 className="font-heading text-2xl mb-4 text-consulting-navy">Overview</h3>
          <p className="text-consulting-slate font-body leading-relaxed">
            The Economic Policy pillar examines the lived economic realities facing young Australians, 
            particularly students and early-career professionals. Our flagship research initiative develops 
            a Student-specific Consumer Price Index (CPI) to accurately measure inflation's impact on 
            student budgets, capturing costs that traditional measures often miss.
          </p>
        </section>

        <section>
          <h3 className="font-heading text-2xl mb-4 text-consulting-navy">Key Focus Areas</h3>
          <ul className="space-y-3">
            <li className="border-l-2 border-consulting-accent pl-4">
              <strong className="font-body">Inflation Analysis:</strong> Tracking price changes in student-relevant categories
            </li>
            <li className="border-l-2 border-consulting-accent pl-4">
              <strong className="font-body">Cost of Living:</strong> Housing, food, transport, and education expenses
            </li>
            <li className="border-l-2 border-consulting-accent pl-4">
              <strong className="font-body">Tax Policy:</strong> Youth income tax, HECS indexation, and equity implications
            </li>
          </ul>
        </section>

        <section>
          <h3 className="font-heading text-2xl mb-4 text-consulting-navy">2026 Deliverables</h3>
          <div className="grid gap-4">
            <div className="bg-white border border-consulting-border p-6">
              <h4 className="font-heading text-lg mb-2">Q1: Research Foundation</h4>
              <p className="text-sm text-consulting-slate font-body">Methodology development and data collection framework</p>
            </div>
            <div className="bg-white border border-consulting-border p-6">
              <h4 className="font-heading text-lg mb-2">Q2: Pilot Study</h4>
              <p className="text-sm text-consulting-slate font-body">Initial Student CPI calculation and validation</p>
            </div>
            <div className="bg-white border border-consulting-border p-6">
              <h4 className="font-heading text-lg mb-2">Q3-Q4: Publication & Advocacy</h4>
              <p className="text-sm text-consulting-slate font-body">Flagship report release and policy engagement</p>
            </div>
          </div>
        </section>
      </div>
    </InitiativeLayout>
  );
}
