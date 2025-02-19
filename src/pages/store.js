import ProductCard from "components/product-card/product-card";
import { products } from "utils/products";
import { useContext } from "react";
import { mainContext } from "utils/context";
function Store() {
  const { user, loading, filterdProducts } = useContext(mainContext);
  return loading ? (
    <div className="cart__message">Loading...</div>
  ) : user ? (
    <div className="store">
      {filterdProducts.map((product, index) => {
        return <ProductCard product={product} key={index} />;
      })}
    </div>
  ) : (
    <div className="store">
      {products.map((product, index) => {
        return <ProductCard product={product} key={index} />;
      })}
    </div>
  );
}
export default Store;
