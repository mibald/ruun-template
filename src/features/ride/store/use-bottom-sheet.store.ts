import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { createRef } from "react";
import { create } from "zustand";

interface BottomSheetStore {
    ref: React.RefObject<BottomSheetMethods>;
    index: number;
    setIndex: (index: number) => void;
}

export const SNAP_POINTS = ["15%", "30%", "50%", "75%", "90%"];
export const useBottomSheetStore = create<BottomSheetStore>((set) => ({
    ref: createRef<BottomSheet>(),
    index: 0,
    setIndex: (index) => set(() => ({ index })),
}))