import { PropsWithChildren } from "react";

interface TabTypes extends PropsWithChildren {
  label: "links" | "profile details";
  isActive: boolean;
}

const Tab = ({ label, isActive, children }: TabTypes) => {
  return (
    <button
      aria-label={label}
      className={`px-7 py-3 rounded-lg group font-bold inline-flex justify-center items-center flex-row-reverse gap-2 hover:text-purple ${
        isActive ? "bg-purpleLight text-purple" : "text-grey"
      }`}
    >
      <span className="capitalize hidden group-hover:text-purple lgMob:block">{label}</span>
      <span>{children}</span>
    </button>
  );
};

export default Tab;
