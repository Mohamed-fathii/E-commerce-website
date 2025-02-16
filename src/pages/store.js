import ProductCard from "components/product-card/product-card";
import { products } from "utils/products";
function Store() {
  return (
    <div className="store">
      {products.map((product, index) => {
        return <ProductCard product={product} key={index} />;
      })}
    </div>
  );
}
export default Store;
