import { NavLogo, Tab } from "./nav-comps";
import Button from "./reusable/Button";
import { LinksTabIcon, PreviewEyeIcon, ProfileDetailsHeaderIcon, LogoLarge, LogoSmall } from "./icons";


const Navbar = () => {
  return (
    <nav className="px-6 py-4 w-full flex justify-between items-center bg-white">
      <NavLogo />
      <div className="w-full flex justify-center items-center">
        <Tab label="links" isActive={true}>
          <LinksTabIcon currentColour="fill-purple" />
        </Tab>
        <Tab label="profile details" isActive={false}>
          <ProfileDetailsHeaderIcon currentColour="fill-grey" />
        </Tab>
      </div>
      <Button buttonType="secondary" size="secondarySmall">
        <PreviewEyeIcon />
      </Button>
    </nav>
  );
};

export default Navbar;
