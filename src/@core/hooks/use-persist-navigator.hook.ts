import { InitialState, NavigationState } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { mmkv } from "src/store/mmkv";

export const PERSIST_KEY = "NAVIGATOR_V1";

export const usePersistNavigator = () => {
  const [isDevMode] = useState(__DEV__);
  const [initialState, setInitialState] = useState<InitialState>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const cachedStateString = mmkv.getString(PERSIST_KEY);
      if (!cachedStateString) return () => {};

      const cachedStateParsed = JSON.parse(cachedStateString) as InitialState;
      setInitialState(cachedStateParsed);
    } finally {
      setIsLoading(false);
    }

    return () => {};
  }, []);

  const onStateChange = useCallback(
    (state: Readonly<NavigationState> | undefined) => {
      return mmkv.set(PERSIST_KEY, JSON.stringify(state));
    },
    []
  );

  return {
    initialState,
    onStateChange,
    isDevMode,
    isLoading,
  };
};
