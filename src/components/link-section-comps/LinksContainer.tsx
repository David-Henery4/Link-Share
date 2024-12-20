"use client";
import Button from "../reusable/Button";
import LinksList from "./links-container/LinksList";
import EmptyContainer from "./links-container/EmptyContainer";
import { useState, useEffect } from "react";
import linkOptions from "@/local-data/linkOptions";
import { v4 as uuidv4 } from "uuid";
import { LinksInfo } from "@/types/types";

const LinksContainer = () => {
  const [currentLinksList, setCurrentLinksList] = useState<LinksInfo[]>([]); // Temp till database
  const [defaultPlatformIndex, setDefaultPlatformIndex] = useState(0);
  //
  const handleAddNewLink = () => {
    //
    setCurrentLinksList((prevValues) => {
      return [
        ...prevValues,
        {
          id: uuidv4(),
          platform: linkOptions[defaultPlatformIndex].value,
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
  const updateUrlString = (linkId: string, newUrlValue: string) => {
    setCurrentLinksList((prevValues) => {
      const newArray = prevValues.map((linkItem) => {
        if (linkId === linkItem.id) {
          return {
            ...linkItem,
            url: newUrlValue,
          };
        }
        return linkItem;
      });

      return newArray;
    });
  };
  //
  useEffect(() => {
    setDefaultPlatformIndex(() =>
      currentLinksList.length >= 1 ? currentLinksList.length : 0
    );
  }, [currentLinksList]);
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
          defaultPlatformIndex={defaultPlatformIndex}
          updateUrlString={updateUrlString}
        />
      )}
      {/* <EmptyContainer/> */}
      {/* <LinksList /> */}
    </div>
  );
};

export default LinksContainer;
