import React from "react";
import { Text as NativeText, StyleSheet } from "react-native";
import { tv } from "tailwind-variants";

export interface TextCoreProps {
  children?: React.ReactNode;
  size?: keyof typeof text.variants.size;
  weight?: keyof typeof text.variants.weight;
  selectable?: boolean;
  className?: string;
  onPress?: () => void;
  numberOfLines?: number
}
export const Text = ({
  children,
  size = "md",
  weight = "normal",
  selectable,
  className,
  onPress,
  numberOfLines
}: TextCoreProps) => {
  return (
    <NativeText
      selectable={selectable}
      onPress={onPress}
      className={text({ size, weight, className })}
      style={style[weight]}
      numberOfLines={numberOfLines}
    >
      {children}
    </NativeText>
  );
};

const style = StyleSheet.create({
  normal: {
    fontFamily: "Montserrat-Regular",
  },
  semibold: {
    fontFamily: "Montserrat-SemiBold",
  },
  bold: {
    fontFamily: "Montserrat-Bold",
  },
  extrabold: {
    fontFamily: "Montserrat-ExtraBold",
  },
})

const text = tv({
  base: "font-montserrat",
  variants: {
    size: {
      xs: "text-xs",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl"
    },
    weight: {
      normal: "font-normal",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
