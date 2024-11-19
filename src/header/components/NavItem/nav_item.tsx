import { iNavItemProps } from "./nav_item.d";

export const NavItem: React.FC<iNavItemProps> = ({
  children,
  href,
  handleClickCurrentHref,
}) => {
  return (
    <>
      <div className={`px-0 py-2 md:px-3 md:py-0`}>
        <a href={href} onClick={(e) => handleClickCurrentHref(e)}>
          {children}
        </a>
      </div>
    </>
  );
};
