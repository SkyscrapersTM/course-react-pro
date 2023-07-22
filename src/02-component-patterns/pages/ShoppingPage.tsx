import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import useShoppingCart from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";
import { products } from "../data/products";

function ShoppingPage() {
  const { shoppingCart, onProductQuantityChange } = useShoppingCart();
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            className="custom-card"
            key={product.id}
            product={product}
            onChange={onProductQuantityChange}
            values={shoppingCart[product.id]?.quantity || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            className="custom-card"
            style={{ width: "100px" }}
            key={key}
            product={product}
            onChange={onProductQuantityChange}
            values={shoppingCart[product.id]?.quantity || 0}
          >
            <ProductImage className="custom-image" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
}

export default ShoppingPage;
