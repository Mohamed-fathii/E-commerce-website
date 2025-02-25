import useWindowSize from "utils/useWindowSize";
import { Link } from "react-router-dom";
import MobileMenu from "./mobile-menu/mobile-menu";
import DesktopMenu from "./desktop-menu/desktop-menu";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";

function Navbar() {
  const { width } = useWindowSize();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const menuOpened = () => {
    setIsMenuOpened(true);
  };
  const menuClosed = () => {
    setIsMenuOpened(false);
  };
  useEffect(() => {
    if (width > 600) {
      menuClosed();
    }
  }, [width]);
  return (
    <div>
      <div className="navbar">
        <div className="navbar__left-side">
          <Link to="/">
            <div className="navbar__left-side__logo">
              <span className="navbar__left-side__logo__text">
                MOHAMED <b>ECOM</b> APP
              </span>
            </div>
          </Link>
        </div>
        <div className="navbar__right-side">
          {width < 600 ? (
            isMenuOpened ? (
              <AiOutlineClose
                className="navbar__right-side__icon"
                onClick={menuClosed}
              />
            ) : (
              <RxHamburgerMenu
                className="navbar__right-side__icon"
                onClick={menuOpened}
              />
            )
          ) : (
            <DesktopMenu />
          )}
        </div>
      </div>
      {isMenuOpened && <MobileMenu closeFn={menuClosed} />}
    </div>
  );
}
export default Navbar;
