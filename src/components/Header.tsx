import { Link } from "react-router-dom";

import { headerLogo, headerNavList, headerRoot } from "@/styles/selectors";
import { NavLinkMenu } from "@/ui/NavLinkMenu";

export function Header() {
  return (
    <header className={headerRoot}>
      <Link to={"/"}>
        <img className={headerLogo} src="/logo.svg" alt="logo" />
      </Link>
      <nav>
        <ul className={headerNavList}>
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
