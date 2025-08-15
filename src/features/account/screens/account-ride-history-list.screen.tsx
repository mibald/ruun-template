import React, { useCallback } from "react";
import { FlatList } from "react-native";
import { ridesHistoryMock } from "../mocks/rides-history.mock";
import { Ride } from "@features/ride/types/ride.type";
import { RideHistoryCard } from "../components/ride-history-card.component";
import { useNavigation } from "@react-navigation/native";

export default function AccountRideHistoryListScreen() {
  const navigation = useNavigation();

  const renderItem = useCallback(({ item }: { item: Ride }) => {
    return (
      <RideHistoryCard
        item={item}
        onPress={() => {
          navigation.navigate("Account", {
            screen: "RideHistory",
            params: {
              ride: item,
            },
          });
        }}
      />
    );
  }, []);

  return (
    <React.Fragment>
      <FlatList data={ridesHistoryMock} renderItem={renderItem} />
    </React.Fragment>
  );
}
