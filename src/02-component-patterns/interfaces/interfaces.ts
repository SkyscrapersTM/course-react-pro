export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  quantity: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface onChangeArgs {
  product: Product;
  quantity: number;
}
