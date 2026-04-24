import { useParams } from "react-router-dom";
import { products, type Product } from "@/data/data";
import {
  headingPageCenter,
  layoutPageSection,
  productDetailImage,
  productDetailName,
  productDetailNotFound,
  productDetailPanel,
  productDetailPrice,
} from "@/styles/selectors";

export default function ProductDetails() {
  const { productId } = useParams<{ productId: string }>();

  const product: Product | undefined =
    productId == null
      ? undefined
      : products.find((p: Product) => p.id === parseInt(productId, 10));

  return (
    <div className={layoutPageSection}>
      {product ? (
        <>
          <h1 className={headingPageCenter}>Product Details</h1>
          <div className={productDetailPanel}>
            <h2 className={productDetailName}>{product.name}</h2>
            <p className={productDetailPrice}>Price: {product.price}$</p>
            <img className={productDetailImage} src={product.img} alt={product.name} />
          </div>
        </>
      ) : (
        <p className={productDetailNotFound}>Not Found</p>
      )}
    </div>
  );
}
