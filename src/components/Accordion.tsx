import React from "react";

import RightArrowIcon from "../assets/right-arrow.png";

interface AccordionProps {
  title: string;
  content?: string[];
}

export const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  return (
    <div className="">
      <details className="group my-5">
        <summary className="flex justify-between items-center font-medium cursor-pointer list-none ">
          <span
            style={{
              fontSize: "16px",
              lineHeight: "16px",
            }}>
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
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="12">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>

        <div
          className=" group-open:animate-fadeIn w-full border"
          style={{
            border: "0px, 1px, 0px, 1px solid #E5E7EB",
          }}>
          {content?.map((content, i) => (
            <div
              className="flex gap-2.5 rounded justify-between p-2"
              key={i}
              style={{
                padding: "8px 6px 8px 6px",
              }}>
              <span>{content}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                height={13}
                width={13}>
                <title>Artboard-34</title>
                <g id="Right-2" data-name="Right">
                  <polygon
                    points="17.5 5.999 16.793 6.706 22.086 11.999 1 11.999 1 12.999 22.086 12.999 16.792 18.294 17.499 19.001 24 12.499 17.5 5.999"
                    style={{ fill: "#232326" }}
                  />
                </g>
              </svg>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
};
