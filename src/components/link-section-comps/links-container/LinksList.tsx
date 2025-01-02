import LinkContainer from "./links/LinkContainer";
import { LinksInfo } from "@/types/types";
import { ActivePlatformInfo } from "@/types/types";

interface LinksListProps {
  currentLinksList: LinksInfo[];
  updateLinkValues: (
    linkId: string,
    valueName: "platform" | "url",
    newValue: string | ActivePlatformInfo
  ) => void;
  handleRemoveLink: (id: string) => void;
}

const LinksList = ({
  currentLinksList,
  handleRemoveLink,
  updateLinkValues
}: LinksListProps) => {
  return (
    <div className="w-full my-6 flex flex-col justify-center items-center gap-6">
      {currentLinksList.map((linkInformation, i) => {
        return (
          <LinkContainer
            key={i}
            handleRemoveLink={handleRemoveLink}
            updateLinkValues={updateLinkValues}
            linkIndex={i}
            {...linkInformation}
          />
        );
      })}
    </div>
  );
};

export default LinksList;
