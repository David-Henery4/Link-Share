import { NavLogo, LinksTab, ProfileTab } from "./nav-comps"
import Button from "./reusable/Button"

const Navbar = () => {
  return (
    <nav className="px-6 py-4">
      <NavLogo/>
      <LinksTab/>
      <ProfileTab/>
      <Button buttonType="secondary">
        
      </Button>
    </nav>
  )
}

export default Navbar