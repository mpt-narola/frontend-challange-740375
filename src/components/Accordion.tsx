import React, { useState } from "react";

import RightIcon from "../assets/right-arrow.png";

interface AccordionProps {
  title: string;
  content?: string[];
}

export const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleToggle = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  return (
    <details
      className="group"
      style={{
        borderRadius: "8px 8px 0px 0px",
        overflow: "hidden",
      }}>
      <summary
        className={`flex justify-between items-center font-medium cursor-pointer list-none p-5 ${
          isExpanded ? "bg-[#E5E7EB]" : "bg-[#F9FAFB] border border-[#E5E7EB] "
        }`}
        onClick={handleToggle}>
        <span
          style={{
            fontSize: "16px",
            lineHeight: "16px",
          }}
          className={`${
            isExpanded ? "text-[#111928]" : "text-[#4B5563]"
          } text-base font-medium`}>
          {title}
        </span>

        <span className="transition group-open:rotate-180">
          <svg
            fill="none"
            height="12"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke-color={isExpanded ? "text-[#111928]" : "text-[#4B5563]"}
            viewBox="0 0 24 24"
            width="12">
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>

      <div
        className="group-open:animate-fadeIn w-full flex flex-col gap-2.5 p-2 bg-[#FFFFFF]"
        style={{
          borderRadius: "0px 1px 0px 1px",
        }}>
        {content?.map((content, i) => (
          <div
            className="flex gap-2 rounded justify-between bg-white"
            key={i}
            style={{
              padding: "8px 6px 8px 6px",
            }}>
            <span
              className="text-sm font-medium text-[#111928]"
              style={{
                lineHeight: "14px",
              }}>
              {content}
            </span>
            <button className="border border-[#E5E7EB] rounded p-1">
              <span>
                <img
                  src={RightIcon}
                  alt="leftIcon"
                  style={{
                    height: "13px",
                    width: "13px",
                    margin: "0.5px",
                  }}
                />
              </span>
            </button>
          </div>
        ))}
      </div>
    </details>
  );
};
