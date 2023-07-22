import { ReactElement, createContext, CSSProperties } from "react";
import useProduct from "../hooks/useProduct";
import {
  ProductContextProps,
  Product,
  onChangeArgs,
} from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export interface Props {
  children?: ReactElement | ReactElement[];
  className?: string;
  product: Product;
  style?: CSSProperties;
  values?: number;
  onChange?: (args: onChangeArgs) => void;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

function ProductCard({
  children,
  className,
  product,
  style,
  values,
  onChange,
}: Props) {
  const { quantity, increaseBy } = useProduct({ product, onChange, values });

  return (
    <Provider
      value={{
        quantity,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
}

export default ProductCard;

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;
