import LinkContainer from "./links/LinkContainer";
import { LinksInfo } from "@/types/types";

interface LinksListProps {
  currentLinksList: LinksInfo[];
  defaultPlatformIndex: number;
  updateUrlString: (linkId: string, newUrlValue: string) => void;
  handleRemoveLink: (id: string) => void;
}

const LinksList = ({
  currentLinksList,
  defaultPlatformIndex,
  updateUrlString,
  handleRemoveLink
}: LinksListProps) => {
  return (
    <div className="w-full my-6">
      {currentLinksList.map((linkInformation, i) => {
        return (
          <LinkContainer
            key={i}
            handleRemoveLink={handleRemoveLink}
            defaultPlatformIndex={defaultPlatformIndex}
            updateUrlString={updateUrlString}
            linkIndex={i}
            {...linkInformation}
          />
        );
      })}
    </div>
  );
};

export default LinksList;
