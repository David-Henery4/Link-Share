"use client";
import Button from "../reusable/Button";
import LinksList from "./links-container/LinksList";
import EmptyContainer from "./links-container/EmptyContainer";
import { useState } from "react";
import linkOptions from "@/local-data/linkOptions";
import { v4 as uuidv4 } from "uuid";
import { ActivePlatformInfo, LinksInfo } from "@/types/types";

const LinksContainer = () => {
  const [currentLinksList, setCurrentLinksList] = useState<LinksInfo[]>([]); // Temp till database
  //
  const handleAddNewLink = () => {
    //
    setCurrentLinksList((prevValues) => {
      return [
        ...prevValues,
        {
          id: uuidv4(),
          platform: linkOptions[0],
          url: "",
        },
      ];
    });
  };
  //
  const handleRemoveLink = (id: string) => {
    setCurrentLinksList((prevValues) => {
      return prevValues.filter((item) => id !== item.id)
    })
  };
  //
  const updateLinkValues = (
    linkId: string,
    valueName: "platform" | "url",
    newValue: string | ActivePlatformInfo
  ) => {
    setCurrentLinksList((prevValues) => {
      const newArray = prevValues.map((linkItem) => {
        if (linkId === linkItem.id) {
          return {
            ...linkItem,
            [valueName]: newValue,
          };
        }
        return linkItem;
      });

      return newArray;
    });
  };
  //
  return (
    <div className="w-full mt-10">
      <Button
        disabled={currentLinksList.length >= linkOptions.length}
        buttonType="secondary"
        size="large"
        onClick={handleAddNewLink}
      >
        + Add new link
      </Button>
      {currentLinksList.length <= 0 ? (
        <EmptyContainer />
      ) : (
        <LinksList
          handleRemoveLink={handleRemoveLink}
          currentLinksList={currentLinksList}
          updateLinkValues={updateLinkValues}
        />
      )}
    </div>
  );
};

export default LinksContainer;
