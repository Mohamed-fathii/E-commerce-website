import { AiFillDelete } from "react-icons/ai";
import { removeArrayData } from "utils/firebaseFunction";
function CartCard({ product }) {
  const { name, price, imageURL, description } = product;

  const handleDelete = async () => {
    await removeArrayData(product);
  };
  return (
    <div className="cart-card">
      <img className="cart-card__image" src={imageURL} alt={name}></img>
      <span className="cart-card__title">{name}</span>
      <span className="cart-card__description">{description}</span>
      <span className="cart-card__price">$ {price}</span>
      <AiFillDelete className="cart-card__icon" onClick={handleDelete} />
    </div>
  );
}
export default CartCard;
