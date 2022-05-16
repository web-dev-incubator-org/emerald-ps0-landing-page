import Logo from '../components/Logo';
import ThemeSwitcher from '../components/ThemeSwitcher';

const NavbarSection = () => {
    return (
        <nav className="navbar">
            <Logo />
            <ThemeSwitcher />
        </nav>
    );
};

export default NavbarSection;