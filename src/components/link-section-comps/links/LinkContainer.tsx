"use client";
import DragAndDropIcon from "../../icons/DragAndDropIcon";
import Button from "../../reusable/Button";
import linkOptions from "@/local-data/linkOptions";
import { useState } from "react";

interface ActivePlatformInfo {
  id: number;
  label: string;
  value: string;
  icon: () => JSX.Element;
  color: string;
};

const LinkContainer = () => {
  const [activePlatform,setActivePlatform] = useState(linkOptions[0])
  //
  const handleSetActivePlatform = (activeOption: ActivePlatformInfo) => setActivePlatform(activeOption)
  //
  return (
    <div className="w-full p-5 rounded-xl bg-lightGrey">

      <div className="w-full flex justify-between items-center">
        <div className="flex justify-start items-center gap-2 font-bold text-grey">
          <div className="hover:cursor-pointer">
            <DragAndDropIcon />
          </div>
          <h2>Link #1</h2>
        </div>

        <div>
          <Button
            buttonType="third"
            className="font-medium p-0 hover:text-darkGrey"
          >
            Remove
          </Button>
        </div>
      </div>

      <form className="w-full mt-3">

        <div className="relative w-full mt-1 flex flex-col">
          <label htmlFor="platform">Platform</label>
          <input className="px-4 py-3 rounded-lg border border-border" id="platform" name="platform" type="text" />
          <div className="absolute top-[110%] left-0 z-10 w-full px-4 rounded-lg border border-border bg-white">
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

        <div className="">
          <label htmlFor="link">Link</label>
          <input type="text" name="link" id="link" />
        </div>

      </form>

    </div>
  );
};

export default LinkContainer;
