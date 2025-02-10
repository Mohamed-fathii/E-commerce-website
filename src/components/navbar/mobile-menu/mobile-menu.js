import { useLocation, Link } from "react-router-dom";
import { isCarteSelected, isStoreSelected } from "utils/checkSelection";
function MobileMenu({ closeFn }) {
  const Loc = useLocation();
  return (
    <div className="mobile-menu">
      <div className="mobile-menu__content">
        <Link
          onClick={closeFn}
          to="/"
          className={`mobile-menu__content__item
                            ${
                              isStoreSelected(Loc.pathname) &&
                              "mobile-menu__content__item--selected"
                            }`}
        >
          Store
        </Link>
        <Link
          onClick={closeFn}
          to="/cart"
          className={`mobile-menu__content__item
                            ${
                              isCarteSelected(Loc.pathname) &&
                              "mobile-menu__content__item--selected"
                            }`}
        >
          Cart
        </Link>
        <button className="mobile-menu__content__btn primary">Login</button>
      </div>
    </div>
  );
}
export default MobileMenu;
