// featured: true puts a project first. images: files inside public/images/
export const projects = [
  {
    title: "Predicting the 2026 FIFA World Cup",
    role: "Forecasting · Poisson regression · Featured project",
    note: "Forecast made before the tournament, scored after",
    featured: true,
    body: [
      "A leak-free model that predicted every team’s total goals and the stage it would reach at the first 48-team World Cup, using only World Cup history from 1930 to 2022.",
      "My first version validated well for the wrong reason: its features used data from the tournament it was predicting. I rebuilt every feature to use only earlier tournaments and added a script that checks for leakage.",
      "It picked Brazil as champion (out in the round of 16) and ranked Spain, the winner, 5th. Predicted goals were also too flat: 255 against 308 scored.",
    ],
    results: [
      ["goals RMSE", "4.19 (5.23 for a flat forecast)"],
      ["goals corr", "0.72"],
      ["exact stage", "58% (28 of 48 teams, 77% within one round)"],
      ["stage macro F1", "0.536 (0.286 in cross-validation)"],
      ["group exits", "12 of 16 correct"],
    ],
    links: [
      { label: "live app", href: "TODO" },
      { label: "medium write-up", href: "TODO" },
      { label: "github", href: "TODO" },
    ],
    tools: "Python, pandas, scikit-learn, Streamlit, joblib",
    images: [],
  },
  {
    title: "AI and Data Science salary prediction",
    role: "Regression · CRISP-DM · Streamlit dashboard",
    note: "R² 0.764 (goal was 0.70)",
    body: [
      "Estimates what a role should pay from experience, skills, remote status, company size and industry, using 15,000 job postings. The tuned Gradient Boosting model has an average error of about $20,000.",
      "I caught a leakage bug: a feature built from the salary itself had pushed R² to 0.87. I removed it and reported the honest 0.76. The dataset looks synthetic, so real-world results would likely be lower.",
    ],
    links: [
      { label: "github", href: "https://github.com/Atieng/Global-AI-Job-Market-Intelligence-Report" },
      { label: "live demo", href: "TODO" },
    ],
    tools: "Python, pandas, scikit-learn, seaborn, Streamlit",
    images: [],
  },
  {
    title: "Sentiment analysis of the Paris Olympics 2024",
    role: "NLP · Sentiment analysis · Team project",
    note: "Team of six contributors",
    body: [
      "Scraped and cleaned tweets about the Games, then compared Logistic Regression, SVM, Random Forest, Naive Bayes, XGBoost, VADER and DistilBERT. Tuned Random Forest reached 96.6% accuracy and VADER 94.9%. The team built a Streamlit app around VADER.",
      "TODO: your part of the team’s work, and how the sentiment labels were created",
    ],
    links: [
      { label: "github", href: "https://github.com/Atieng/sentiment-analysis-2024-olympics" },
    ],
    tools: "Python, NLTK, scikit-learn, XGBoost, TensorFlow, Streamlit",
    images: [],
  },
  {
    title: "Project name",
    role: "Frontend · React · Personal project",
    note: "One short line, such as the year or the result",
    body: [
      "What it does and who it is for.",
      "What you built, and one thing you learned or fixed.",
    ],
    links: [
      { label: "live site", href: "https://..." },
      { label: "github", href: "https://github.com/Atieng/..." },
    ],
    tools: "React, TypeScript, Tailwind",
    images: [],
  },
];

export const experience = [
  {
    title: "UI/UX Designer",
    role: "Gkash",
    date: "TODO: dates",
    body: [
      "Designed the mobile experience for a financial literacy and investing app for Kenyan users, under the tagline “Learn. Invest. Grow.” I designed the sign-up and PIN-based sign-in flow, plus a lesson library that teaches saving, investing and account safety in plain language, including Saccos and Chamas.",
      "Built in Figma, from wireframes to high-fidelity screens and developer handoff. These are my original designs, and the team has since updated the product’s interface.",
    ],
    tools: "Figma",
    images: [], // e.g. ["/images/gkash-onboarding.png", "/images/gkash-lessons.png"]
  },
  {
    title: "TODO: your role",
    role: "Neu-data",
    date: "TODO: dates",
    body: [
      "TODO: what the company does and what you built (the repo suggests a multilingual site with event registration, a Supabase backend and a Gemini chatbot)",
    ],
    tools: "React, TypeScript, Tailwind, Vite, Supabase",
    images: [],
  },
];

export const community = [
  {
    title: "TODO: role",
    role: "TODO: community or organization",
    date: "TODO: dates",
    body: ["TODO: what you did, for example workshops, events, mentoring or volunteering"],
    tools: "",
    images: [],
  },
];
