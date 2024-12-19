"use client";
import DragAndDropIcon from "../../icons/DragAndDropIcon";
import Button from "../../reusable/Button";
import linkOptions from "@/local-data/linkOptions";
import { useState } from "react";
import { ActivePlatformInfo } from "@/types/types";
import { SelectInput } from "./link-inputs";
import { LinkIcon } from "@/components/icons";

const LinkContainer = () => {
  const [activePlatform, setActivePlatform] = useState(linkOptions[0]);
  //
  const handleSetActivePlatform = (activeOption: ActivePlatformInfo) =>
    setActivePlatform(activeOption);
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

        <SelectInput
          activePlatform={activePlatform}
          handleSetActivePlatform={handleSetActivePlatform}
        />

        <div className="w-full mt-3">
          <label htmlFor="link">Link</label>
          <div className="w-full flex justify-start items-center gap-3 mt-1 px-4 py-3 rounded-lg border border-border hover:border-purple hover:shadow-basicPurple">
            <LinkIcon/>
            <input className="w-full outline-none" type="url" name="link" id="link" />
          </div>
        </div>

      </form>

    </div>
  );
};

export default LinkContainer;
