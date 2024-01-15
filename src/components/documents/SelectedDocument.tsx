import React from "react";
import SearchUI from "../SearchUI";
import leftArraow from "../../assets/icons8-left-arrow-48.png";
import { selectedDocuments } from "../../data/selectedDocuments";
import completeIcon from "../../assets/complete.svg";
import closeIcon from "../../assets/close.svg";

const SelectedDocument: React.FC = () => {
  return (
    <>
      <p className="text-base font-medium text-[#111928]">Selected Documents</p>

      <div className="flex flex-col gap-3 w-full h-full">
        <div className="">
          <SearchUI />
        </div>
        {selectedDocuments.length ? (
          <div className=" h-auto p-2 border rounded-lg border-green-500 flex flex-col gap-2">
            {selectedDocuments.map((el, i) => (
              <div
                key={i}
                className=" h-10 py-2 px-1.5 rounded text-sm leading-3 align-middle"
              >
                <div className="font-medium flex flex-row justify-between">
                  <div className="flex flex-row gap-2">
                    <span>
                      <img
                        src={completeIcon}
                        alt="completeIcon"
                        className="h-4 w-4"
                      />
                    </span>
                    <span>{el}</span>
                  </div>
                  <span className="p-1">
                    <img
                      src={closeIcon}
                      alt="close"
                      className="border border-solid rounded"
                      style={{
                        width: "13px",
                        height: "12.5px",
                      }}
                    />
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="border border-solid h-full p-10  bg-gray-200 rounded-lg ">
            <div className="flex justify-center items-center min-h-16 min-w-fit">
              <img src={leftArraow} alt="left-arrow" className="h-full" />
            </div>
            <div className="font-semibold text-xs leading-5 text-center text-gray-500">
              <p>
                Select documents from the left panel to have employees review
                them and provide a signature acknowledging review
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SelectedDocument;
