import { MouseEventHandler, useEffect, useRef, useState } from "react";

export const useMarker = () => {
  const navItemContainerRef = useRef<HTMLDivElement>(null);
  const [markerStyle, setMarkerStyle] = useState({
    left: 0,
    width: 0,
  });

  const [currentHref, setCurrentHref] = useState<string>(location.href);

  const handleClickCurrentHref: MouseEventHandler<HTMLAnchorElement> = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const htmlAnchorElement = e.currentTarget as HTMLAnchorElement;
    setCurrentHref(htmlAnchorElement.href);
  };

  const updateMarker = (href: string) => {
    if (navItemContainerRef.current) {
      let left: number = 0;
      let width: number = 0;

      for (const element of Array.from(navItemContainerRef.current.children)) {
        const htmlAnchorElement = (element as HTMLDivElement)
          .firstChild as HTMLAnchorElement;
        if (htmlAnchorElement.href === href) {
          width = (element as HTMLDivElement).offsetWidth;
          break;
        } else {
          left += (element as HTMLDivElement).offsetWidth;
        }
      }

      setMarkerStyle({
        left: left,
        width: width,
      });
    }
  };

  useEffect(() => {
    updateMarker(currentHref);
  }, [currentHref]);

  return { navItemContainerRef, markerStyle, handleClickCurrentHref };
};
