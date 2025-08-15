import { mockClient, mockDriver } from "@features/common/mocks";
import { Message } from "../types/message.type";

export const messages: Message[] = [
  {
    id: "1",
    created_at: new Date(),
    text: "Hello World",
    user: mockClient,
  },
  {
    id: "2",
    created_at: new Date(),
    text: "Hey there, how u going??",
    user: mockDriver,
  },
  {
    id: "3",
    created_at: new Date(),
    text: "Im going well man and you?",
    user: mockClient,
  },
  {
    id: "4",
    created_at: new Date(),
    text: "Good man",
    user: mockDriver,
  },
  {
    id: "5",
    created_at: new Date(),
    image: "https://placehold.in/600/light.png",
    user: mockDriver,
  },
  {
    id: "6",
    created_at: new Date(),
    image: "https://placehold.in/600/dark.png",
    user: mockClient,
  },
];
