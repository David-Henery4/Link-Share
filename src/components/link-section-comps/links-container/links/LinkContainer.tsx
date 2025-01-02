"use client";
import DragAndDropIcon from "../../../icons/DragAndDropIcon";
import Button from "../../../reusable/Button";
import { ActivePlatformInfo } from "@/types/types";
import { SelectInput, UrlInput } from "./link-inputs";
import { LinksInfo } from "@/types/types";

interface LinkContainerProps extends LinksInfo {
  linkIndex: number;
  updateLinkValues: (
    linkId: string,
    valueName: "platform" | "url",
    newValue: string | ActivePlatformInfo
  ) => void;
  handleRemoveLink: (id: string) => void;
}

const LinkContainer = ({
  linkIndex,
  url,
  id,
  platform,
  handleRemoveLink,
  updateLinkValues,
}: LinkContainerProps) => {
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
            onClick={() => {
              handleRemoveLink(id);
            }}
          >
            Remove
          </Button>
        </div>
      </div>

      <form className="w-full mt-3">
        <SelectInput
          activePlatform={platform}
          updateLinkValues={updateLinkValues}
          id={id}
        />

        <UrlInput
          updateLinkValues={updateLinkValues}
          url={url}
          id={id}
        />
      </form>
    </div>
  );
};

export default LinkContainer;
