import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import React, { forwardRef, useCallback, useState } from "react";
import { Text } from "../text/text.component";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { countries, Country } from "@core/const/countries";
import { InputBottomSheet } from "../input/input-bottom-sheet.component";

interface Props {
  onCountrySelect: (country: Country) => void;
}

export const CountriesBottomSheet = forwardRef<BottomSheet, Props>(
  (props, ref) => {
    const [searchQuery, setSearchQuery] = useState("");

    const renderItem = useCallback(({ item }: { item: Country }) => {
      return (
        <TouchableOpacity
          onPress={() => props.onCountrySelect(item)}
          activeOpacity={0.5}
          className="flex-row justify-between items-center py-4 border-b border-gray-200"
        >
          <View className="flex-row items-center gap-2">
            <Text>{item.flag}</Text>
            <Text>{item.name}</Text>
          </View>
          <Text>{item.mobileCode}</Text>
        </TouchableOpacity>
      );
    }, []);

    return (
      <BottomSheet
        index={-1}
        snapPoints={["50%"]}
        enableDynamicSizing={false}
        enablePanDownToClose={true}
        keyboardBehavior="fillParent"
        ref={ref}
        backgroundStyle={styles.backgroundStyle}
        containerStyle={styles.containerStyle}
      >
        <View style={styles.headerContainer}>
          <Text size="lg" weight="semibold">
            Select your country
          </Text>
          <InputBottomSheet
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </View>
        <BottomSheetFlatList
          data={countries.filter((country) =>
            country.name.toLowerCase().includes(searchQuery.toLowerCase())
          )}
          keyExtractor={(item) => item.name}
          renderItem={renderItem}
          initialNumToRender={20}
          style={styles.container}
        />
      </BottomSheet>
    );
  }
);

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "white",
  },
  containerStyle: {
    zIndex: 40
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
