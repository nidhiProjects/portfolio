import React from "react";
import { FaBookmark } from "react-icons/fa";

const SExperience = () => {
  return (
    <section className="grid gap-4 grid-cols-1 md:grid-cols-2">
      <div className="bg-white py-6 rounded-xl px-6">
        <h2 className="text-dark text-3xl font-bold mb-4">Experience</h2>
        <div className="grid gap-4">
          <div className="flex gap-2 border border-offWhite rounded-xl py-4 px-1">
            <span className="p-2 bg-offWhite inline-block h-max rounded-md">
              <FaBookmark className="text-primary" />
            </span>
            <div className="flex flex-col gap-2">
              <p className="text-sm">June 2024 - Present</p>
              <h3 className="text-dark font-medium">
                Sartia Global
              </h3>
              <p>React Developer</p>
              <p className="text-xs">Noida</p>
            </div>
          </div>
          <div className="flex gap-2 border border-offWhite rounded-xl py-4 px-1">
            <span className="p-2 bg-offWhite inline-block h-max rounded-md">
              <FaBookmark className="text-primary" />
            </span>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Sep 2023 - May 2024</p>
              <h3 className="text-dark font-medium">Sidpik</h3>
              <p>Frontend Developer</p>
              <p className="text-xs">Remote</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-6 rounded-xl px-6">
        <h2 className="text-dark text-3xl font-bold mb-4">Education</h2>
        <div className="grid gap-4">
          <div className="flex gap-2 border border-offWhite rounded-xl py-4 px-1">
            <span className="p-2 bg-offWhite inline-block h-max rounded-md">
              <FaBookmark className="text-primary" />
            </span>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Aug 2024 - Pursuing</p>
              <h3 className="text-dark font-medium">
                Andhra University
              </h3>
              <p>MCA</p>
              <p className="text-xs">Corespondance</p>
            </div>
          </div>
          <div className="flex gap-2 border border-offWhite rounded-xl py-4 px-1">
            <span className="p-2 bg-offWhite inline-block h-max rounded-md">
              <FaBookmark className="text-primary" />
            </span>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Aug 2020 - Sep 2023</p>
              <h3 className="text-dark font-medium">
                Sol Delhi University
              </h3>
              <p>B.Com (honours)</p>
              <p className="text-xs">New Delhi</p>
            </div>
          </div>
          <div className="flex gap-2 border border-offWhite rounded-xl py-4 px-1">
            <span className="p-2 bg-offWhite inline-block h-max rounded-md">
              <FaBookmark className="text-primary" />
            </span>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Apr 2018 - Apr 2020</p>
              <h3 className="text-dark font-medium">
                Angels Public Sr. Sec. School
              </h3>
              <p className="text-xs">
                Class 12<sup>th</sup> - 75%{" "}
              </p>
              <p className="text-xs">
                Class 10<sup>th</sup> - 76%
              </p>
              <p className="text-xs">Faridabad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SExperience;
