"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinksTabIcon, ProfileDetailsHeaderIcon } from "../icons";

interface TabTypes {
  label: "links" | "profile details";
  path: "/" | "/profile-details";
}

const Tab = ({ label, path }: TabTypes) => {
  const pathname = usePathname()
  //
  return (
    <Link
      href={path}
      aria-label={label}
      className={`px-7 py-3 rounded-lg group font-bold inline-flex justify-center items-center flex-row-reverse gap-2 hover:text-purple ${
        pathname === path ? "bg-purpleLight text-purple" : "text-grey"
      }`}
    >
      <span className="capitalize hidden group-hover:text-purple lgMob:block">
        {label}
      </span>
      <span>
        {path === "/profile-details" ? (
          <ProfileDetailsHeaderIcon
            currentColour={`${pathname === path ? "fill-purple" : "fill-grey"}`}
          />
        ) : (
          <LinksTabIcon
            currentColour={`${pathname === path ? "fill-purple" : "fill-grey"}`}
          />
        )}
      </span>
    </Link>
  );
};

export default Tab;
