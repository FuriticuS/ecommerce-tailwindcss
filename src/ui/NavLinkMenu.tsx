import type { ReactNode } from "react";
import type { To } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { navLinkMenuClassName } from "@/styles/selectors";

type NavLinkMenuProps = {
  to: To;
  children: ReactNode;
};

export function NavLinkMenu({ to, children }: NavLinkMenuProps) {
  return (
    <NavLink className={({ isActive }) => navLinkMenuClassName(isActive)} to={to}>
      {children}
    </NavLink>
  );
}
