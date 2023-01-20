import { useState, useEffect } from "react";

export default function useLocalStorage(name, initValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(name);
      return item ? JSON.parse(item) : initValue;
    } catch (e) {
      console.log(e);
      return initValue;
    }
  });
  
  useEffect(() => {
    try {
      localStorage.setItem(name, JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  }, [name, value]);

  return [value, setValue];
}