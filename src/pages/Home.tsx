import { Link } from "react-router-dom";

import { categories, type Category } from "@/data/data";
import {
  gridCardCaption,
  gridCardImage,
  gridCardLink,
  gridCardOverlay,
  homeCategoryGrid,
  homePageRoot,
  homePageTitle,
} from "@/styles/selectors";

function Home() {
  return (
    <div className={homePageRoot}>
      <h1 className={homePageTitle}>Categories</h1>
      <ul className={homeCategoryGrid}>
        {categories.map((category: Category) => (
          <li key={category.id}>
            <Link className={gridCardLink} to={`/category/${category.name}`}>
              <span className={gridCardCaption}>{category.name}</span>
              <img className={gridCardImage} src={category.img} alt={category.name} />
              <div className={gridCardOverlay} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
