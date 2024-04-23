import { useEffect, useState } from "react";

function useElementScrollPosition(elementRef) {
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleScroll() {
    if (!elementRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = elementRef.current;
    const height = scrollHeight - clientHeight;
    const scrolled = (scrollTop / height) * 100;

    setScrollPosition(scrolled);
  }

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    element.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [elementRef]);

  return scrollPosition;
}

export default useElementScrollPosition;
