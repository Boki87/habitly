import { useState, useEffect } from "react";

function useLocalStorage(key: string, initialVal: any) {
  const [value, setValue] = useState(() => {
    let currValue;

    try {
      currValue = JSON.parse(localStorage.getItem(key) || String(initialVal));
    } catch (e) {
      console.warn(`Error reading localStorage for "${key}":`, e);
      currValue = initialVal;
    }
    return currValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

export { useLocalStorage };
