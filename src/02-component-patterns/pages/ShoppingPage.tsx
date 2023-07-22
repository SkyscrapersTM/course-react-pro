import { useState } from "react";
import { Product } from "../interfaces/interfaces";
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";

interface ProductInCart extends Product {
  quantity: number;
}

interface ShoppingCart {
  [key: string]: ProductInCart;
}

const products = [
  { id: "1", title: "Coffe Mug - Card", img: "./coffee-mug.png" },
  { id: "2", title: "Coffe Mug - Meme", img: "./coffee-mug2.png" },
];

function ShoppingPage() {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({});

  const onProductQuantityChange = ({
    product,
    quantity,
  }: {
    product: Product;
    quantity: number;
  }) => {
    setShoppingCart((prev) => {
      const productInCart: ProductInCart = prev[product.id] || {
        ...product,
        quantity: 0,
      };

      if (Math.max(productInCart.quantity + quantity, 0) > 0) {
        productInCart.quantity += quantity;
        return { ...prev, [product.id]: productInCart };
      }

      // Borrar el producto
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [product.id]: Todelete, ...rest } = prev;
      return rest;
    });
  };

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
            values={shoppingCart[product.id]?.quantity || 0}
            onChange={onProductQuantityChange}
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
            product={product}
            style={{ width: "100px" }}
            key={key}
            values={product.quantity}
            onChange={onProductQuantityChange}
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
