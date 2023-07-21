import { useContext, CSSProperties } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

interface Props {
  className?: string;
  style?: CSSProperties;
  title?: string;
}

export function ProductTitle({ className, style, title }: Props) {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ? title : product.title}
    </span>
  );
}

export default ProductTitle;
