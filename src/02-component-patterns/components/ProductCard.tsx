import { CSSProperties, ReactElement, createContext } from "react";
import {
  Product,
  ProductContextProps,
  onChangeArgs,
} from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";
import useProduct from "../hooks/useProduct";

export interface Props {
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  product: Product;
  onChange: ({ quantity, product }: onChangeArgs) => void;
  values: number;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

function ProductCard({
  children,
  className,
  style,
  product,
  values,
  onChange,
}: Props) {
  const { increaseBy } = useProduct({ onChange, product });
  return (
    <Provider
      value={{
        product,
        increaseBy,
        values,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
}

export default ProductCard;
