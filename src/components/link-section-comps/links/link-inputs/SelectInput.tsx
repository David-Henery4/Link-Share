import { ChevIcon } from "@/components/icons";
import linkOptions from "@/local-data/linkOptions";
import { SelectInputProps } from "@/types/types";

const SelectInput = ({
  activePlatform,
  handleSetActivePlatform,
}: SelectInputProps) => {
  return (
    <div className="relative w-full mt-1 flex flex-col">

      <label htmlFor="platform">Platform</label>
      <div className="group relative w-full">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
          {<activePlatform.icon />}
        </span>
        <p className="absolute left-11 top-1/2 -translate-y-1/2 pointer-events-none">
          {activePlatform.label}
        </p>
        <input
          className="w-full z-10 px-4 py-3 rounded-lg border border-border hover:cursor-pointer group-hover:border-purple"
          id="platform"
          name="platform"
          type="text"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <ChevIcon />
        </span>
      </div>

      {/* Dropdown Options */}
      <div className="absolute h-[200%] overflow-auto top-[110%] left-0 z-10 w-full px-4 rounded-lg border border-border bg-white">
        {linkOptions.map((option) => {
          return (
            <div
              className="group flex justify-start items-center py-3 gap-3 border-b border-border hover:cursor-pointer fill-purple"
              key={option?.id}
              onClick={() => handleSetActivePlatform(option)}
            >
              {option && <option.icon />}
              <p className="group-hover:text-purple">{option?.label}</p>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default SelectInput;
