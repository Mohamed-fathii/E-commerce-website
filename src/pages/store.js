import ProductCard from "components/product-card/product-card";
import { products } from "utils/products";
function Store() {
  return (
    <div className="store">
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
}
export default Store;
