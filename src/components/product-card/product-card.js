function ProductCard({ product }) {
  const { name, description, price, wasPrice, imageURL } = product;
  return (
    <div className="product-card">
      <div className="product-card__content">
        <img
          className="product-card__content__image"
          src={imageURL}
          alt={name}
        ></img>
        <span className="product-card__content__title">{name}</span>
        <div className="product-card__content__price">
          {price}
          <span className="product-card__content__price__slash">
            {wasPrice}
          </span>
        </div>
        <span className="product-card__content__description">
          {description}
        </span>
      </div>
      <button className="product-card__btn "> Add to cart</button>
    </div>
  );
}
export default ProductCard;
