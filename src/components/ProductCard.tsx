import {Link} from "react-router-dom";
import {Product} from "../data/data.ts";

export default function ProductCard({product}: { product: Product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="relative flex flex-col items-center justify-center w-fit group"
    >
  <span
    className="absolute font-semibold text-white text-center text-xl z-10 group-hover:text-red-500 group-hover:animate-wiggle transition duration-1300">
    {product.name}
    <br/>
    {product.price}$
  </span>
      <img
        className="rounded-md w-5xl"
        src={product.img}
        alt={product.name}
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-avocado-600 via-black to-avocado-500 opacity-20 rounded-md"/>
    </Link>
  );
}