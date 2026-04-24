import { useParams, useSearchParams } from "react-router-dom";
import { products } from "../data/data";
import ProductCard from "../components/ProductCard.tsx";
import {ChangeEvent} from "react";

export default function Category() {
  const { categoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const maxPrice = Number(searchParams.get("maxPrice")) || Infinity;

  const currentCategoryArray = products.filter(
    (product) => product.categoryId === categoryId && product.price <= maxPrice
  );

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      setSearchParams({ maxPrice: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <section className="px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        Category {categoryId}
      </h1>

      <div className="mb-4">
        <label htmlFor="maxPrice" className="text-sm text-gray-500">
          Max Price
        </label>
        <input
          id="maxPrice"
          type="number"
          placeholder="Enter max price"
          value={searchParams.get("maxPrice") ?? ""}
          onChange={handlePriceChange}
          className="peer p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {currentCategoryArray.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
