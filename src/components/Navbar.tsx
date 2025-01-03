import { NavLogo, Tab } from "./nav-comps";
import Button from "./reusable/Button";
import { PreviewEyeIcon } from "./icons";

const Navbar = () => {
  return (
    <nav className="w-full mediumTablet:p-6">
      {/* Shadow is temp for development */}
      <div className="w-full px-6 py-4 flex justify-between items-center bg-white mediumTablet:rounded-xl mediumTablet:shadow-2xl">
        <NavLogo />
        <div className="w-full flex justify-center items-center">
          <Tab label="links" path="/" />
          <Tab label="profile details" path="/profile-details" />
        </div>
        <Button buttonType="secondary" size="secondarySmall" isLink={true} href="/preview">
          <PreviewEyeIcon />
          <span className="text-base font-semibold hidden tablet:block">
            Preview
          </span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
