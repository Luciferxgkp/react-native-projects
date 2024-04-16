import { render } from "@testing-library/react-native";
import GameScreen from "./index";

jest.mock("@expo/vector-icons", () => {
  const { Text } = require("react-native");
  return {
    Ionicons: () => <Text>icon</Text>,
  };
});

jest.mock("../../components/ui/title", () => {
  const { Text } = require("react-native");
  return () => <Text>Opponent's Guess</Text>;
});

jest.mock("../../components/game/number-container", () => {
  const { Text } = require("react-native");
  return () => <Text>12</Text>;
});

describe("Game Screen Test Suite", () => {
  const userNumber = 12;
  const onGameOver = jest.fn();

  describe("Basic Rendering", () => {
    it("Should render the Opponent text", () => {
      const { getByText } = render(
        <GameScreen userNumber={userNumber} onGameOver={onGameOver} />
      );

      expect(getByText("Opponent's Guess")).toBeTruthy();
    });
    it("Should render the higher or lower text", () => {
      const { getByText } = render(
        <GameScreen userNumber={userNumber} onGameOver={onGameOver} />
      );

      expect(getByText("12")).toBeTruthy();
    });

    it("Should have greater button to guess higher", () => {
      const { getAllByText } = render(
        <GameScreen userNumber={userNumber} onGameOver={onGameOver} />
      );

      expect(getAllByText("icon").at(1)).toBeTruthy();
    });
    it("Should have lower button to guess higher", () => {
      const { getAllByText } = render(
        <GameScreen userNumber={userNumber} onGameOver={onGameOver} />
      );

      expect(getAllByText("icon").at(0)).toBeTruthy();
    });
  });
});
