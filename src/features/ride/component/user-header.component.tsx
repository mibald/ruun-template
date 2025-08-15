import { GorhomTouchableOpacity, Text, TextCoreProps } from "@core/components";
import { COLORS } from "@core/const";
import { User } from "@features/common/types";
import { useNavigation } from "@react-navigation/native";
import { IconMessage, IconSettings, IconStar, IconUser } from "@tabler/icons-react-native";
import React, { useCallback } from "react";
import { Image, View } from "react-native";
import { tv } from "tailwind-variants";

interface Props {
  user: User;
  profileButton?: boolean;
  messageButton?: boolean;
  settingsButton?: boolean;
  vehicleBadge?: boolean;
  rating?: boolean;
  fullNameTextProps?: TextCoreProps
}

export const UserHeader = ({
  messageButton,
  profileButton,
  vehicleBadge,
  settingsButton,
  rating,
  fullNameTextProps,
  user,
}: Props) => {
  const navigation = useNavigation();

  const onMessage = useCallback(() => {
    navigation.navigate("Ride", {
      screen: "Chat",
    });
  }, [])

  const onProfile = useCallback(() => {
    navigation.navigate("Ride", {
      screen: "Profile",
      params: { user }
    });
  }, [])

  const onSettings = useCallback(() => {
    navigation.navigate("Account", {
      screen: "AccountHome",
    })
  }, [])
  return (
    <React.Fragment>
      <View className="">
        {user.vehicle && vehicleBadge ? (
          <Image
            source={{ uri: user.vehicle.picture }}
            className="w-full h-28 rounded-lg"
          />
        ) : null}
      </View>
      <View className="flex-row items-center">
        <View>
          <Image
            source={{
              uri: user.picture,
            }}
            className="w-16 h-16 rounded-full border-2 border-primary"
          />
        </View>
        <View className="ml-4">
          <Text weight="semibold" size="lg" {...fullNameTextProps} >{user.full_name}</Text>
          {
            rating ? (
              <View className="flex-row items-center">
                <Text className="mr-1">4.2</Text>
                <IconStar size={16} color={COLORS.primary} />
              </View>
            ) : null
          }
        </View>
        <View className="flex-1 p-2 items-end justify-center">
          <View className="flex-row gap-4">
            {profileButton && (
              <GorhomTouchableOpacity onPress={onProfile} className={button()}>
                <IconUser color={COLORS.primary} />
              </GorhomTouchableOpacity>
            )}

            {messageButton && (
              <GorhomTouchableOpacity onPress={onMessage} className={button()}>
                <IconMessage color={COLORS.primary} />
              </GorhomTouchableOpacity>
            )}

            {
              settingsButton && (
                <GorhomTouchableOpacity onPress={onSettings} className={button()}>
                  <IconSettings color={COLORS.primary} />
                </GorhomTouchableOpacity>
              )
            }
          </View>
        </View>
      </View>
    </React.Fragment>
  );
};

const button = tv({
  base: "bg-zinc-100 p-2 rounded-lg border border-primary"
})