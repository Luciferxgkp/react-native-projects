import { fireEvent, render } from "@testing-library/react-native";
import GameOverScreen from ".";

jest.mock("../../components/ui/title", () => {
  const { Text } = require("react-native");
  return () => <Text>GAME OVER!</Text>;
});
jest.mock("../../components/ui/primary-button", () => {
  const { Text } = require("react-native");
  return () => <Text>button</Text>;
});

describe("Game over screen suite", () => {
  const roundsNumber = 5;
  const userNumber = 10;
  const onStartNewGame = jest.fn();
  it("Should return the game over text", () => {
    const { getByText } = render(
      <GameOverScreen
        roundsNumber={roundsNumber}
        userNumber={userNumber}
        onStartNewGame={onStartNewGame}
      />
    );

    expect(getByText("GAME OVER!")).toBeTruthy();
  });
  it("Should return the rounds text", () => {
    const { getByText } = render(
      <GameOverScreen
        roundsNumber={roundsNumber}
        userNumber={userNumber}
        onStartNewGame={onStartNewGame}
      />
    );

    expect(getByText("10")).toBeTruthy();
  });

  it("Should render the start new game button", () => {
    const { getByText } = render(
      <GameOverScreen
        roundsNumber={roundsNumber}
        userNumber={userNumber}
        onStartNewGame={onStartNewGame}
      />
    );

    expect(getByText("button")).toBeTruthy();
  });

  it("Should restart the game when we click the start button", () => {
    const { getByText } = render(
      <GameOverScreen
        roundsNumber={roundsNumber}
        userNumber={userNumber}
        onStartNewGame={onStartNewGame}
      />
    );

    fireEvent.press(getByText("button"));
    expect(onStartNewGame).toBeCalledTimes(1);
  });
});
