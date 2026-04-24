import { Link, useParams, useSearchParams } from "react-router-dom";
import type { ChangeEvent } from "react";
import { products, type Product } from "../data/data";

function Category() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [searchParams, setSearchParams] = useSearchParams();

  const maxPrice: number = searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : Infinity;

  const currentCategoryArray: Product[] = products.filter(
    (product: Product) => product.categoryId === categoryId && product.price <= maxPrice
  );

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value: string = e.target.value;
    setSearchParams(value ? { maxPrice: value } : {});
  }

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Category {categoryId}</h1>
      <div className="mb-4">
        <label
          className="text-sm text-gray-500 peer-placeholder-shown:text-gray-400 peer-focus:text-blue-500"
          htmlFor="maxPrice"
        >
          Max Price{" "}
        </label>
        <input
          type="number"
          id="maxPrice"
          placeholder="Enter max price"
          value={searchParams.get("maxPrice") || ""}
          onChange={handleChange}
          className="peer p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <ul className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {currentCategoryArray.map((product: Product) => (
          <li key={product.id}>
            <Link
              className="relative flex flex-col items-center justify-center w-fit group"
              to={`/product/${product.id}`}
            >
              <span className="absolute font-semibold text-white text-center text-xl z-10 group-hover:text-red-500 group-hover:animate-wiggle transition duration-1300">
                {product.name}
                <br />
                {product.price}$
              </span>
              <img className="rounded-md w-5xl" src={product.img} alt={product.name} />
              <div className="absolute bg-linear-to-b from-avocado-600 via-black to-avocado-500 inset-0 opacity-20 rounded-md"></div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
