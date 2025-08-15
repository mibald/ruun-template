import { Message } from "../types/message.type";
import dayjs from "dayjs";
import { Image, View } from "react-native";
import { Text } from "@core/components";
import { mockClient } from "@features/common/mocks";
import { tv } from "tailwind-variants";

interface Props {
  message: Message;
}

export const MessageBadge = ({ message }: Props) => {
  const user = mockClient;
  const imTheOwner = message.user.uid === user.uid;

  const textColor = imTheOwner ? "text-white" : "text-black";
  const {
    container,
    message: messageStyle,
    text,
  } = messageTailwind({ isOwner: imTheOwner });

  return (
    <View className={container()}>
      <View className={messageStyle()}>
        {message.text && (
          <Text className={textColor} weight="semibold">
            {message.text}
          </Text>
        )}

        {message.image && (
          <Image
            source={{
              uri: message.image,
            }}
            className="h-80 w-48 rounded-lg"
            resizeMode="cover"
          />
        )}

        <Text size="xs" className={text()}>
          {dayjs(message.created_at).format("hh:mm A")}
        </Text>
      </View>
    </View>
  );
};

const messageTailwind = tv({
  slots: {
    container: "w-full justify-center my-1",
    message: "p-2 rounded-lg",
    text: "text-white text-right",
  },
  variants: {
    isOwner: {
      true: {
        container: "items-end",
        message: "bg-primary",
        text: "text-white text-right",
      },
      false: {
        container: "items-start",
        message: "bg-zinc-200",
        text: "text-black text-left",
      },
    },
  },
});
