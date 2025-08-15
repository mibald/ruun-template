import { Text } from "@core/components";
import { View } from "react-native";

interface VehicleMetricBadgeProps {
  title: string;
  value: string;
}

export function MetricBadge({ title, value }: VehicleMetricBadgeProps) {
  return (
    <View className="bg-white p-4 rounded-lg shadow-sm flex-1 mr-2">
      <Text>{title}</Text>
      <Text weight="semibold" size="2xl">
        {value}
      </Text>
    </View>
  );
}
