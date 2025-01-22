import { HR } from "../../../shared/HR/hr";
import { NavItemProps } from "./nav_item.d";

export const NavItem: React.FC<NavItemProps> = ({
  children,
  href,
  active,
  handleClickCurrentNavItem,
}) => {
  return (
    <>
      <div className={`px-0 py-2 md:px-3 md:py-0 flex flex-col`}>
        <a href={href} onClick={(e) => handleClickCurrentNavItem(e)}>
          {children}
        </a>
        <div>{active && <HR from="center" />}</div>
      </div>
    </>
  );
};
