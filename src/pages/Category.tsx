import type { ChangeEvent } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/data";
import {
  categoryFilterBlock,
  categoryFilterLabel,
  categoryProductGrid,
  formControl,
  headingPageCenter,
  layoutPageSection,
} from "@/styles/selectors";

export function Category() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [searchParams, setSearchParams] = useSearchParams();

  const maxPriceRaw = searchParams.get("maxPrice");
  const maxPrice =
    maxPriceRaw !== null && maxPriceRaw !== "" ? Number(maxPriceRaw) : Infinity;

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
    <section className={layoutPageSection}>
      <h1 className={headingPageCenter}>Category {categoryId}</h1>

      <div className={categoryFilterBlock}>
        <label htmlFor="maxPrice" className={categoryFilterLabel}>
          Max Price
        </label>
        <input
          id="maxPrice"
          type="number"
          placeholder="Enter max price"
          value={searchParams.get("maxPrice") ?? ""}
          onChange={handlePriceChange}
          className={formControl}
        />
      </div>

      <div className={categoryProductGrid}>
        {currentCategoryArray.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
