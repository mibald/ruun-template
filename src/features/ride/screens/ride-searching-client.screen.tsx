import { Button } from "@core/components";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { useSnapBottomSheetOnFocus } from "../hooks/use-snap-bottom-sheet-on-focus.hook";

const BOTTOM_SHEET_POSITION = "15%";
export default function SearchingClientScreen() {
  const [connected, setConnected] = useState(false);
  const navigation = useNavigation();

  useSnapBottomSheetOnFocus(BOTTOM_SHEET_POSITION);

  const onPress = useCallback(() => {
    setConnected((before) => {
      if (!before) {
        setTimeout(
          () =>
            navigation.navigate("Ride", {
              screen: "ClientFound",
            }),
          1000
        );
      }
      return !before;
    });
  }, []);

  return (
    <React.Fragment>
      <Button
        onPress={onPress}
        title={connected ? "Connected" : "Disconnected"}
        variant={connected ? "filled" : "outlined"}
        color={connected ? "primary" : "secondary"}
      />
    </React.Fragment>
  );
}
