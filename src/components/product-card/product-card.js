import { useContext } from "react";
import { MainContext } from "utils/context";
import { useNavigate } from "react-router-dom";
import { deleteProduct, updateArrayData } from "utils/firebaseFunction";
import { AiFillDelete } from "react-icons/ai";
function ProductCard({ product }) {
  const { id, imageURL, title, wasPrice, description, price } = product;
  const { user, isAdmin } = useContext(MainContext);
  const navigate = useNavigate();
  const addProduct = async () => {
    await updateArrayData(product);
  };
  const redirectToLogin = () => {
    navigate("/authenticate");
  };

  const handleDelete = async () => {
    await deleteProduct(id);
  };
  return (
    <div className="product-card">
      <div className="product-card__content">
        <img
          className="product-card__content__image"
          alt={title}
          src={imageURL}
        ></img>
        <span className="product-card__content__title"> {title}</span>
        <div className="product-card__content__price">
          {price}{" "}
          {wasPrice && (
            <span className="product-card__content__price__slash">
              {wasPrice}
            </span>
          )}
        </div>
        <span className={`${!isAdmin && "product-card__content__description"}`}>
          {description}
        </span>
        {isAdmin && (
          <AiFillDelete
            className="product-card__content__remove"
            onClick={handleDelete}
          />
        )}
      </div>
      <button
        className="product-card__btn"
        onClick={user ? addProduct : redirectToLogin}
      >
        Add to cart
      </button>
    </div>
  );
}
export default ProductCard;
