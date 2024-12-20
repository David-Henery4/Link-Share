"use client";
import DragAndDropIcon from "../../../icons/DragAndDropIcon";
import Button from "../../../reusable/Button";
import linkOptions from "@/local-data/linkOptions";
import { useState } from "react";
import { ActivePlatformInfo } from "@/types/types";
import { SelectInput, UrlInput } from "./link-inputs";
import { LinksInfo } from "@/types/types";

interface LinkContainerProps extends LinksInfo {
  defaultPlatformIndex: number;
  linkIndex: number;
  updateUrlString: (linkId: string, newUrlValue: string) => void;
  handleRemoveLink: (id: string) => void;
}

const LinkContainer = ({
  linkIndex,
  defaultPlatformIndex,
  updateUrlString,
  url,
  id,
  handleRemoveLink
}: LinkContainerProps) => {
  const [activePlatform, setActivePlatform] = useState(
    linkOptions[defaultPlatformIndex]
  );
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
          <h2>Link {`#${linkIndex + 1}`}</h2>
        </div>

        <div>
          <Button
            buttonType="third"
            className="font-medium p-0 hover:text-darkGrey"
            onClick={() => handleRemoveLink(id)}
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

        <UrlInput updateUrlString={updateUrlString} url={url} id={id} />
      </form>
    </div>
  );
};

export default LinkContainer;
