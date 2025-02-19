import { useLocation, Link } from "react-router-dom";
import { isCarteSelected, isStoreSelected } from "utils/checkSelection";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { mainContext } from "utils/context";
import { signOutUser } from "utils/firebaseFunction";
import { TailSpin } from "react-loader-spinner";
function MobileMenu({ closeFn }) {
  const navigate = useNavigate();
  const Loc = useLocation();
  const { user, loading, cartProducts } = useContext(mainContext);
  const signOut = async () => {
    await signOutUser();
  };
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

        <div
          className="mobile-menu__content__item"
          onClick={() => navigate("/cart")}
        >
          <Link
            onClick={closeFn}
            to="/cart"
            className={`mobile-menu__content__item mobile-menu__content__item--cart-count
            ${
              isCarteSelected(Loc.pathname) &&
              "mobile-menu__content__item--selected"
            }`}
          >
            Cart
          </Link>
          {user && cartProducts && (
            <div
              className="mobile-menu__content__cart-count"
              onClick={() => navigate("/cart")}
            >
              {cartProducts.length}
            </div>
          )}
        </div>

        {loading ? (
          <TailSpin
            visible={true}
            height="35"
            width="35"
            color="#3b4142"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : user ? (
          <button onClick={signOut} className="navbar__right-side__btn primary">
            Sign Out
          </button>
        ) : (
          <button
            onClick={() => navigate("/authenticate")}
            className="navbar__right-side__btn primary"
          >
            Log in
          </button>
        )}
      </div>
    </div>
  );
}
export default MobileMenu;
