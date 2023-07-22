import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  values?: number;
}

const useProduct = ({ product, onChange, values = 0 }: useProductArgs) => {
  const [quantity, setQuantity] = useState<number>(values);

  const isControlled = useRef(!!onChange).current;

  useEffect(() => {
    setQuantity(values);
  }, [values]);

  const increaseBy = (value: number) => {
    if (isControlled && onChange) {
      return onChange({ quantity: value, product });
    }

    const newValue = Math.max(quantity + value, 0);
    setQuantity(newValue);
    onChange && onChange({ quantity: newValue, product });
  };

  return { quantity, increaseBy };
};

export default useProduct;
