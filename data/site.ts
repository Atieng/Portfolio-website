import type { TimelineItem } from "@/lib/types";

// ─────────────────────────────────────────────────────────────────────────────
//  Your personal details. Everything starting with "TODO:" shows on the site as
//  a dashed placeholder until you replace it.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Ivyne Atieng",
  url: "https://your-site.vercel.app", // TODO: your Vercel address, used for social previews

  email: "", // TODO: your email. While empty, email buttons are hidden.
  github: "", // TODO: e.g. "https://github.com/your-username"
  linkedin: "", // TODO: e.g. "https://www.linkedin.com/in/your-username"
  otherLinks: [
    // { label: "Kaggle", href: "https://www.kaggle.com/your-username" },
  ] as { label: string; href: string }[],

  /** Put the PDF in /public and set this to "/resume.pdf". While null, resume links are hidden. */
  resume: null as string | null,

  /** Put a photo in /public and set this, e.g. { src: "/me.jpg", alt: "Ivyne smiling, outdoors in Nairobi" }. */
  photo: null as { src: string; alt: string } | null,

  /** Shown on the "Let's connect" card. Edit to say what you're actually looking for. */
  availability: "Open to internships, collaborations and conversations about data or design.",

  hero: {
    lead: "I explore data, build digital experiences, and bring ideas to life through design.",
    body: "I'm a Computer Science student who enjoys projects that touch all three: finding something worth knowing in a dataset, building a tool around it, and making that tool clear to use. I'm still early in this, and most of what's here started as a way to learn something properly.",
    currently: "TODO: One line on what you're learning or building now",
  },

  about: {
    intro: [
      "I'm studying Computer Science, and I've found that the problems I enjoy most sit between data, software and design. A model is more useful when someone can actually use it, and an app is better when it's built around real evidence.",
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
    { when: "TODO: Years", title: "TODO: Degree, e.g. BSc Computer Science", place: "TODO: University name" },
  ] as TimelineItem[],

  training: [
    { when: "TODO: Year", title: "TODO: Data science programme or course", place: "TODO: Provider" },
    { when: "TODO: Year", title: "TODO: Certification", place: "TODO: Issuer" },
  ] as TimelineItem[],

  community: [
    { when: "TODO: Year", title: "TODO: Role, e.g. member, organiser, volunteer", place: "TODO: Club, community or event" },
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
