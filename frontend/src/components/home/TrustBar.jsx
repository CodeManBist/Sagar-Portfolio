import React from "react";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import Section from "../common/Section";

const icons = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <FaAws />, name: "AWS" },
];

const TrustBar = () => {
  return (
    <Section className="py-10 md:py-12 bg-[#0d0d0d] border-y border-white/10 overflow-hidden">

        <div className="relative overflow-hidden">

          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none" />

          {/* 🔥 Track */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">

            {[...icons, ...icons].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 md:gap-3 px-3 md:px-5 text-white/60 hover:text-white transition whitespace-nowrap"
              >
                {/* Icon */}
                <span className="text-lg md:text-xl flex items-center">
                  {item.icon}
                </span>

                {/* Text (hide on small screens 🔥) */}
                <span className="hidden sm:block text-xs md:text-sm leading-none">
                  {item.name}
                </span>
              </div>
            ))}

          </div>

        </div>

    </Section>
  );
};

export default TrustBar;