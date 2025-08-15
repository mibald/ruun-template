import { User } from "@features/common/types";
import { StaticScreenProps } from "@react-navigation/native";
import React, { useCallback } from "react";
import { useSnapBottomSheetOnFocus } from "../hooks/use-snap-bottom-sheet-on-focus.hook";
import { UserHeader } from "../component/user-header.component";
import { View } from "react-native";
import { Text } from "@core/components";
import { mockClient } from "@features/common/mocks";
import { FlatList } from "react-native-gesture-handler";
import dayjs from "dayjs";

const BOTTOM_SHEET_POSITION = "90%";
type Props = StaticScreenProps<{ user: User }>;

export default function RideProfileScreen({ route }: Props) {
  const user = route.params.user;
  useSnapBottomSheetOnFocus(BOTTOM_SHEET_POSITION);

  const renderReview = useCallback(({ item }: { item: Review }) => {
    return <ReviewBadge item={item} />;
  }, []);

  return (
    <React.Fragment>
      {/* User Header */}
      <UserHeader user={user} />

      {/* Statistics */}
      <Statistics />

      {/* Reviews */}
      <Text size="lg" weight="semibold">
        Reviews
      </Text>
      <FlatList
        data={rideReviews}
        keyExtractor={(ride) => ride.id}
        renderItem={renderReview}
      />
    </React.Fragment>
  );
}

interface Review {
  id: string;
  created_at: Date;
  user: User;
  content: string;
  rate: number;
}
const rideReviews: Review[] = [
  {
    id: 1,
    rating: 5,
    comment:
      "Excellent driver! Smooth ride and very friendly. Would definitely ride again.",
    timestamp: "2023-10-15T08:30:00Z",
    passengerName: "Alex M.",
  },
  {
    id: 2,
    rating: 4,
    comment:
      "Great conversation and safe driving. Just a minor delay in pickup.",
    timestamp: "2023-10-16T12:45:00Z",
    passengerName: "Sarah K.",
  },
  {
    id: 3,
    rating: 5,
    comment: "Perfect ride! The car was clean and the driver was professional.",
    timestamp: "2023-10-17T18:20:00Z",
    passengerName: "James P.",
  },
  {
    id: 4,
    rating: 3,
    comment: "Decent ride, but took a longer route. Otherwise okay.",
    timestamp: "2023-10-18T09:15:00Z",
    passengerName: "Lisa T.",
  },
  {
    id: 5,
    rating: 5,
    comment: "Best Uber driver ever! Super polite and even offered water.",
    timestamp: "2023-10-19T22:10:00Z",
    passengerName: "Ryan L.",
  },
  {
    id: 6,
    rating: 2,
    comment: "Car had a weird smell, and the driver was a bit rude.",
    timestamp: "2023-10-20T14:50:00Z",
    passengerName: "Megan S.",
  },
  {
    id: 7,
    rating: 4,
    comment: "Fast and efficient. No complaints!",
    timestamp: "2023-10-21T07:25:00Z",
    passengerName: "David R.",
  },
  {
    id: 8,
    rating: 5,
    comment: "Very punctual and drove safely even in heavy traffic.",
    timestamp: "2023-10-22T17:40:00Z",
    passengerName: "Nina W.",
  },
  {
    id: 9,
    rating: 1,
    comment: "Terrible experience. Driver canceled last minute.",
    timestamp: "2023-10-23T11:05:00Z",
    passengerName: "Carlos G.",
  },
  {
    id: 10,
    rating: 4,
    comment: "Good ride overall. Music was a bit loud though.",
    timestamp: "2023-10-24T20:15:00Z",
    passengerName: "Emma D.",
  },
].map((item) => ({
  content: item.comment,
  created_at: new Date(item.timestamp),
  id: item.id.toString(),
  rate: item.rating,
  user: {
    ...mockClient,
    full_name: item.passengerName,
  },
}));

function ReviewBadge({ item }: { item: Review }) {
  return (
    <View className="pb-4">
      <Text size="lg" weight="semibold">
        {item.user.full_name}
      </Text>
      <Text>{item.content}</Text>
      <Text size="xs">
        {dayjs(item.created_at).format("DD/MM/YYYY hh:mm A")}
      </Text>
    </View>
  );
}

function Statistics() {
  return (
    <React.Fragment>
      <Text size="lg" weight="semibold">
        Statistics
      </Text>
      <View className="p-2 bg-zinc-100 rounded-lg flex-row">
        <View className="flex-1">
          <Text weight="semibold" className="text-center">
            Rides
          </Text>
          <Text className="text-center">1</Text>
        </View>
        <View className="flex-1">
          <Text weight="semibold" className="text-center">
            Reviews
          </Text>
          <Text className="text-center">2</Text>
        </View>
        <View className="flex-1">
          <Text weight="semibold" className="text-center">
            Since
          </Text>
          <Text className="text-center">12/09/2022</Text>
        </View>
      </View>
    </React.Fragment>
  );
}
