import React, { useState } from "react";

import RightIcon from "../assets/right-arrow.png";
import { IContent, IaccordionItems } from "../data/accordion";
interface AccordionProps {
  title: string;
  content?: string[];
  id: number;
  documents: IaccordionItems[];
  contents: IContent[];
  setDocuments: React.Dispatch<React.SetStateAction<IaccordionItems[]>>;
  setSelectedDocuments: React.Dispatch<React.SetStateAction<any>>;
}

interface Icontent {
  title: string;
  content: IContent;
  id: number;
}

export const Accordion: React.FC<AccordionProps> = ({
  documents,
  title,
  contents,
  id,
  setDocuments,
  setSelectedDocuments,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleToggle = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  const contentHandler = ({ title, content, id }: Icontent) => {
    console.log({ title, content, id });

    const parentIndex = documents.findIndex((el) => el.id === id);
    let selectedDocuments = [];

    if (parentIndex) {
      const contents = documents[parentIndex]?.contents;
      const findContentIndex = contents.findIndex((el) => el.id === content.id);

      const newContents = contents.filter((el) => el.id !== content.id);

      selectedDocuments.push({
        id: findContentIndex,
        content: contents[findContentIndex].contentDescription,
        parentId: id,
      });

      const tempDocuments = [...documents];
      tempDocuments[parentIndex].contents = newContents;

      setDocuments(tempDocuments);
      setSelectedDocuments((prev: any) => [
        ...prev,
        {
          id: contents[findContentIndex].id,
          content: contents[findContentIndex].contentDescription,
          parentId: id,
        },
      ]);
    }
  };

  return (
    <details className="group">
      <summary
        className={`flex justify-between items-center font-medium cursor-pointer list-none p-5 ${
          isExpanded ? "bg-[#E5E7EB]" : "bg-[#F9FAFB] border border-[#E5E7EB] "
        }`}
        onClick={handleToggle}
      >
        <span
          style={{
            fontSize: "16px",
            lineHeight: "16px",
          }}
          className={`${
            isExpanded ? "text-[#111928]" : "text-[#4B5563]"
          } text-base font-medium`}
        >
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
            width="12"
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>

      <div
        className="group-open:animate-fadeIn w-full flex flex-col gap-2.5 p-2 bg-[#FFFFFF]"
        style={{
          borderRadius: "0px 1px 0px 1px",
        }}
      >
        {contents?.length ? (
          contents?.map((el: IContent) => (
            <div
              className="flex gap-2 rounded p-2 items-center justify-between bg-white"
              key={el.id}
            >
              <span
                className="text-sm font-medium text-[#111928]"
                style={{
                  lineHeight: "14px",
                }}
              >
                {el.contentDescription}
              </span>
              <button
                className="border border-[#E5E7EB] rounded p-1"
                onClick={() => contentHandler({ id, title, content: el })}
              >
                <img src={RightIcon} alt="leftIcon" className="h-4 w-4" />
              </button>
            </div>
          ))
        ) : (
          <div className="flex gap-2 rounded justify-between bg-white text-gray-400 p-3">
            No content{" "}
          </div>
        )}
      </div>
    </details>
  );
};
