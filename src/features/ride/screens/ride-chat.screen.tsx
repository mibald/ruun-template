import React, { useCallback } from "react";
import { UserHeader } from "../component/user-header.component";
import { mockClient } from "@features/common/mocks";
import { View } from "react-native";
import { Button, Input } from "@core/components";
import { messages } from "../mocks/messages.mock";
import { Message } from "../types/message.type";
import { MessageBadge } from "../component/message-badge.component";
import { IconLogin2, IconMessage } from "@tabler/icons-react-native";
import { FlatList } from "react-native-gesture-handler";

export default function RideChatScreen() {
  const renderMessage = useCallback(({ item }: { item: Message }) => {
    return <MessageBadge message={item} />;
  }, []);

  return (
    <View className="h-full">
      <UserHeader user={mockClient} profileButton />
      <View className="w-full p-2 my-4 flex-1">
        <FlatList
          data={messages.reverse()}
          keyExtractor={(message) => message.id}
          renderItem={renderMessage}
          inverted
        />
      </View>
      <View className="flex-row items-center justify-center gap-4">
        <View style={{ width: "85%" }}>
          <Input
            placeholder="Write some message"
            containerClassName="mt-auto"
            icons={{
              right: IconMessage,
            }}
          />
        </View>
        <View style={{ width: "15%" }}>
          <Button>
            <IconLogin2 size={24} color={"#ffffff"}/>
          </Button>
        </View>
      </View>
    </View>
  );
}
