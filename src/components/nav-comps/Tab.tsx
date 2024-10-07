import { PropsWithChildren } from "react";

interface TabTypes extends PropsWithChildren {
  label: "links" | "profile details";
  isActive: boolean;
}

const Tab = ({ label, isActive, children }: TabTypes) => {
  return (
    <button
      aria-label={label}
      className={`px-7 py-3 rounded-lg group font-bold hover:text-purple ${
        isActive ? "bg-purpleLight text-purple" : "text-grey"
      }`}
    >
      <span className="capitalize hidden group-hover:text-purple">{label}</span>
      <span>{children}</span>
    </button>
  );
};

export default Tab;
