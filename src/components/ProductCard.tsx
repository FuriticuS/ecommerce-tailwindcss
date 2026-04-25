import { Link } from "react-router-dom";
import type { Product } from "@/data/data";
import {
  gridCardCaption,
  gridCardImage,
  gridCardLink,
  gridCardOverlay,
} from "@/styles/selectors";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link className={gridCardLink} to={`/product/${product.id}`}>
      <span className={gridCardCaption}>
        {product.name}
        <br />
        {product.price}$
      </span>
      <img className={gridCardImage} src={product.img} alt={product.name} />
      <div className={gridCardOverlay} />
    </Link>
  );
}
