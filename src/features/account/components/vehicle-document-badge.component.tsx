import { Text } from "@core/components";
import { COLORS } from "@core/const";
import { IconFileText } from "@tabler/icons-react-native";
import { View } from "react-native";

interface VehicleDocumentBadgeProps {
  title: string;
  value: string;
}
export function VehicleDocumentBadge({
  title,
  value,
}: VehicleDocumentBadgeProps) {
  return (
    <View className="bg-white p-4 rounded-lg shadow-sm">
      <View className="flex-row items-center">
        <IconFileText size={18} color={COLORS.primary} />
        <Text className="ml-2" weight="normal">
          {title}
        </Text>
      </View>
      <Text className="text-zinc-500 text-sm">{value}</Text>
    </View>
  );
}
