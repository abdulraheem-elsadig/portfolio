import { useEffect, useState } from "react";
export default function useScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY);
      console.log(window.scrollY);
    });
  }, []);
  //   The hook return
  return scrollPosition;
}
