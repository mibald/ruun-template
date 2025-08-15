import { View } from "react-native";
import { Vehicle } from "../type/vehicle.type";
import { IconAlertTriangle, IconCheck } from "@tabler/icons-react-native";
import { Text } from "@core/components";

interface VehicleStatusBadgeProps {
  status: Vehicle["status"];
}
export function VehicleStatusBadge({ status }: VehicleStatusBadgeProps) {
  return (
    <View
      className={`flex-row items-center py-2 px-3 rounded-lg self-start ${
        status === "APPROVED" ? "bg-green-100" : "bg-yellow-100"
      }`}
    >
      {status === "APPROVED" ? (
        <IconCheck size={16} color="#10b981" className="mr-2" />
      ) : (
        <IconAlertTriangle size={16} color="#f59e0b" className="mr-2" />
      )}
      <Text
        weight="semibold"
        className={`${
          status === "APPROVED" ? "text-green-800" : "text-yellow-800"
        } ml-2`}
      >
        {status.charAt(0) + status.slice(1).toLowerCase()}
      </Text>
    </View>
  );
}
