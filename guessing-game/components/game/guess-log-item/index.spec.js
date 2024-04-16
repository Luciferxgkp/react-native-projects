import { render } from "@testing-library/react-native";
import GuessLogItem from ".";

describe("Guess Log Item Test Suite", () => {
  const roundNumber = 1;
  const guess = 12;
  it("Should render the round number ", () => {
    const { getByText } = render(
      <GuessLogItem roundNumber={roundNumber} guess={guess} />
    );

    expect(getByText("#1")).toBeTruthy();
  });
  it("Should render the guess ", () => {
    const { getByText } = render(
      <GuessLogItem roundNumber={roundNumber} guess={guess} />
    );

    expect(getByText("Opponent's Guess: 12")).toBeTruthy();
  });
});
