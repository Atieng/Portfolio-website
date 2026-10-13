import type { TimelineItem } from "@/lib/types";

// ─────────────────────────────────────────────────────────────────────────────
//  Your personal details. Everything starting with "TODO:" shows on the site as
//  a dashed placeholder until you replace it.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Ivy Atieng",
  url: "https://portfolio-website.vercel.app", // TODO: change to your real Vercel address once it's live

  email: "atiengivylisa@gmail.com",
  github: "https://github.com/Atieng",
  linkedin: "https://www.linkedin.com/in/ivy-atieng-a5a52b350/",
  otherLinks: [
    { label: "X", href: "https://x.com/vylee_ai" },
  ] as { label: string; href: string }[],

  /** The PDF lives in /public. Set to null to hide resume links. */
  resume: "/resume.pdf" as string | null,

  /** The photo lives in /public. Describe it in alt for screen readers. */
  photo: { src: "/me.jpg", alt: "Portrait of Ivy Atieng" } as { src: string; alt: string } | null,

  /** Shown on the "Let's connect" card. Edit to say what you're actually looking for. */
  availability: "Open to internships, collaborations and conversations about data or design.",

  hero: {
    lead: "I explore data, build digital experiences, and bring ideas to life through design.",
    body: "I'm a Computer Science student who enjoys projects that touch all three: finding something worth knowing in a dataset, building a tool around it, and making that tool clear to use. I'm still early in this, and most of what's here started as a way to learn something properly.",
    currently: "TODO: One line on what you're learning or building now",
  },

  about: {
    intro: [
      "I'm studying Computer Science at JKUAT, and I've found that the problems I enjoy most sit between data, software and design. A model is more useful when someone can actually use it, and an app is better when it's built around real evidence.",
      "TODO: A sentence or two in your own words about how you got into tech, and what keeps you interested.",
    ],
    approach: [
      "TODO: How you tackle a new problem or learn a new tool. For example: do you start with the data, sketch first, or build a rough prototype?",
    ],
    exploring: [
      "TODO: What you're exploring next, e.g. a tool, a topic, or the kind of role you're looking for.",
    ],
  },

  education: [
    {
      when: "2024 to 2028",
      title: "BSc Computer Science",
      place: "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
    },
  ] as TimelineItem[],

  training: [
    {
      when: "Feb to Oct 2024",
      title: "Data Science short course: Data Analytics and Visualisation",
      place: "Moringa School",
    },
  ] as TimelineItem[],

  // Newest first. Add the year to each "when" when you can.
  community: [
    { when: "Sep 2025 to Jul 2026", title: "Data Science Tech Lead", place: "GDG on Campus JKUAT" },
    { when: "TODO: Year", title: "Scrum Master", place: "TODO: Name of the capstone project" },
    { when: "2025", title: "Volunteer Judge, Kenya Tech Challenge 2025", place: "The Tech Interactive", note: "Evaluated student innovations in the Drop & Dash STEM challenge." },
  ] as TimelineItem[],

  // Only keep what you can genuinely explain or demonstrate in an interview.
  skills: [
    { group: "Programming and data", items: ["Python", "SQL", "C++"] },
    {
      group: "Data science and ML",
      items: ["pandas", "NumPy", "scikit-learn", "TensorFlow/Keras", "Exploratory data analysis", "Feature engineering", "Model evaluation"],
    },
    { group: "Visualisation and analytics", items: ["Matplotlib", "Seaborn", "Plotly", "Tableau", "Power BI", "Excel"] },
    { group: "Web development", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"] },
    { group: "Data engineering", items: ["Spark", "PySpark", "Hadoop", "Hive"] },
    { group: "Tools and workflow", items: ["Git", "GitHub", "Jupyter", "Canva", "Figma"] },
  ],
};
