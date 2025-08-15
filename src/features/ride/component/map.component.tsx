import React, { useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Camera, LatLng, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useMapStore } from "../store/map.store";
import { Text } from "@core/components";
import { useObject } from "@features/auth/hooks";
import { MapViewRoute } from "react-native-maps-routes";
import { COLORS } from "@core/const";

export const Map = () => {
  // State
  const [manualSelection, setManualSelection] = useState(false);
  const { setValue: setLocation, state: locations } =
    useObject<Record<"origin" | "destination", LatLng>>();

  const mapRef = useRef<MapView | null>(null);
  const eventEmitter = useMapStore((state) => state.eventEmitter);

  function onFirstUserLocation(location: Location.LocationObject) {
    eventEmitter.emit("onChangeLocation", {
      type: "origin",
      ...location.coords,
    });

    const cameraOptions: Partial<Camera> = {
      center: location.coords,
      zoom: 15
    };

    return mapRef.current?.animateCamera(cameraOptions, { duration: 2000 });
  }

  // User location handler
  useEffect(() => {
    Location.requestForegroundPermissionsAsync()
      .then((permissionResponse) => {
        if (permissionResponse.granted) {

          Location.getCurrentPositionAsync()
            .then(onFirstUserLocation)
            .catch((error) => console.error(error.message));

        }
      })
      .catch((error) => console.error(error))
  }, []);

  // Event listeners
  useEffect(() => {
    const subscriptionManualSelection = eventEmitter.addListener("onManualSelection", setManualSelection);
    const subscriptionOnChangeLocation = eventEmitter.addListener("onChangeLocation", (location) => {
      setLocation(location.type, location);
    });

    return () => {
      subscriptionManualSelection.remove();
      subscriptionOnChangeLocation.remove();
    }
  }, [])

  const Route = useCallback(() => {
    if (!locations.destination || !locations.origin) return null;

    return (
      <MapViewRoute
        apiKey={process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
        destination={{
          latitude: locations.destination.latitude,
          longitude: locations.destination.longitude
        }}
        origin={{
          latitude: locations.origin.latitude,
          longitude: locations.origin.longitude,
        }}
        strokeColor={COLORS.primary}
        onError={(error) => console.error("Route Error:", error.message)}
      />
    )
  }, [locations])

  return (
    <React.Fragment>
      <MapView
        style={style.map}
        followsUserLocation
        showsUserLocation
        showsMyLocationButton={false}
        ref={mapRef}
        onRegionChangeComplete={(region) => {
          eventEmitter.emit("onRegionChangeComplete", region);
        }}
      >
        {/* Markers */}
        {
          locations.destination ? (
            <Marker
              coordinate={locations.destination}
              pinColor={COLORS.primary}
            />
          ) : null
        }

        {/* Route */}
        <Route />
      </MapView>

      {manualSelection && <WishMarker />}
      {manualSelection && <DragScreenAdvice />}
    </React.Fragment>
  );
};

const style = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

function WishMarker() {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 24,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View className="w-4 h-4 bg-primary items-center justify-center z-40">
        <View className="w-1 h-1 bg-white" />
      </View>
      <View className="h-6 w-1 bg-primary" />
    </View>
  );
}

function DragScreenAdvice() {
  return (
    <View style={{
      position: "absolute",
      top: 48,
      left: 0,
      right: 0,
      bottom: 0,
      alignItems: "center",
    }}>
      <View className="bg-zinc-200 p-2 rounded-lg shadow-lg">
        <Text weight="semibold">You can drag the screen.</Text>
      </View>
    </View>
  )
}
