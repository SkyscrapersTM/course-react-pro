import { Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductArgs {
  onChange: (args: onChangeArgs) => void;
  product: Product;
}

const useProduct = ({ onChange, product }: useProductArgs) => {
  const increaseBy = (quantity: number) => {
    onChange({ quantity, product });
  };

  return { increaseBy };
};

export default useProduct;
