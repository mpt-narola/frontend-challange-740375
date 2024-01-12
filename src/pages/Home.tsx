import SearchUI from "../components/SearchUI";
import { SelectWithSearch } from "../components/SelectWithSearch";
import { filterDropDownMenuItems } from "../data/dropdown";

const Home = () => {
  return (
    <div className="flex h-screen w-screen gap-6 flex-wrap bg-[#D1D5DB] p-4">
      <div className="bg-white flex-1 border border-solid border-[#D1D5DB] p-4 flex flex-col gap-3 rounded-lg ">
        <p className="text-base font-medium text-[#111928]">
          Available Documents
        </p>
        <div className="border border-solid flex flex-col gap-3 w-full h-full">
          <div className="flex flex-col gap-3">
            <SearchUI />
            <p className="text-sm font-medium text-[#111928] text-left">
              Filter by:
            </p>
            <div className="flex w-full border ">
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
