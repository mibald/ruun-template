import { Button, Input } from "@core/components";
import { IconSearch } from "@tabler/icons-react-native";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { StaticScreenProps, useNavigation } from "@react-navigation/native";
import { RideRequestState } from "../types/ride-request-state.type";
import { Location } from "../types/location.type";
import { useSnapBottomSheetOnFocus } from "../hooks/use-snap-bottom-sheet-on-focus.hook";
import { useGeocodeCoords, useSearchPlaces } from "../services/google.service";
import { useMapStore } from "../store/map.store";
import { Place } from "../types/google-place.type";
import { ButtonPlace } from "../component/button-place.component";
import { UserPlace } from "../component/user-place.component";
import { LocationGeocodedAddress } from "expo-location";
import { Coords } from "../types/coords.type";

type Props = StaticScreenProps<{
  onSelect: (type: keyof RideRequestState, location: Location) => void;
  type: keyof RideRequestState;
}>;

const BOTTOM_SHEET_POSITION = "90%";
export default function SearchLocationScreen({ route }: Props) {
  // State
  const [textQuery, setTextQuery] = useState("");
  const [coords, setCoords] = useState<Coords | null>(null);
  const searchPlacesQuery = useSearchPlaces(textQuery);

  // Reverse coords handling
  const reverseCoordsMutation = useGeocodeCoords();
  const geocodedPlaces = reverseCoordsMutation.data || [];
  const reversedPlace = geocodedPlaces[0] as
    | LocationGeocodedAddress
    | undefined;

  // Navigation handling
  const { onSelect, type } = route.params;
  const navigation = useNavigation();

  // Event handling
  const mapEventEmitter = useMapStore((state) => state.eventEmitter);

  // Bottom sheet handling
  const bottomSheet = useSnapBottomSheetOnFocus(BOTTOM_SHEET_POSITION);
  const isBottomSheetExpanded = bottomSheet.currentIndex > 2;

  const renderItem = useCallback(({ item }: { item: Place }) => {
    function onPress() {
      onSelect(type, {
        coords: {
          latitude: item.geometry.location.lat,
          longitude: item.geometry.location.lng,
        },
        description: item.formatted_address,
        name: item.name,
      });
      mapEventEmitter.emit("onChangeLocation", {
        type,
        latitude: item.geometry.location.lat,
        longitude: item.geometry.location.lng,
      });
      navigation.goBack();
    }
    return <ButtonPlace item={item} onPress={onPress} />;
  }, []);

  const renderUserPlaces = useCallback(({ item }: { item: string }) => {
    return <UserPlace item={item} />;
  }, []);

  useEffect(() => {
    mapEventEmitter.emit("onManualSelection", true);
    const regionSubscription = mapEventEmitter.addListener(
      "onRegionChangeComplete",
      (region) => {
        const coordinates = {
          latitude: region.latitude,
          longitude: region.longitude,
        };

        setCoords(coordinates);
        reverseCoordsMutation.mutateAsync(coordinates);
        mapEventEmitter.emit("onChangeLocation", {
          type,
          ...region,
        });
      }
    );

    return () => {
      regionSubscription.remove();
      mapEventEmitter.emit("onManualSelection", false);
    };
  }, []);

  return (
    <React.Fragment>
      <Input
        label={type}
        placeholder="Iglesia Fatima"
        icons={{
          right: IconSearch,
        }}
        type="text"
        onChange={setTextQuery}
        value={reversedPlace?.formattedAddress ?? undefined}
        multiline
        textAlignVertical="top"
      />
      {isBottomSheetExpanded ? (
        <FlatList
          data={["Home", "Work", "Girlfriend House"]}
          renderItem={renderUserPlaces}
          horizontal
          keyExtractor={(place) => place.replaceAll(" ", "-").toLowerCase()}
        />
      ) : null}
      {isBottomSheetExpanded ? (
        <FlatList
          data={searchPlacesQuery.data?.results || []}
          renderItem={renderItem}
        />
      ) : null}
      <Button
        title={!isBottomSheetExpanded ? "Accept" : `Select ${type} in map`}
        onPress={() => {
          if (isBottomSheetExpanded) {
            return bottomSheet.snapToPosition("30%");
          }
          if (!coords) return bottomSheet.snapToPosition("30%");

          onSelect(type, {
            coords: {
              latitude: coords.latitude,
              longitude: coords.longitude,
            },
            description: reversedPlace?.street || "unknown",
            name: reversedPlace?.formattedAddress || "unknown",
          });
          navigation.goBack();
        }}
        variant={!isBottomSheetExpanded ? "filled" : "outlined"}
        loading={reverseCoordsMutation.isPending}
      />
    </React.Fragment>
  );
}
