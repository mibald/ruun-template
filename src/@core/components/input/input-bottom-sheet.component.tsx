import BottomSheet, { useBottomSheetInternal } from "@gorhom/bottom-sheet";
import { forwardRef, useCallback, useEffect, useState } from "react";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  View,
} from "react-native";
import { BottomSheetTextInputProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetTextInput";
import { inputStyle } from "./input-style";

export const InputBottomSheet = forwardRef<
  TextInput,
  BottomSheetTextInputProps
>(({ onFocus, onBlur, ...rest }, ref) => {

  //#region hooks
  const { shouldHandleKeyboardEvents } = useBottomSheetInternal();
  //#endregion

  //#region callbacks
  const handleOnFocus = useCallback(
    (args: NativeSyntheticEvent<TextInputFocusEventData>) => {
      shouldHandleKeyboardEvents.value = true;
      if (onFocus) {
        onFocus(args);
      }
    },
    [onFocus, shouldHandleKeyboardEvents]
  );
  const handleOnBlur = useCallback(
    (args: NativeSyntheticEvent<TextInputFocusEventData>) => {
      shouldHandleKeyboardEvents.value = false;
      if (onBlur) {
        onBlur(args);
      }
    },
    [onBlur, shouldHandleKeyboardEvents]
  );
  //#endregion

  //#region effects
  useEffect(() => {
    return () => {
      // Reset the flag on unmount
      shouldHandleKeyboardEvents.value = false;
    };
  }, [shouldHandleKeyboardEvents]);

  return (
    <View className={inputStyle()}>
      <TextInput
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        className="p-2 flex-1 h-full"
        ref={ref}
        {...rest}
      />
    </View>
  );
});
