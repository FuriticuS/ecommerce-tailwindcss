import { Link, useLocation } from "react-router-dom";

import { categories } from "../data/data";

function Home() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="py-10">
      <h1 className="mb-8 text-3xl font-bold text-center">Categories</h1>
      <ul className="grid gap-4 px-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <li key={category.id}>
            <Link className="relative flex flex-col items-center justify-center w-fit group" to={`/category/${category.name}`}>
              <span className="absolute font-semibold text-white text-xl z-10 group-hover:text-red-500 group-hover:animate-wiggle transition duration-1300">{category.name}</span>
              <img className="rounded-md w-5xl" src={category.img} alt={category.name} />
              <div className="absolute bg-linear-to-b from-avocado-600 via-black to-avocado-500 inset-0 opacity-20 rounded-md"></div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
