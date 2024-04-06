import { Link } from "react-scroll";

function NavItem({ section, children }) {
  return (
    <span className="text-base hover:text-blue-900 cursor-pointer hover:scale-[1.02] transition-all duration-300">
      <Link to={section} spy={true} smooth={true} duration={500}>
        {children}
      </Link>
    </span>
  );
}

export default NavItem;
