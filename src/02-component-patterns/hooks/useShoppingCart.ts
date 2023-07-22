import { useState } from "react";
import { Product } from "../interfaces/interfaces";

interface ProductInCart extends Product {
  quantity: number;
}

interface ShoppingCart {
  [key: string]: ProductInCart;
}

const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({});

  const onProductQuantityChange = ({
    product,
    quantity,
  }: {
    product: Product;
    quantity: number;
  }) => {
    setShoppingCart((prev) => {
      const cart = structuredClone(prev);
      const productInCart: ProductInCart = cart[product.id] || {
        ...product,
        quantity: 0,
      };

      if (Math.max(productInCart.quantity + quantity, 0) > 0) {
        productInCart.quantity += quantity;
        return { ...cart, [product.id]: productInCart };
      }

      // Borrar el producto
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [product.id]: Todelete, ...rest } = cart;
      return rest;
    });
  };

  return {
    shoppingCart,
    onProductQuantityChange,
  };
};

export default useShoppingCart;
