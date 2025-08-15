import { Button, Text } from "@core/components";
import { Image, StyleSheet, View } from "react-native";
import { carImages } from "../utils/car-images.util";
import { Plan } from "../types/plan";

interface Props {
  item: Plan;
  onPress: (item: Plan) => void;
}

export const SelectVehicleButton = ({ item, onPress }: Props) => {
  return (
    <Button 
    className="border-2"
    onPress={() => onPress(item)} variant="outlined" disabled={!item.available}>
      <View className="flex-row items-center w-full p-2">
        <Image
          source={carImages[item.vehicleClass]}
          style={style.car}
          resizeMode="contain"
        />
        <View className="ml-4">
          <Text weight="semibold">{item.vehicleClass}</Text>
          <Text weight="semibold" size="xs">
            {item.price} {item.priceUnit}
          </Text>
        </View>
        <View className="ml-auto">
          <View className="p-1 bg-zinc-100 rounded w-12 items-center">
            <Text weight="semibold" size="xs">{item.originEstimationTime} {item.originEstimationTimeUnit}</Text>
          </View>
        </View>
      </View>
    </Button>
  );
};

const style = StyleSheet.create({
  car: {
    height: 50,
    width: 50,
  },
});
