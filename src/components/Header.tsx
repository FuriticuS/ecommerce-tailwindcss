import NavLinkMenu from "../ui/NavLinkMenu";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex flex-row align-baseline justify-between px-10 py-5 bg-blue-200 shadow-md">
      <Link to={"/"}>
        <img className="h-6" src="/logo.svg" alt="logo" />
      </Link>
      <nav>
        <ul className="flex flex-row space-x-2">
          <li>
            <NavLinkMenu to={"/"}>Home</NavLinkMenu>
          </li>
          <li>
            <NavLinkMenu to={"/about"}>About</NavLinkMenu>
          </li>
          <li>
            <NavLinkMenu to={"/cart"}>Cart</NavLinkMenu>
          </li>
        </ul>
      </nav>
    </header>
  );
}
