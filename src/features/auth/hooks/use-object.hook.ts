import { useState } from "react";

export const useObject = <T extends object>(initialState: T = {} as T) => {
  const [state, setState] = useState(initialState);

  const setValue = <K extends keyof T>(key: K, value: T[K]) => {
    setState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return {
    state,
    setValue,
  };
};
