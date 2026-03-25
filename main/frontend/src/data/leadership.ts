export interface LeadershipMember {
  name: string;
  position: string;
  degree: string;
  year: string;
  bio: string;
  category: "Executive Board" | "Directors";
}

export const leadershipData: LeadershipMember[] = [
  // Executive Board
  {
    name: "Emma Richardson",
    position: "President",
    degree: "Bachelor of Arts (Politics & International Relations)",
    year: "2025",
    bio: "Emma leads SPI's strategic direction and coordinates research initiatives across all five policy areas. She works closely with faculty advisors and external partners to ensure SPI's work reaches decision-makers.",
    category: "Executive Board",
  },
  {
    name: "James Chen",
    position: "Vice President",
    degree: "Bachelor of Economics & Law",
    year: "2025",
    bio: "James oversees SPI's day-to-day operations and manages the Executive Board. He coordinates between directors to ensure seamless execution of research projects and events.",
    category: "Executive Board",
  },
  {
    name: "Sarah Ahmed",
    position: "Secretary",
    degree: "Bachelor of Social Sciences (Government)",
    year: "2026",
    bio: "Sarah manages internal communications, maintains organizational records, and coordinates board meetings. She ensures all members stay informed and aligned on SPI's initiatives.",
    category: "Executive Board",
  },
  
  // Directors
  {
    name: "Michael Torres",
    position: "Director of Policy",
    degree: "Master of Public Policy",
    year: "2025",
    bio: "Michael leads SPI's research agenda, coordinating with initiative teams to produce high-quality policy briefs and white papers. He mentors junior researchers and maintains academic standards across all publications.",
    category: "Directors",
  },
  {
    name: "Priya Sharma",
    position: "Director of Events",
    degree: "Bachelor of Arts (Sociology & Economics)",
    year: "2026",
    bio: "Priya organizes panels, workshops, and symposiums that bring together students, academics, and policymakers. She manages event logistics and ensures each event furthers SPI's mission of accessible policy dialogue.",
    category: "Directors",
  },
  {
    name: "Daniel Kim",
    position: "Director of Outreach",
    degree: "Bachelor of Commerce (Marketing)",
    year: "2026",
    bio: "Daniel builds partnerships with universities, think tanks, and government agencies. He develops outreach strategies to amplify SPI's research and expand our network within the policy community.",
    category: "Directors",
  },
  {
    name: "Olivia Martinez",
    position: "Director of Finance",
    degree: "Bachelor of Economics & Finance",
    year: "2025",
    bio: "Olivia manages SPI's budget, fundraising efforts, and financial planning. She ensures the organization has the resources needed to support research projects and events throughout the academic year.",
    category: "Directors",
  },
  {
    name: "Alex Johnson",
    position: "Director of Communications",
    degree: "Bachelor of Media & Communications",
    year: "2026",
    bio: "Alex leads SPI's digital presence, managing social media strategy, website content, and press relations. He translates complex policy into engaging content for diverse audiences.",
    category: "Directors",
  },
  {
    name: "Sophie Nguyen",
    position: "Director of Creative",
    degree: "Bachelor of Design & Political Economy",
    year: "2025",
    bio: "Sophie oversees SPI's Editorial Engine, producing infographics, comics, and video content that make policy accessible. She leads the creative team in developing innovative ways to communicate research findings.",
    category: "Directors",
  },
];

export const groupPhotoCaption = "From left to right: Emma Richardson, James Chen, Sarah Ahmed, Michael Torres, Priya Sharma, Daniel Kim, Olivia Martinez, Alex Johnson, Sophie Nguyen";
