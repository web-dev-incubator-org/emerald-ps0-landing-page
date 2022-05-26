import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";
import "./navbar.css";

const NavbarSection = () => {
  return (
    <nav className="navbar">
      <Logo />
      <ThemeSwitcher />
    </nav>
  );
};

export default NavbarSection;
