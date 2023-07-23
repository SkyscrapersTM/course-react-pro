import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

import { products } from "../data/products";
import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({
          count,
          isMaxCountReached,
          maxCount,
          product,
          increaseBy,
          reset,
        }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
            <button onClick={() => increaseBy(-2)}>-2</button>
            {isMaxCountReached || (
              <button onClick={() => increaseBy(2)}>+2</button>
            )}
          </>
        )}
      </ProductCard>
    </div>
  );
};
