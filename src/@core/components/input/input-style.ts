import { tv } from "tailwind-variants";

export const inputStyle = tv({
  base: "max-w-full border rounded-lg h-14 flex-row items-center overflow-hidden bg-white border-zinc-400",
  variants: {
    focus: {
      true: "bg-white border-primary",
    },
  },
});
