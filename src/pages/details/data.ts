import { AccordionData } from "./models";
import { KeyValuePair } from "../../models";

// Education data
export const education: AccordionData[] = [
  {
    id: "eduvos",
    image: "/src/assets/eduvos.png",
    label: "Eduvos | Jan 2021 - Jul 2024",
    description: "BSc Software Engineering",
    content:
      "I completed my BSc in Software Engineering at Eduvos...",
  },
  {
    id: "highschool",
    image: "/src/assets/bellvillehighschool.png",
    label: "Bellville HighSchool | 2014 - 2019",
    description: "HighSchool Student",
    content:
      "I completed my high school education at Bellville High School...",
  },
];

// Work experience data
export const experience: AccordionData[] = [
  {
    id: "nebula",
    image: "/src/assets/1nebula.png",
    label: "1Nebula | Jan 2025 - Present",
    description: "Software Development Intern",
    content: "As a Software Development Intern at 1Nebula...",
  },
  {
    id: "oceanbasket",
    image: "/src/assets/oceanbasket.png",
    label: "Ocean Basket | Nov 2022 - Jan 2025",
    description: "Waiter",
    content: "In my role as a Waiter at Ocean Basket Holdings...",
  },
  {
    id: "rocomamas",
    image: "/src/assets/rocomamas.png",
    label: "RocoMamas | Dec 2021 - Oct 2022",
    description: "Waiter",
    content: "As a Waiter at RocoMamas...",
  },
];

// Personal info table data
export const info: KeyValuePair[] = [
  { key: "Full Name:", value: "Meyer Hendrik Nigrini" },
  { key: "Date of Birth:", value: "29 August 2001" },
  { key: "Phone:", value: "074 444 5533" },
  { key: "Email:", value: "MeyerNigrini25@gmail.com" },
  { key: "Address:", value: "123 Maple Street, Springfield, IL, 62701" },
  { key: "Nationality:", value: "South African" },
  { key: "Occupation:", value: "Software Developer" },
  { key: "Company:", value: "1Nebula" },
  { key: "Marital Status:", value: "Single" },
  { key: "Languages:", value: "Afrikaans, English" },
];

// Technical skills table data
export const skills: KeyValuePair[] = [
  { key: "Programming Languages:", value: "JavaScript, TypeScript, Python, Java." },
  { key: "Frontend Development:", value: "HTML, CSS, React, Tailwind CSS." },
  { key: "Backend Development:", value: "Node.js, Django, RESTful APIs." },
  { key: "Database Management:", value: "MySQL, PostgreSQL, MongoDB." },
];
