// import Button from "../ui/Button";
import Logo from "./Logo";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="h-[80px] z-50 w-full flex items-center justify-between px-16 bg-white sticky top-0 drop-shadow-md">
      <div className="">
        <Logo />
      </div>
      <div className="w-2/5 flex justify-evenly items-center">
        <NavItem section="solution">Solutions</NavItem>
        <NavItem section="howitworks">How It Works</NavItem>
        <NavItem section="benefits">Why Choose Us</NavItem>
        <NavItem section="aboutus">About Us</NavItem>
        <NavItem section="contact">Contact</NavItem>
      </div>
    </nav>
  );
};

export default Navbar;
