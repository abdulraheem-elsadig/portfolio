import { useEffect, useState } from "react";

export default function useObserver(element: any) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.7 }
    );
    observer.observe(element.current);
  }, [element]);

  return isVisible;
}
