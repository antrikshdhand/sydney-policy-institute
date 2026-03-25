import type { ReactNode } from "react";
import { NavLink } from "@/components/NavLink";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface InitiativeLayoutProps {
  title: string;
  focus: string;
  researchQuestion: string;
  children?: ReactNode;
}

const initiatives = [
  { name: "Economic Policy", path: "/initiatives/economic-policy" },
  { name: "Media & Democracy", path: "/initiatives/media-democracy" },
  { name: "Housing & Cities", path: "/initiatives/housing-cities" },
  { name: "AI & Tech", path: "/initiatives/ai-tech" },
  { name: "Foreign Policy", path: "/initiatives/foreign-policy" },
];

export default function InitiativeLayout({ title, focus, researchQuestion, children }: InitiativeLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-consulting-navy text-white min-h-screen pt-24 px-6 sticky top-0 hidden lg:block">
          <h3 className="font-heading text-sm uppercase tracking-wider mb-6 text-consulting-slate">Project 2026</h3>
          <nav className="space-y-2">
            {initiatives.map((initiative) => (
              <NavLink
                key={initiative.path}
                to={initiative.path}
                className="block py-2 px-3 rounded text-sm transition-colors hover:bg-consulting-accent"
                activeClassName="bg-consulting-accent font-medium"
              >
                {initiative.name}
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Banner */}
          <div className="bg-consulting-navy text-white py-20 px-8 border-b-4 border-consulting-accent">
            <div className="max-w-4xl mx-auto">
              <p className="text-consulting-slate text-sm uppercase tracking-wider mb-4 font-body">Project 2026 Initiative</p>
              <h1 className="font-heading text-5xl mb-4">{title}</h1>
              <p className="text-xl text-consulting-light font-body">{focus}</p>
            </div>
          </div>

          {/* Content Area */}
          <div className="max-w-4xl mx-auto px-8 py-12">
            {/* Flagship Research Question Callout */}
            <div className="bg-consulting-light border-l-4 border-consulting-accent p-8 mb-12">
              <p className="text-xs uppercase tracking-wider text-consulting-slate mb-2 font-body">Flagship Research Question</p>
              <h2 className="font-heading text-2xl text-consulting-navy">{researchQuestion}</h2>
            </div>

            {children}

            {/* Team Section */}
            <div className="mt-16">
              <h2 className="font-heading text-3xl mb-8 text-consulting-navy">Meet the Squad</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Policy Director */}
                <div className="border border-consulting-border p-6 bg-white">
                  <div className="w-16 h-16 bg-consulting-accent rounded-full mb-4"></div>
                  <h3 className="font-heading text-lg mb-1">Policy Director</h3>
                  <p className="text-sm text-consulting-slate font-body">Leading research & strategy</p>
                </div>

                {/* Analysts */}
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="border border-consulting-border p-6 bg-white">
                    <div className="w-16 h-16 bg-consulting-slate/20 rounded-full mb-4"></div>
                    <h3 className="font-heading text-lg mb-1">Policy Analyst {num}</h3>
                    <p className="text-sm text-consulting-slate font-body">Research & analysis</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
