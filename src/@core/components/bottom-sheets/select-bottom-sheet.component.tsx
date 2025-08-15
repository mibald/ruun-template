import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetModalProvider,
  TouchableOpacity,
} from "@gorhom/bottom-sheet";
import { forwardRef, useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../text/text.component";
import { InputBottomSheet } from "../input/input-bottom-sheet.component";
import { countries, Country } from "@core/const";

// Define a type that requires a `label` property
export type LabeledItem = {
  label: string;
  // Add other properties if needed
};

export interface SelectBottomSheetProps<T extends LabeledItem> {
  searchInput?: {
    title?: string;
    placeholder?: string;
  };
  options: ArrayLike<T>;
  onChange?: (value: T) => void;
  onClose?: () => void;
  label?: string;
}

// Use `typeof forwardRef` with generics
export const SelectBottomSheet = forwardRef(
  <T extends LabeledItem>(
    props: SelectBottomSheetProps<T>,
    ref: React.Ref<BottomSheetModal>
  ) => {
    const [searchQuery, setSearchQuery] = useState("");

    const renderItem = useCallback(({ item }: { item: T }) => {
      return (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => props.onChange?.(item)}
          className="flex-row justify-between items-center py-4 border-b border-gray-200"
        >
          <View className="flex-row items-center gap-2">
            <Text>{item.label}</Text>
          </View>
        </TouchableOpacity>
      );
    }, []);

    return (
        <BottomSheetModal
          // snapPoints={["50%"]}
          // enableDynamicSizing={false}
          // enablePanDownToClose={true}
          keyboardBehavior="fillParent"
          ref={ref}
          backgroundStyle={styles.backgroundStyle}
          containerStyle={styles.containerStyle}
          // onChange={(index) => index < 0 ? props.onClose?.() : null}
        >
          {props.label && (
            <Text className="text-center" weight="semibold">
              {props.label}
            </Text>
          )}
          {props.searchInput?.title ? (
            <View style={styles.headerContainer}>
              <Text weight="semibold">Select your country</Text>
              <InputBottomSheet
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
              />
            </View>
          ) : null}
          <BottomSheetFlatList
            data={props.options}
            keyExtractor={(item) => item.label}
            renderItem={renderItem}
            initialNumToRender={20}
            style={styles.container}
          />
        </BottomSheetModal>
 
    );
  }
) as <T extends LabeledItem>(
  props: SelectBottomSheetProps<T> & { ref?: React.Ref<BottomSheetModal> }
) => React.ReactElement;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "white",
  },
  containerStyle: {
    zIndex: 999,
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
