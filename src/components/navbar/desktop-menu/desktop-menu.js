import { Link, useLocation } from "react-router-dom";
import { isStoreSelected, isCarteSelected } from "utils/checkSelection";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { mainContext } from "utils/context";
import { signOutUser } from "utils/firebaseFunction";
import { TailSpin } from "react-loader-spinner";
function DesktopMenu() {
  const { user, loading, cartProducts } = useContext(mainContext);
  const Loc = useLocation();
  const navigate = useNavigate();
  const signOut = async () => {
    await signOutUser();
  };
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
      <div className="navbar__right-side__item">
        <Link
          to="/cart"
          className={`navbar__right-side__item navbar__right-side__item--cart-count
            ${
              isCarteSelected(Loc.pathname) &&
              "navbar__right-side__item--selected"
            }`}
        >
          Cart
        </Link>
        {user && cartProducts && (
          <div
            className="navbar__right-side__cart-count"
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
          Login
        </button>
      )}
    </>
  );
}
export default DesktopMenu;
