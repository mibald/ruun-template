import { Text } from "@core/components";
import { View } from "react-native";

interface Props {
  item: string;
}
export const UserPlace = ({ item }: Props) => {
  return (
    <View className="p-2 mr-2 rounded-lg bg-zinc-200">
      <Text>{item}</Text>
    </View>
  );
};
