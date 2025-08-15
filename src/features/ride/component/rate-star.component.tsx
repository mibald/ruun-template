import { COLORS } from "@core/const";
import { IconStar, IconStarFilled } from "@tabler/icons-react-native";
import { useCallback } from "react";
import { TouchableOpacity } from "react-native";

interface Props {
  onSelectStars: (stars: number) => void;
  stars: number;
}

interface StartButtonProps {
  onPress: (star: number) => void;
  value: number;
  isFilled: boolean;
}

const starListValues = [1, 2, 3, 4, 5];

export const RateStar = ({ onSelectStars, stars }: Props) => {

  const StarButton = useCallback(
    ({ onPress, value, isFilled }: StartButtonProps) => {
      return (
        <TouchableOpacity onPress={() => onPress(isFilled ? value - 1 : value)}>
          <IconStar
            size={32}
            color={isFilled ? COLORS.primary : COLORS.secondary}
          />
        </TouchableOpacity>
      );
    },
    []
  );

  const StarList = useCallback(() => {
    return starListValues.map((value, index) => (
      <StarButton
        onPress={onSelectStars}
        value={value}
        key={index}
        isFilled={stars >= value}
      />
    ));
  }, [stars]);

  return <StarList />;
};
