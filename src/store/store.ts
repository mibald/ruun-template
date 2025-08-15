import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { zustandStorage } from "./mmkv";

interface StoreState {
  count: number;
  inc: () => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      count: get().count || 0,
      inc: () => set((state) => ({ count: state.count + 1 })),
    }),
    {
      name: "my-app-storage",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);
