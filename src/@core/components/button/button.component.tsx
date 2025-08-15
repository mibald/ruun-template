import { COLORS } from "@core/const";
import { Icon } from "@tabler/icons-react-native";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";
import { Text } from "../text/text.component";
import React from "react";
import { GorhomTouchableOpacity } from "./gorhom-touchable-opacity.component";

interface Props {
  loading?: boolean;
  disabled?: boolean;
  title?: string;
  color?: keyof typeof button.variants.filled.colors;
  onPress?: () => void;
  variant?: keyof typeof button.variants;
  icons?: {
    left?: Icon;
    right?: Icon;
  };
  className?: string;
  size?: keyof typeof button.variants.filled.size;
  width?: "w-full" | `w-[${number}%]` | "w-1/2";
  children?: React.ReactElement;
  Pressable?: any
}

export function Button({
  disabled,
  loading,
  title,
  color = "primary",
  onPress,
  variant = "filled",
  icons,
  className,
  size = "lg",
  width = "w-full",
  children,
  Pressable = GorhomTouchableOpacity
}: Props) {
  if (loading) {
    disabled = true;
  }

  if (disabled) {
    color = "secondary";
  }

  function getIconColor() {
    if (disabled && variant === "outlined") return colors.zinc["400"];
    if (disabled && !variant) return colors.zinc["400"];
    if (variant === "outlined" && color === "secondary")
      return colors.zinc["400"];
    if (variant === "outlined") return COLORS.primary;

    return colors.white;
  }

  return (
    <View className={`${width ? width : "w-full"}`}>
      <Pressable
        disabled={disabled}
        onPress={onPress}
        activeOpacity={0.6}
        className={`${button.base} ${button.variants[variant].colors[color]} ${button.variants.filled.size[size]} w-full ${className} `}
      >
        {children ? (
          children
        ) : (
          <React.Fragment>
            <View className="w-[10%] flex-row items-end justify-end">
              {icons?.left && !loading ? (
                <icons.left color={getIconColor()} />
              ) : null}
            </View>

            <View className="w-[80%]">
              {loading ? <ActivityIndicator color={"black"} size={20} /> : null}
              {!loading ? (
                <Text
                  weight="semibold"
                  size={size}
                  className={`${text.base} ${text.variants[variant].colors[color]}`}
                >
                  {title}
                </Text>
              ) : null}
            </View>

            <View className="w-[10%]">
              {icons?.right && !loading ? (
                <icons.right color={getIconColor()} />
              ) : null}
            </View>
          </React.Fragment>
        )}
      </Pressable>
    </View>
  );
};

const button = {
  base: "rounded-lg border items-center justify-center flex-row",
  variants: {
    outlined: {
      colors: {
        primary: "bg-transparent border-primary",
        secondary: "bg-transparent border-zinc-300",
      },
      size: {
        md: "h-8",
        lg: "h-14",
      },
    },
    filled: {
      colors: {
        primary: "bg-primary border-red-600",
        secondary: "bg-zinc-200 border-zinc-300",
      },
      size: {
        md: "h-8",
        lg: "h-14",
      },
    },
  },
} as const;

const text = {
  base: "text-center",
  variants: {
    filled: {
      colors: {
        primary: "text-white",
        secondary: "text-zinc-500",
      },
    },
    outlined: {
      colors: {
        primary: "text-primary",
        secondary: "text-zinc-400",
      },
    },
  },
} as const;
