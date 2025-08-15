import { Button, Text } from "@core/components";
import { Image, View } from "react-native";
import { colorsByVehicleClass } from "../utils/colors-by-vehicle-class.util";
import { Vehicle } from "../type/vehicle.type";
import { VehicleClassList } from "./vehicle-class-list.component";

interface Props {
  item: Vehicle;
  onPress: (vehicle: Vehicle) => void;
}

export const ManageVehicleBadge = ({ item, onPress }: Props) => {
  return (
    <View className="p-2 border rounded-lg border-zinc-200 mb-2 bg-white">
      <Image
        source={{ uri: item.picture }}
        className="w-full h-32 rounded-lg"
      />
      <View className="my-2">
        <Text size="xl" weight="semibold">
          {item.model}
        </Text>
        <Text>
          {item.type} | {item.year}
        </Text>
        <View className="flex-row items-center gap-4 my-2">
          <VehicleClassList classes={item.classes} />
        </View>
      </View>
      <Button title="Manage" variant="outlined" size="md" onPress={() => onPress(item)}/>
    </View>
  );
};
