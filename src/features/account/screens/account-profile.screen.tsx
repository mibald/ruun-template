import { Button, Input, Text } from "@core/components";
import { mockClient } from "@features/common/mocks";
import { IconCamera } from "@tabler/icons-react-native";
import React from "react";
import { Image, View } from "react-native";

export default function AccountProfileScreen() {
    const user = mockClient;

    return (
        <React.Fragment>
            <View className="items-center justify-center gap-4">
                <View className="mx-auto relative">

                    <Image
                        source={{
                            uri: user.picture
                        }}
                        className="w-32 h-32 rounded-full border-4 border-primary"
                    />
                    <View className="w-8 h-8 rounded-full bg-primary absolute items-center justify-center right-0 bottom-0">
                        <IconCamera size={20} color={"#fff"}/>
                    </View>
                    
                </View>
                <Text size="2xl" weight="semibold">{user.full_name}</Text>
            </View>
            <View className="gap-4">
                <Input label="Full Name" value={user.full_name} />
                <Input label="Birth Day" value={user.created_at} type="date" disabled />
                <Button title="Continue" disabled />
            </View>
        </React.Fragment>
    )
}