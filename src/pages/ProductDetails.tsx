import { useParams } from "react-router-dom";
import { products, type Product } from "../data/data";

export default function ProductDetails() {
  const { productId } = useParams<{ productId: string }>();

  const product: Product | undefined =
    productId == null
      ? undefined
      : products.find((p: Product) => p.id === parseInt(productId, 10));

  return (
    <div className="px-6 py-10">
      {product ? (
        <>
          <h1 className="text-3xl font-bold text-center mb-6">Product Details</h1>
          <div className="flex flex-col items-center rounded-md bg-white p-6">
            <h2 className="mb-2 text-xl font-semibold">{product.name}</h2>
            <p className="text-lg text-gray-700">Price: {product.price}$</p>
            <img className="w-80 h-80 mb-4 rounded-md" src={product.img} alt={product.name} />
          </div>
        </>
      ) : (
        <p className="text-xl text-red-500 font-bold text-center">Not Found</p>
      )}
    </div>
  );
}
