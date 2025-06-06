import React from "react";
import Image from "next/image";

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
        <div className="border border-offWhite pb-4 rounded-b-xl shadow-md">
          <div className="h-[150px] sm:h-[200px] md:h-[250px] w-full overflow-hidden relative">
            <Image
              src="/sheq.png"
              alt="sheq Website"
              fill
              priority
              className="h-full w-full object-contain hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="px-4 py-2">
            <h3 className="text-black font-bold uppercase text-2xl mb-2">
              Harmony and Help
            </h3>
            <p className="text-sm mb-2">Workplace Safety & Compliance Management Platform</p>
            <ul className="list-disc list-inside gap-4 flex flex-col">
              <li className="text-xs">
              Created a full-featured complaint logging and resolution platform using React.js and Bootstrap for responsive design.
              </li>
              <li className="text-xs">
              Designed contractor and stakeholder management modules to streamline training schedules and task delegation.
              </li>
              <li className="text-xs">
              Integrated health promotion and awareness program tracking features aligned with occupational health standards.
              </li>
              <li className="text-xs">
              Implemented user-friendly UI using Bootstrap and Tailwind CSS to ensure clarity and responsiveness across devices.
              </li>
              <li className="text-xs">
              Enhanced workplace safety monitoring by incorporating training logs, documentation support, and scalable architecture.
              </li>
            </ul>
          </div>
        </div>
        <div className="border border-offWhite pb-4 rounded-b-xl shadow-md">
          <div className="h-[150px] sm:h-[200px] md:h-[250px] w-full overflow-hidden relative">
            <Image
              src="/forafera.webp"
              alt="Forafera Website"
              fill
              priority
              className="h-full w-full object-cover hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="px-4 py-2">
            <h3 className="text-black font-bold uppercase text-2xl mb-2">
              CMS
            </h3>
            <p className="text-sm mb-2">
            Complaint Tracking & Resolution Dashboard for Organizations
            </p>
            <ul className="list-disc list-inside gap-4 flex flex-col">
              <li className="text-xs">
              Created a full-featured complaint logging and resolution platform using React.js and Bootstrap for responsive design.
              </li>
              <li className="text-xs">
              Enabled role-based access control for Admins, Contractors, and Users with dynamic dashboard views and functionalities.
              </li>
              <li className="text-xs">
              Integrated APIs for real-time status updates, user notifications, and seamless complaint assignment workflows.
              </li>
              <li className="text-xs">
              Implemented complaint tracking with lifecycle management—from submission to resolution—for operational efficiency.
              </li>
              <li className="text-xs">
              Streamlined complaint resolution by allowing Super Admins to assign multiple users/contractors to tasks concurrently.
              </li>
            </ul>
          </div>
        </div>
      
        <div className="border border-offWhite pb-4 rounded-b-xl shadow-md">
          <div className="h-[150px] sm:h-[200px] md:h-[250px] w-full overflow-hidden relative">
            <Image
              src="/Jambeera.png"
              alt="Jambeera Website"
              fill
              priority
              className="h-full w-full object-contain hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="px-4 py-2">
            <h3 className="text-black font-bold uppercase text-2xl mb-2">
              JAMBEERA
            </h3>
            <p className="text-sm mb-2">All-in-One Service Marketplace for Seekers & Providers</p>
            <ul className="list-disc list-inside gap-4 flex flex-col">
              <li className="text-xs">
              Built a dynamic platform that connects service seekers and providers across various fields like IT, education, home services, and more.
              </li>
              <li className="text-xs">
              Designed with a modular React.js architecture to allow scalable onboarding of providers and seamless user navigation.
              </li>
              <li className="text-xs">
              Integrated user profiles, service listings, search filters, and booking functionality for a complete service marketplace experience.
              </li>
              <li className="text-xs">
              Implemented role-based access for seekers and providers, enabling personalized dashboards and communication channels.
              </li>
              <li className="text-xs">
              Enabled real-time service request tracking, status updates, and secure messaging to improve user engagement and trust.
              </li>
            </ul>
          </div>
        </div>
   
        <div className="border border-offWhite pb-4 rounded-b-xl shadow-md">
          <div className="h-[150px] sm:h-[200px] md:h-[250px] w-full overflow-hidden relative">
            <Image
              src="/chat.png"
              alt="chat Website"
              fill
              priority
              className="h-full w-full object-cover hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="px-4 py-2">
            <h3 className="text-black font-bold uppercase text-2xl mb-2">
              Chat App
            </h3>
            <p className="text-sm mb-2">Instant Messaging Platform Built with React & Socket.IO</p>
            <ul className="list-disc list-inside gap-4 flex flex-col">
              <li className="text-xs">
              Developed a real-time chat application using React.js on the frontend and Socket.IO.
              </li>
              <li className="text-xs">
              Integrated user authentication with secure login/signup functionality, using tools like JWT or sessions for protected routes.
              </li>
              <li className="text-xs">
              Enabled one-on-one chat with real-time message delivery, typing indicators, and user presence detection.
              </li>
              <li className="text-xs">Designed a responsive, modern UI with Tailwind CSS, optimized for both desktop and mobile use.
              </li>
              <li className="text-xs">
              Implemented chat history persistence using local storage or a backend database (e.g., MongoDB), ensuring a seamless user experience.
              </li>
            </ul>
          </div>
        </div>
        <div className="border border-offWhite pb-4 rounded-b-xl shadow-md">
          <div className="h-[150px] sm:h-[200px] md:h-[250px] w-full overflow-hidden relative">
            <Image
              src="/crm.webp"
              alt="CRM Website"
              fill
              priority
              className="h-full w-full object-cover hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="px-4 py-2">
            <h3 className="text-black font-bold uppercase text-2xl mb-2">
              Task Manager
            </h3>
            <p className="text-sm mb-2">Personal Productivity and Task Management Web App</p>
            <ul className="list-disc list-inside gap-4 flex flex-col">
              <li className="text-xs">
              Developed a task and list management system using React with local storage for fast and persistent data handling.
              </li>
              <li className="text-xs">
              Built full CRUD functionalities for tasks/lists, along with protected routing and user authentication (signup/login).
              </li>
              <li className="text-xs">
              Designed a clean and responsive interface optimized for mobile and desktop using Tailwind CSS and Bootstrap.
              </li>
              <li className="text-xs">
              Incorporated session and error management for a seamless and secure user experience.
              </li>
              <li className="text-xs">
              Improved productivity with rapid task loading (2 seconds), ensuring a smooth, snappy experience for end-users.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SProjects;
