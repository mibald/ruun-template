import { View } from "react-native";
import { Vehicle } from "../type/vehicle.type";
import { colorsByVehicleClass } from "../utils/colors-by-vehicle-class.util";
import { Text } from "@core/components";

interface Props {
  classes: Vehicle["classes"];
}
export const VehicleClassList = ({ classes }: Props) => {
  return classes.map((vehicle_class) => (
    <View
      key={vehicle_class.toLowerCase()}
      className={`border p-1 rounded ${colorsByVehicleClass[vehicle_class].background} ${colorsByVehicleClass[vehicle_class].border}`}
    >
      <Text
        className={`${colorsByVehicleClass[vehicle_class].text}`}
        weight="semibold"
        size="xs"
      >
        {vehicle_class}
      </Text>
    </View>
  ));
};
