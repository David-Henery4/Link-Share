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
