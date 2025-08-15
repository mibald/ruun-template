import { View } from "react-native";
import { Location } from "../types/location.type";
import { Text } from "@core/components";
import React from "react";

interface Props {
  origin: Location;
  destination: Location;
}

export const OriginDestinationCard = ({ destination, origin }: Props) => {
  return (
    <React.Fragment>
      <Text weight="semibold">Locations:</Text>

      <View className="flex-row max-h-28 items-center">
        <View className="items-center mr-4">
          <Box />
          <View className="h-1/2 w-1 bg-primary" />
          <Box />
        </View>
        <View className="flex-1 gap-2">
          <LocationInfo location={origin} type="origin" />
          <LocationInfo location={destination} type="destination" />
        </View>
      </View>
    </React.Fragment>
  );
};

const Box = () => {
  return (
    <View className="w-4 h-4 bg-primary items-center justify-center z-40">
      <View className="w-1 h-1 bg-white" />
    </View>
  );
};

interface LocationInfoProps {
  location: Location;
  type: "origin" | "destination";
}

const LocationInfo = ({ location, type }: LocationInfoProps) => {
  return (
    <View className={`w-full ${type === "destination" ? "justify-end" : "justify-start"}`}>
      <View className="flex-row items-center justify-between">
        <Text size="lg" weight="semibold">
          {type}:
        </Text>
        <Text>5KM & 15 MINS</Text>
      </View>
      <View>
        <Text>{location.name}</Text>
      </View>
    </View>
  );
};
