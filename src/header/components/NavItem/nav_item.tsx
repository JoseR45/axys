import iNavItemProps from "./nav_item.d";

export const NavItem: React.FC<iNavItemProps> = ({
  children,
  href,
  handleCurrentHref,
}) => {
  return (
    <>
      <div className={"nav-item"} style={{ padding: "0px 8px 0px 8px" }}>
        <a href={href} onClick={(e) => handleCurrentHref(e)}>
          {children}
        </a>
      </div>
    </>
  );
};
