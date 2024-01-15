import React from "react";

type SearchUiProps = {
  value?: string;
  onChangeHandler?: (val: string) => void;
};

/* Type="Default";
Size="Small";
State="Normal";
Dark mode=False;
Placeholder text="Search";
Show placeholder=true;
Show left icon=true;
Show right icon=false;
Show label=false;
Show helper text=false;
Helper Text Top=false;


width: Fill (468px)
height: Hug (37px)
gap: 8px

width: Fill (468px)
height: Hug (37px)
padding: 8px, 16px, 8px, 16px
border-radius: 8px
border: 1px
gap: 10px

//styleName: text-sm/font-normal;
font-family: Inter;
font-size: 14px;
font-weight: 400;
line-height: 21px;
letter-spacing: 0em;
text-align: left;



 */

const SearchUI: React.FC<SearchUiProps> = ({}) => {
  return (
    <>
      <div className="relative w-full p-0">
        <input
          type="text"
          className="pl-10 pr-4 py-2 border rounded-lg w-full placeholder:text-sm placeholder:font-normal"
          placeholder="Search"
          style={{
            fontSize: "14px",
            lineHeight: "21px",
          }}
        />
        <div
          className="absolute inset-y-0 left-0 pl-2 gap-2.5
                    flex items-center   
                    pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="20px"
            height="20px">
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default SearchUI;
