import { Link, useLocation } from "react-router-dom";
import { isStoreSelected, isCarteSelected } from "utils/checkSelection";

function DesktopMenu() {
  const Loc = useLocation();
  return (
    <>
      <Link
        to="/"
        className={`navbar__right-side__item
            ${
              isStoreSelected(Loc.pathname) &&
              "navbar__right-side__item--selected"
            }`}
      >
        Store
      </Link>
      <Link
        to="/cart"
        className={`navbar__right-side__item
            ${
              isCarteSelected(Loc.pathname) &&
              "navbar__right-side__item--selected"
            }`}
      >
        Cart
      </Link>
      <button className="navbar__right-side__btn primary">Login</button>
    </>
  );
}
export default DesktopMenu;
