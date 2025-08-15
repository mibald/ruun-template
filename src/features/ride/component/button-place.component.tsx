import { useCallback } from "react";
import { Place } from "../types/google-place.type";
import { GorhomTouchableOpacity, Text } from "@core/components";

interface Props {
  item: Place;
  onPress: (item: Place) => void
}

export const ButtonPlace = ({ item, onPress }: Props) => {
  return (
    <GorhomTouchableOpacity className="py-4" onPress={() => onPress(item)}>
      <Text weight="semibold">{item.name}</Text>
      <Text size="xs">{item.formatted_address}</Text>
    </GorhomTouchableOpacity>
  );
};
