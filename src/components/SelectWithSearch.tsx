import React, { useState } from "react";
import SearchUI from "./SearchUI";
import { IDropDownItem } from "../data/dropdown";

interface SelectWithSearchProps {
  id: number;
  title: string;
  options?: any[];
  handleApplyFilters: (data: IselectedOption) => void;
}

export interface IselectedOption {
  parentId: number;
  option: IDropDownItem;
}

export const SelectWithSearch: React.FC<SelectWithSearchProps> = ({
  title,
  options,
  id,
  handleApplyFilters,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const filteredOptions = options?.filter((option) =>
    option?.label?.toLowerCase()?.startsWith(searchQuery?.toLowerCase())
  );

  const onSearchQueryChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(e.target.value);
  };

  const onChange = (data: IselectedOption) => {
    handleApplyFilters(data);

    //update
  };
  return (
    <>
      <div className="relative group w-full">
        <button
          id="dropdown-button"
          onClick={() => toggleDropdown()}
          className="flex justify-between w-full text-sm font-normal text-[#111928] bg-white border border-[#D1D5DB] shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-[#D1D5DB] rounded-lg"
          style={{
            padding: "8px 10px 8px 10px",
          }}
        >
          <span className="mr-2">{title}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2 -mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            height={10}
            width={10}
          >
            <path
              fill-rule="evenodd"
              d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg max-h-60 overflow-auto focus:outline-none text-[#111928]">
            <SearchUI
              value={searchQuery}
              onChangeHandler={onSearchQueryChangeHandler}
            />
            <ul className="py-1">
              {filteredOptions?.map((option) => (
                <li
                  className="cursor-pointer hover:bg-gray-100 py-2 px-4 "
                  key={option?.value}
                  onClick={() => {
                    onChange({ option, parentId: id });
                    setIsOpen(false);
                  }}
                  style={{
                    fontSize: "14px",
                    lineHeight: "21px",
                  }}
                >
                  {option?.label}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div
          id="dropdown-menu"
          className="hidden absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1"
        >
          <input
            id="search-input"
            className="block w-full px-4 py-2 border rounded-md  border-gray-300 focus:outline-none text-[#111928]"
            type="text"
            placeholder="Search items"
            autoComplete="off"
          />
        </div>
      </div>
    </>
  );
};
