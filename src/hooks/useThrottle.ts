import { useEffect, useRef, useState } from "react";

export const useThrottle = (value: any, delay: number) => {
  const time = useRef(Date.now());
  const [memory, setMemory] = useState(value);

  useEffect(() => {
    if (Date.now() >= time.current + delay) {
      setMemory(value);
      time.current = Date.now();
    } else {
      const timeout = setTimeout(() => {
        setMemory(value);
        time.current = Date.now();
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [value, delay]);

  return memory;
};