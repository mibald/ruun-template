import { IconCheck } from "@tabler/icons-react-native";
import React, { useState } from "react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import { TouchableOpacity, View } from "react-native";
import { tv } from "tailwind-variants";
import { Text } from "../text/text.component";

interface Props<T extends FieldValues> {
  controller: Control<T>;
  name: FieldPath<T>;
  label?: string;
  containerClassName?: string;
}

export const Checkbox = <T extends FieldValues>({
  controller,
  name,
  label,
  containerClassName
}: Props<T>) => {
  return (
    <Controller
      name={name}
      control={controller}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <React.Fragment>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onChange(!value)}
            className={`w-full flex-row items-center gap-2 ${containerClassName}`}
          >
            <View className={checkbox({ checked: value })}>
              {value && <IconCheck color="white" size={16} strokeWidth={4} />}
            </View>
            {label && (
              <Text size="md" className="text-gray-700">
                {label}
              </Text>
            )}
          </TouchableOpacity>
          {error && (
            <View className="w-full">
              <Text size="xs" className="text-primary">
                {error.message}
              </Text>
            </View>
          )}
        </React.Fragment>
      )}
    />
  );
};

const checkbox = tv({
  base: "w-6 h-6 rounded border border-gray-300 flex items-center justify-center",
  variants: {
    checked: {
      true: "bg-primary border-red-600",
      false: "bg-white",
    },
  },
});
