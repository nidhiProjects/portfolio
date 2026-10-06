import React from "react";
import Image from "next/image";

const PROJECTS = [
  {
    title: "GJEPC Blood Donation Campaign",
    subtitle: "Government campaign platform for donor registration and pledges",
    image: "/blood-donation.png",
    alt: "GJEPC Blood Donation Campaign",
    points: [
      "Built a campaign platform for blood donation registration, pledge participation and video wishes using React.js.",
      "Delivered a responsive user app and admin dashboard to manage participants, videos and campaign activity in real time.",
      "Implemented role-based access control, status tracking and notifications for secure workflow management.",
    ],
  },
  {
    title: "GJEPC Jewel Pages",
    subtitle: "Jewellery industry directory with admin and provider panels",
    image: "/jewel-pages.png",
    alt: "GJEPC Jewel Pages",
    points: [
      "Developed the complete frontend, admin panel and service provider panel for the platform.",
      "Integrated TalkJS for customer support, inbox management and communication between users, providers and administrators.",
      "Built responsive, scalable modules with secure data handling to improve workflow efficiency and engagement.",
    ],
  },
  {
    title: "AI PhotoBooth",
    subtitle: "Themed AI portraits generated with face-swapping at events",
    image: "/ai-photobooth.png",
    alt: "AI PhotoBooth",
    points: [
      "Built an AI-powered photo booth that generates themed portraits using face-swapping technology.",
      "Developed an automated image processing workflow for real-time photo generation and event sharing.",
    ],
  },
  {
    title: "DJXLABS CMS Website",
    subtitle: "Template-driven CMS dashboard with SSR frontend",
    image: "/djxlabs-cms.png",
    alt: "DJXLABS CMS Website",
    points: [
      "Built a CMS dashboard with React, TypeScript, Tiptap and Firebase for content editing and website management.",
      "Developed a Vike-based SSR frontend that renders dynamic, template-driven pages from dashboard content.",
      "Implemented a dynamic website generation system converting static HTML/CSS/JS templates into reusable, database-driven pages.",
    ],
  },
  {
    title: "SSHEQ",
    subtitle: "Safety, Security, Health, Environment & Quality platform",
    image: "/Sheq.png",
    alt: "SSHEQ Website",
    fit: "object-contain",
    points: [
      "Developed risk assessment, training, stakeholder and contractor management modules using React.js.",
      "Built health promotion modules to improve employee safety awareness and occupational health compliance.",
      "Collaborated with a 4-member team to deliver scalable, reusable frontend components.",
    ],
  },
  {
    title: "Complaints Management System",
    subtitle: "Complaint tracking and resolution dashboard for organizations",
    image: "/forafera.webp",
    alt: "Complaints Management System",
    points: [
      "Developed a system to log, track and resolve organizational complaints using React.js and Bootstrap.",
      "Enabled Super Admins to assign multiple contractors/users, with role-based access control.",
      "Integrated REST APIs with status tracking and notifications to streamline complaint workflows.",
    ],
  },
  {
    title: "B2X Ecommerce",
    subtitle: "Ecommerce admin panel with analytics",
    image: "/b2x-ecommerce.png",
    alt: "B2X Ecommerce admin panel",
    points: [
      "Developed a responsive ecommerce admin panel using React.js, Bootstrap and Chart.js.",
      "Integrated REST APIs for dynamic data management, order tracking and dispute resolution.",
      "Improved store management with interactive dashboards and data visualization.",
    ],
  },
];

const SProjects = () => {
  return (
    <section
      className="bg-white py-2 rounded-xl px-6"
      id="projects"
      style={{ scrollMarginTop: "100px" }}
    >
      <h2 className="text-dark text-2xl md:text-4xl font-bold uppercase text-center mb-3 py-4">
        Works & Projects
      </h2>
      <p className="text-sm text-center">
        Check out my frontend projects, carefully built with attention to
        detail, performance, and user experience—each one a reflection of my
        passion for clean and efficient web development.
      </p>
      <div className="grid py-4 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="border border-offWhite pb-4 rounded-b-xl shadow-md"
          >
            <div className="h-[150px] sm:h-[200px] md:h-[250px] w-full overflow-hidden relative">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={`h-full w-full ${project.fit ?? "object-cover"} hover:scale-105 transition-all duration-500`}
              />
            </div>
            <div className="px-4 py-2">
              <h3 className="text-black font-bold uppercase text-2xl mb-2">
                {project.title}
              </h3>
              <p className="text-sm mb-2">{project.subtitle}</p>
              <ul className="list-disc list-inside gap-4 flex flex-col">
                {project.points.map((point) => (
                  <li key={point} className="text-xs">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SProjects;
