import type { Project } from "@/lib/types";

// ─────────────────────────────────────────────────────────────────────────────
//  Your projects. To add one, copy an entry and change it.
//
//  - Images go in /public/projects/<slug>/ ; set cover.src to e.g. "/projects/neudata/home.png"
//  - Text starting with "TODO:" shows as a dashed placeholder on the site.
//  - A link with href "" shows as a placeholder instead of a broken link.
//  - Only write results you actually measured. Leave a TODO rather than guess.
// ─────────────────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    slug: "world-cup-2026-goals",
    title: "World Cup 2026 Goal Prediction",
    category: "data",
    featured: true,
    summary:
      "A machine learning project that predicts goals at the 2026 World Cup, built around feature engineering and careful model evaluation.",
    year: "TODO: Year",
    role: "TODO: Solo or team? What was your part?",
    status: "TODO: Completed / In progress",
    cover: {
      alt: "TODO: Describe the screenshot, e.g. a chart of predicted goals per team",
      caption: "Add a chart or notebook screenshot here",
    },
    tech: ["TODO: Tools you used, e.g. Python, pandas, scikit-learn"],
    links: [
      { label: "GitHub repository", href: "" },
      { label: "Notebook or write-up", href: "" },
    ],
    sections: [
      {
        heading: "Overview",
        body: [
          "This project uses machine learning to predict goals at the 2026 FIFA World Cup. Most of the work went into engineering useful features from match data and evaluating models honestly before making predictions.",
        ],
      },
      {
        heading: "Why I built it",
        body: ["TODO: What got you interested in this question?"],
      },
      {
        heading: "The data",
        body: [
          "TODO: Where the data came from, what time range it covers, how many matches or rows, and what cleaning it needed.",
        ],
      },
      {
        heading: "Features and approach",
        body: ["TODO: The features you engineered (e.g. recent form, ranking, home advantage) and why they made sense."],
        list: ["TODO: The models you tried"],
      },
      {
        heading: "Evaluation",
        body: [
          "TODO: How you tested the model (train/test split, cross-validation, which metric) and the actual results. Only include numbers you measured.",
        ],
        images: [{ alt: "TODO: Evaluation chart", caption: "Add a model evaluation chart" }],
      },
      {
        heading: "Predictions",
        body: ["TODO: What the model predicts, shown in a chart or table."],
      },
      {
        heading: "Limitations and what I learned",
        body: ["TODO: What the model can't account for, and what you'd do differently next time."],
      },
    ],
  },
  {
    slug: "ai-salary-prediction",
    title: "AI and Data Science Salary Prediction",
    category: "data",
    summary:
      "Predicting salaries for AI and data science roles, worked through the CRISP-DM process from business question to model comparison.",
    year: "TODO: Year",
    role: "TODO: Solo or team? What was your part?",
    status: "TODO: Completed / In progress",
    cover: {
      alt: "TODO: Describe the screenshot",
      caption: "Add a chart comparing your models",
    },
    tech: ["TODO: Tools you used"],
    links: [{ label: "GitHub repository", href: "" }],
    sections: [
      {
        heading: "Overview",
        body: [
          "A salary prediction project for AI and data science jobs. I followed CRISP-DM from start to finish and compared several regression models to see which predicted salaries best.",
        ],
      },
      {
        heading: "Business understanding",
        body: ["TODO: The question you were answering, and who would find the answer useful."],
      },
      {
        heading: "Data understanding",
        body: ["TODO: The dataset, its source, size, and what you found when you first explored it."],
        images: [{ alt: "TODO: Exploratory chart", caption: "Add an exploratory chart, e.g. salary by job title or experience" }],
      },
      {
        heading: "Data preparation",
        body: ["TODO: Cleaning, encoding and feature choices."],
      },
      {
        heading: "Modelling",
        body: ["TODO: The regression models you compared."],
        list: ["TODO: Model 1", "TODO: Model 2", "TODO: Model 3"],
      },
      {
        heading: "Evaluation",
        body: ["TODO: The metrics you used and how each model performed. Only include numbers you measured."],
      },
      {
        heading: "What I learned",
        body: ["TODO: What surprised you, and what you'd improve."],
      },
    ],
  },
  {
    slug: "neudata",
    title: "Neudata",
    category: "fullstack",
    summary: "A website for Neudata, presenting data services for small and medium-sized businesses.",
    year: "TODO: Year",
    role: "TODO: Your role, e.g. designed and built the whole site",
    status: "TODO: In development / Live",
    cover: {
      alt: "TODO: Describe the screenshot, e.g. the Neudata homepage",
      caption: "Add a screenshot of the homepage",
    },
    tech: ["TODO: Stack you used"],
    links: [
      { label: "Live site", href: "" },
      { label: "GitHub repository", href: "" },
    ],
    sections: [
      {
        heading: "Overview",
        body: [
          "Neudata is a website focused on data services for small and medium-sized businesses. It explains what Neudata offers and how a business can get started.",
        ],
      },
      {
        heading: "What it does",
        body: ["TODO: A sentence on what a visitor can do on the site. List only features that are built and working."],
        list: ["TODO: Feature 1", "TODO: Feature 2"],
      },
      {
        heading: "How it's built",
        body: ["TODO: Front end, back end, database and hosting, and how they fit together."],
      },
      {
        heading: "Decisions worth mentioning",
        body: ["TODO: One or two choices you made and why, e.g. a framework, a layout, or how you handled a form."],
      },
      {
        heading: "Screens",
        body: [],
        images: [
          { alt: "TODO: Screenshot", caption: "Add a screenshot" },
          { alt: "TODO: Screenshot", caption: "Add a mobile screenshot" },
        ],
      },
      {
        heading: "Challenges and what I learned",
        body: ["TODO: Something that was hard, and how you solved it."],
      },
    ],
  },
];

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];
