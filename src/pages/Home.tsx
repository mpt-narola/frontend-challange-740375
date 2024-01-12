import { Accordion } from "../components/Accordion";
import SearchUI from "../components/SearchUI";
import { SelectWithSearch } from "../components/SelectWithSearch";
import ToggleSwitch from "../components/ToggleSwitch";
import { accordionItems } from "../data/accordion";
import { filterDropDownMenuItems } from "../data/dropdown";

const Home = () => {
  return (
    <div className="flex h-screen w-screen gap-6 flex-wrap bg-[#D1D5DB] p-4">
      <div className="bg-white flex-1  border-[#D1D5DB] p-4 flex flex-col gap-3 rounded-lg ">
        <p className="text-base font-medium text-[#111928]">
          Available Documents
        </p>
        <div className=" flex flex-col gap-3 w-full h-full">
          <div className="flex flex-col gap-3">
            <SearchUI />
            <p className="text-sm font-medium text-[#111928] text-left">
              Filter by:
            </p>
            <div className="grid grid-rows-2 grid-flow-col gap-3">
              {filterDropDownMenuItems.map((el, i) => (
                <div className="">
                  <SelectWithSearch
                    title={el.title}
                    options={el.items}
                    key={i}
                  />
                </div>
              ))}
            </div>
            <div
              className="flex justify-between"
              style={{
                padding: "8px 6px ",
              }}>
              <p className="text-sm font-medium text-[#111928] my-auto p">
                53 Available Documents
              </p>
              <ToggleSwitch />
            </div>
          </div>
          <div className="flex-grow ">
            {accordionItems.map((item, i) => (
              <div className="flex flex-col">
                <Accordion title={item?.title} content={item.content} key={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white flex-1 border-solid border-[#D1D5DB] p-4 flex flex-col gap-3 rounded-lg ">
        <p className="text-base font-medium text-[#111928]">
          Available Documents
        </p>
      </div>
    </div>
  );
};

export default Home;
