import { IconArrowDown } from "@tabler/icons-react-native";
import { Input } from "./input.component";
import React, { useEffect, useRef, useState } from "react";
import BottomSheet, { BottomSheetModal } from "@gorhom/bottom-sheet";
import {
  LabeledItem,
  SelectBottomSheet,
  SelectBottomSheetProps,
} from "../bottom-sheets/select-bottom-sheet.component";
import { delay } from "@core/utils/delay.util";

export interface SelectProps<T extends LabeledItem>
  extends SelectBottomSheetProps<T> {
  error?: string;
  value?: T;
}

export const Select = <T extends LabeledItem>({
  options,
  error,
  label,
  onChange,
  searchInput,
  value,
}: SelectProps<T>) => {
  const bottomSheetRef = useRef<BottomSheetModal | null>(null);

  const bottomSheetMethods = {
    open: () => {
      console.log("presenting modal...");
      bottomSheetRef.current?.present();
    },
    close: () => {
      bottomSheetRef.current?.close({ duration: 500 });
    },
  };

  return (
    <React.Fragment>
      <Input
        label={label}
        type="text"
        value={value?.label || "Select an option"}
        error={error}
        disabled
        onPress={() => {
          bottomSheetMethods.open();
        }}
        icons={{
          right: IconArrowDown,
        }}
      />
      <SelectBottomSheet
        ref={bottomSheetRef}
        options={options}
        label={label}
        searchInput={searchInput}
        onChange={(value) => {
          bottomSheetMethods.close();
          onChange?.(value);
        }}
      />
    </React.Fragment>
  );
};
