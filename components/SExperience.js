import React from "react";
import { FaBookmark } from "react-icons/fa";

const EXPERIENCE = [
  {
    period: "Jul 2025 - Present",
    company: "DJXLABS (Digital Jalebi)",
    role: "Frontend Developer",
    location: "India",
    points: [
      "Built scalable React.js apps for government campaigns and CMS platforms with role-based dashboards.",
      "Integrated Google APIs, Firebase, Tiptap and TalkJS for content management and communication.",
    ],
  },
  {
    period: "Jun 2024 - Jun 2025",
    company: "Sartia Global",
    role: "React.js Developer",
    location: "India",
    points: [
      "Cut page load times from 5s to under 2s (60% improvement).",
      "Built data-driven interfaces with real-time analytics using Chart.js and Google APIs.",
    ],
  },
  {
    period: "Sep 2023 - Feb 2024",
    company: "Sidpik",
    role: "Frontend Developer",
    location: "India (Remote)",
    points: [
      "Developed and maintained the frontend of a comprehensive Admin Panel and dashboard.",
      "Integrated third-party APIs for document management, time tracking and recruitment.",
    ],
  },
];

const EDUCATION = [
  {
    period: "2024 - Present",
    school: "Andhra University",
    title: "MCA",
    note: "Correspondence",
  },
  {
    period: "2020 - 2024",
    school: "SOL, Delhi University",
    title: "B.Com (Hons)",
    note: "New Delhi",
  },
  {
    period: "Jan 2023 - Jun 2023",
    school: "Dreamer Infotech",
    title: "Frontend Development Training Program",
    note: "Certification",
  },
];

const Card = ({ children }) => (
  <div className="flex gap-2 border border-offWhite rounded-xl py-4 px-1">
    <span className="p-2 bg-offWhite inline-block h-max rounded-md">
      <FaBookmark className="text-primary" />
    </span>
    <div className="flex flex-col gap-2">{children}</div>
  </div>
);

const SExperience = () => {
  return (
    <section className="grid gap-4 grid-cols-1 md:grid-cols-2">
      <div className="bg-white py-6 rounded-xl px-6">
        <h2 className="text-dark text-3xl font-bold mb-4">Experience</h2>
        <div className="grid gap-4">
          {EXPERIENCE.map((job) => (
            <Card key={job.company}>
              <p className="text-sm">{job.period}</p>
              <h3 className="text-dark font-medium">{job.company}</h3>
              <p>{job.role}</p>
              <ul className="list-disc list-inside flex flex-col gap-1">
                {job.points.map((point) => (
                  <li key={point} className="text-xs">
                    {point}
                  </li>
                ))}
              </ul>
              <p className="text-xs">{job.location}</p>
            </Card>
          ))}
        </div>
      </div>
      <div className="bg-white py-6 rounded-xl px-6">
        <h2 className="text-dark text-3xl font-bold mb-4">Education</h2>
        <div className="grid gap-4">
          {EDUCATION.map((item) => (
            <Card key={item.school}>
              <p className="text-sm">{item.period}</p>
              <h3 className="text-dark font-medium">{item.school}</h3>
              <p>{item.title}</p>
              <p className="text-xs">{item.note}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SExperience;
