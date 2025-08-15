import { Text } from "@core/components";
import { OriginDestinationCard } from "@features/ride/component/origin-destination-card.component";
import { PricingInfoCard } from "@features/ride/component/pricing-info-card.component";
import { Ride } from "@features/ride/types/ride.type";
import dayjs from "dayjs";
import { Pressable, View } from "react-native";

interface Props {
  item: Ride;
  onPress?: () => void;
}

export const RideHistoryCard = ({ item, onPress }: Props) => {
  return (
    <Pressable className="bg-white border border-zinc-400 rounded-lg p-4 mb-2" onPress={onPress}>
      <OriginDestinationCard
        destination={item.destination}
        origin={item.origin}
      />
      <View className="my-2" />
      <PricingInfoCard pricingInfo={item.pricing} />
      <View className="my-2" />
      <Text weight="semibold">
        Created At: {dayjs(item.created_at).format("DD/MM/YYYY")}
      </Text>
    </Pressable>
  );
};
