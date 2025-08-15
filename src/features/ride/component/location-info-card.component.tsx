import { View } from "react-native";
import { Location } from "../types/location.type";
import { Text } from "@core/components";
import { locationTypeIcons } from "../utils/location-type-icons.util";
import { COLORS } from "@core/const";
import { tv } from "tailwind-variants";

interface Props {
  location: Location;
  type: "origin" | "destination";
}

export const LocationInfoCard = (props: Props) => {
  const Icon = locationTypeIcons[props.type];

  return (
    <View className={card()}>
      <View className="mr-2">
        <Icon color={COLORS.primary} />
      </View>
      <Text weight="semibold">{props.location.name}</Text>
    </View>
  );
};

const card = tv({
  base: "p-2 rounded-lg bg-zinc-100 border flex-row border-zinc-300 items-center",
  variants: {
    enabled: {
      true: "border-primary",
    },
  },
});
