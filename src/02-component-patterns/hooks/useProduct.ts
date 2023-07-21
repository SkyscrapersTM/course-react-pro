import { useState } from "react";

const useProduct = () => {
  const [counter, setCounter] = useState<number>(0);

  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
  };

  return { counter, increaseBy };
};

export default useProduct;
