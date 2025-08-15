import { User } from "@features/common/types";

export interface Message {
  id: string;
  created_at: Date;
  text?: string;
  image?: string;
  user: User;
}
