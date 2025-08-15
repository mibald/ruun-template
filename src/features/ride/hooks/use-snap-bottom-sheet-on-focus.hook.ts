import { useFocusEffect } from "@react-navigation/native";
import {
  SNAP_POINTS,
  useBottomSheetStore,
} from "../store/use-bottom-sheet.store";
import { useCallback, useState } from "react";

type Percentages = "15%" | "30%" | "50%" | "75%" | "90%";

export const useSnapBottomSheetOnFocus = (
  position: Percentages
) => {
  const bottomSheetStore = useBottomSheetStore((state) => state);

  const callback = useCallback((callbackPosition?: Percentages) => {
    const index = SNAP_POINTS.findIndex((value) => value === (callbackPosition ? callbackPosition : position));
    bottomSheetStore.setIndex(index);
    
    try {
      if (!bottomSheetStore.ref.current) return () => {};
      return bottomSheetStore.ref.current?.snapToIndex(index, {
        duration: 500,
      });
    } catch (error) {
      setTimeout(
        () =>
          bottomSheetStore.ref.current?.snapToIndex(index, {
            duration: 500,
          }),
        500
      );
    }
  }, [bottomSheetStore.ref]);

  useFocusEffect(callback);

  return {
    snapToPosition: callback,
    currentIndex: bottomSheetStore.index,
  }
};
