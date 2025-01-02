export interface ActivePlatformInfo {
  id: number;
  label: string;
  value: string;
  icon: () => JSX.Element;
  color: string;
}

export interface LinksInfo {
  id: string;
  platform: ActivePlatformInfo;
  url: string;
}

export interface SelectInputProps {
  activePlatform: ActivePlatformInfo;
  updateLinkValues: (
    linkId: string,
    valueName: "platform" | "url",
    newValue: string | ActivePlatformInfo
  ) => void;
  id: string;
}
