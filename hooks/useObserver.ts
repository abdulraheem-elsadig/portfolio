import { useEffect, useState } from "react";

export default function useObserver(element: any) {
  const [isVisible, setIsVisible] = useState(false);
  const options = {
    root: null,
    rootMargin: "5%",
    threshold: 0,
  };
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    }, options);
    observer.observe(element.current);
    // return () => {
    //   if (currentTarget) observer.unobserve(currentTarget);
    // };
  }, [element, options]);

  return isVisible;
}
