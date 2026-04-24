import type { To } from "react-router-dom";
import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type NavLinkMenuProps = {
  to: To;
  children: ReactNode;
};

export default function NavLinkMenu({ to, children }: NavLinkMenuProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        `font-miranda text-2xl font-semibold hover:text-black transition duration-300 ease-in-out ${
          isActive ? "text-red-500" : "text-blue-600"
        }`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}
