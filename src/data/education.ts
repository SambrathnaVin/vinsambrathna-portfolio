import { EducationItem, VolunteeringItem } from "@/types";

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    institution: "CamTech University",
    degree: "Bachelor of Software Engineering (Year 4)",
    period: "01 March 2023 – Present",
    location: "Phnom Penh, Cambodia",
    distinction: "Awarded 75% Academic Merit Scholarship",
    details: [
      "Rigorous software engineering curriculum encompassing data structures, algorithms, system architecture, object-oriented design, machine learning foundations, and modern web engineering.",
      "Recognized with a 75% Academic Merit distinction for academic achievement.",
    ],
  },
  {
    institution: "Institute of Foreign Languages (IFL), RUPP",
    degree: "Bachelor's Degree in English",
    period: "01 March 2022 – Present",
    location: "Phnom Penh, Cambodia",
    details: [
      "Advanced professional English communication, technical discourse, cross-cultural collaboration, and academic research.",
      "Dual-degree pursuit running concurrently with Software Engineering studies.",
    ],
  },
  {
    institution: "Hun Sen Koh Thom High School",
    degree: "High School Diploma",
    period: "2018 – 2022",
    location: "Kandal Province, Cambodia",
    details: ["Secondary education foundation with emphasis on mathematics and sciences."],
  },
];

export const VOLUNTEERING_ITEMS: VolunteeringItem[] = [
  {
    title: "High School Major Counseling Volunteer",
    organization: "CamTech University at Oudong & Tep Pranam High Schools",
    date: "23 August 2024 – 24 August 2024",
    role: "Academic Representative & AI Demonstrator",
    activities: [
      "Represented CamTech University at Oudong and Tep Pranam high schools, providing academic and career guidance to prospective students.",
      "Advised high school students on emerging opportunities in the Cambodian technology market, Artificial Intelligence, and Educational Technology.",
      "Facilitated hands-on demonstrations of AI training programs and interactive tech workshops.",
    ],
  },
  {
    title: "Rodwell Learning Center Student Visit",
    organization: "CamTech University & Rodwell Learning Center",
    date: "14 September 2024",
    role: "Master of Ceremonies (MC) & Tech Counseling Volunteer",
    activities: [
      "Served as the Master of Ceremonies (MC) for a student delegation visit event, coordinating the schedule and session flow.",
      "Educated visiting students on university software engineering degree programs and provided specialized counsel on technology majors.",
    ],
  },
];
