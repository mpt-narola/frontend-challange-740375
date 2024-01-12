import React from "react";
import SearchUI from "../SearchUI";
import leftArraow from "../../assets/icons8-left-arrow-48.png";

const SelectedDocument: React.FC = () => {
  return (
    <>
      <p className="text-base font-medium text-[#111928]">Selected Documents</p>
      <div className="flex flex-col gap-3 w-full h-full">
        <div className="">
          <SearchUI />
        </div>
        <div className="border border-solid  h-full p-10  content-div">
          <div className="flex justify-center items-center content-arrow ">
            <img src={leftArraow} alt="left-arrow" className="h-full" />
          </div>
          <div className="content-text">
            <p>
              Select documents from the left panel to have employees review them
              and provide a signature acknowledging review
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedDocument;
