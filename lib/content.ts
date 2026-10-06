// All site copy lives here so it's easy to update without touching layout code.

export const profile = {
  name: "Sara Jain",
  email: "sjain95@ucsc.edu",
  linkedin: "https://www.linkedin.com/in/saraxjain",
  github: "https://github.com/saraxjain",
  resume: "/sara-jain-resume.pdf",
  // Current headshot (same image the previous site used). Replace with /public/sara.jpg if you add a new one.
  photo:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-02%20at%2010.05.39%E2%80%AFAM-D17jAPIjy5xy7fxZHc3pNOxMxHVLYP.png",
}

// The hero receipt: each line is something she has actually done.
export const receipt = {
  lines: [
    { label: "Users interviewed", value: "50+" },
    { label: "Requirements written", value: "15+" },
    { label: "Engagement lift", value: "+40%" },
    { label: "Retention lift", value: "+18%" },
    { label: "Budget tracked", value: "$8–10K" },
    { label: "Students taught AI", value: "20+" },
  ],
  extra: [
    { label: "Hackathons entered", value: "2" },
    { label: "Hackathons won", value: "1" },
  ],
}

export type CaseStudy = {
  id: string
  title: string
  meta: string
  award?: string
  image: string
  imageAlt: string
  caption: string
  problem: string
  did: string
  result: { value: string; label: string }
  links?: { label: string; href: string }[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: "splitcart",
    title: "Splitcart",
    meta: "AI receipt parser · Gallo Campus Hackathon, May 2026",
    award: "1st place",
    image: "/work/splitcart.svg",
    imageAlt:
      "A grocery receipt with its line items highlighted, and an arrow to three cards showing how much each roommate owes.",
    caption: "A receipt photo goes in; each person's share comes out.",
    problem:
      "Splitting a shared grocery run means someone typing every line item into a spreadsheet and arguing over who had the cheese.",
    did: "Built a Python and Claude API pipeline that reads line items straight from a receipt photo and assigns each one to a person. We benchmarked model accuracy against API cost to pick the production model, then shipped a working Flask demo in 24 hours.",
    result: { value: "1st place", label: "at the Gallo Campus Hackathon 2026, built in 24 hours" },
    links: [{ label: "View the code", href: "https://github.com/saraxjain/splitcart" }],
  },
  {
    id: "gdg",
    title: "One home for GDG",
    meta: "Product manager · Google Developer Groups on Campus, 2026",
    image: "/work/gdg.svg",
    imageAlt:
      "Scattered chat messages asking where things are, next to a clean club website with events, resources and projects.",
    caption: "From scattered chat threads to one place to find everything.",
    problem:
      "Over 100 members were hunting through chat threads and expired links to find events, slides, and how to join a project.",
    did: "Ran user research to map where people got stuck, wrote a PRD with 15+ requirements and success metrics, and took a centralized club website from wireframes through engineering handoff to launch.",
    result: { value: "+40%", label: "member engagement, with 60% less time spent looking things up" },
  },
  {
    id: "tech4good",
    title: "Fewer dead ends at Tech4Good",
    meta: "Product research intern · Tech4Good, 2026",
    image: "/work/tech4good.svg",
    imageAlt: "Three phone screens in a flow with sticky notes quoting user frustrations.",
    caption: "Prototype flow, annotated with what users told us in interviews.",
    problem: "Users at three client sites were dropping off partway through the app, and the team didn't know why.",
    did: "Interviewed 50+ users and mapped their workflows to find 10+ friction points, then turned the findings into testable Figma prototypes. I also built the documentation system that eight designers and engineers use for handoff.",
    result: { value: "+18%", label: "user retention, with iteration cycles 30% shorter" },
  },
  {
    id: "pathwise",
    title: "Pathwise",
    meta: "Autonomous financial planning agent · Hack-a-Claw (NVIDIA), May 2026",
    image: "/work/pathwise.svg",
    imageAlt:
      "A chat where someone describes their finances and an agent replies with a plan, above a chart of debt falling and net worth rising.",
    caption: "Plain-English goals in, a month-by-month plan and scenario chart out.",
    problem: "Most people know their goals but not the month-by-month steps to get there.",
    did: "On a team of three, built an AI agent that turns a plain-English financial profile into a monthly plan, using multi-step Claude reasoning, persistent memory, and live market rates. A Flask and Chart.js dashboard shows debt payoff and net worth over time.",
    result: { value: "24 hours", label: "from idea to a working agent with live data" },
    links: [{ label: "View the code", href: "https://github.com/saraxjain/pathwise" }],
  },
]

export const otherRoles = [
  {
    title: "Kode With Klossy",
    role: "AI/ML instructor assistant",
    summary:
      "Teach LLM workflows and model pipelines to 20+ students, and use their performance data to shape the curriculum.",
    when: "2026–now",
  },
  {
    title: "Society of Asian Scientists and Engineers",
    role: "Treasurer",
    summary: "Closed the chapter's funding gap and keep an $8–10K annual budget fully accounted for.",
    when: "2025–now",
  },
  {
    title: "Alpha Kappa Psi",
    role: "Member",
    summary: "Professional business fraternity at UC Santa Cruz.",
    when: "",
  },
]

export const earlier = [
  {
    title: "Bright Minds",
    role: "Founder and program director",
    summary: "Started a program teaching coding and math to underserved students.",
    when: "2021–now",
  },
  {
    title: "Advocates for Equality Club",
    role: "President",
    summary: "Grew membership 30% and expanded service to three local community centers.",
    when: "2022–2025",
  },
  {
    title: "FDA Horner Civics Program",
    role: "Lead mentor",
    summary: "Guided students through civics projects and built lessons on government and policy.",
    when: "2023–2025",
  },
  {
    title: "Academic tutoring",
    role: "Tutor",
    summary: "Tutored 50+ K–12 students in math and reading.",
    when: "2021–2025",
  },
]

export const awards = [
  { name: "DECA Professional Selling, 1st place", year: "2024" },
  { name: "DECA ICDC qualifier", year: "2024" },
  { name: "DECA Food Marketing, 2nd place", year: "2025" },
  { name: "DECA Business Model, 3rd place", year: "2021" },
  { name: "Presidential Service Award, Bronze", year: "2022, 2023" },
]

export const skills = [
  { group: "Product", items: ["User research", "PRDs and requirements", "Process mapping", "Success metrics", "A/B testing", "Figma"] },
  { group: "AI", items: ["Claude API", "GPT-4o and Gemini", "LLM agents", "Prompt iteration", "Model evaluation"] },
  { group: "Code and data", items: ["Python and Pandas", "SQL", "JavaScript", "Flask", "Git", "Excel and Google Sheets"] },
  { group: "Languages", items: ["English", "Hindi"] },
]
