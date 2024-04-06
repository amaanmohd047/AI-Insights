import { animateScroll as scroll } from "react-scroll";

const Logo = () => {
  function handleClick(e) {
    e.preventDefault();
    scroll.scrollToTop();
  }

  return (
    <div className="h-[80px] cursor-pointer">
      <span onClick={handleClick}>
        <img
          src="/proto-logo-transparent-2.png"
          className="h-full object-contain"
          alt="Brand-Logo"
        />
      </span>
    </div>
  );
};

export default Logo;
