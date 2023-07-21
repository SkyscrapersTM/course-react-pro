import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

const product = {
  id: "1",
  title: "Coffe Mug - Card",
  img: "./coffee-mug.png",
};

function ShoppingPage() {
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
        {/*
         <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="hola" />
          <ProductCard.Buttons
            counter={0}
            increaseBy={function (value: number): void {
              throw new Error("Function not implemented.");
            }}
          />
        </ProductCard> 
        */}

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title="" />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
}

export default ShoppingPage;
