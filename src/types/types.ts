
export interface LinksInfo {
  id: string;
  platform: string;
  url: string;
}


export interface ActivePlatformInfo {
  id: number;
  label: string;
  value: string;
  icon: () => JSX.Element;
  color: string;
}

export interface SelectInputProps {
  activePlatform: ActivePlatformInfo;
  handleSetActivePlatform: (activeOption: ActivePlatformInfo) => void;
}
