import {
  SNAP_POINTS,
  useBottomSheetStore,
} from "@features/ride/store/use-bottom-sheet.store";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { NativeStackNavigatorProps } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Map } from "@features/ride/component/map.component";

export const RideStackLayout = (
  props: Parameters<NonNullable<NativeStackNavigatorProps["layout"]>>[0]
) => {
  const bottomSheetStore = useBottomSheetStore((state) => state);

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <Map />

      <BottomSheet
        snapPoints={SNAP_POINTS}
        enableDynamicSizing={false}
        enablePanDownToClose={false}
        keyboardBehavior="fillParent"
        ref={bottomSheetStore.ref}
        backgroundStyle={styles.backgroundStyle}
        containerStyle={styles.containerStyle}
        onChange={(index) => bottomSheetStore.setIndex(index)}
      >
        <BottomSheetView
          style={{
            flex: 1,
            paddingHorizontal: 16,
            paddingBottom: 64,
            paddingTop: 2,
          }}
        >
          {props.children}
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "white",
  },
  containerStyle: {
    zIndex: 40,
  },
  headerContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  contentContainer: {
    alignItems: "center",
  },
});
