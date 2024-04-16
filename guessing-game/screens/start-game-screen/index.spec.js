import { fireEvent, render } from "@testing-library/react-native";
import StartGameScreen from "./index";
import { Alert } from "react-native";

jest.mock("../../components/ui/title", () => {
  const { Text } = require("react-native");
  return () => <Text>Guess My Number</Text>;
});
jest.mock("../../components/ui/instruction-text", () => {
  const { Text } = require("react-native");
  return () => <Text>Enter a number</Text>;
});

describe("Start New Game Suite", () => {
  const onPickNumber = jest.fn();
  describe("Should return the basic rendering", () => {
    it("Should render the title", () => {
      const { getByText } = render(<StartGameScreen />);

      expect(getByText("Guess My Number")).toBeTruthy();
    });

    it("Should render the instruction text", () => {
      const { getByText } = render(<StartGameScreen />);

      expect(getByText("Enter a number")).toBeTruthy();
    });

    it("Should render the number input", () => {
      const { getByTestId } = render(<StartGameScreen />);

      expect(getByTestId("guess-my-number")).toBeTruthy();
    });

    it("Should render the reset button", () => {
      const { getByText } = render(<StartGameScreen />);

      expect(getByText("Reset")).toBeTruthy();
    });

    it("Should render the confirm button", () => {
      const { getByText } = render(<StartGameScreen />);

      expect(getByText("Confirm")).toBeTruthy();
    });
  });

  describe("Checking the functions", () => {
    it("Should run the numberInputHandler when we enter some text into the input field", () => {
      const { getByTestId } = render(<StartGameScreen />);

      fireEvent.changeText(getByTestId("guess-my-number"), "21");

      expect(getByTestId("guess-my-number").props.value).toBe("21");
    });

    it("Should show an alert when we enter an wrong number", () => {
      const { getByTestId, getByText } = render(
        <StartGameScreen onPickNumber={onPickNumber} />
      );

      jest.spyOn(Alert, "alert");

      fireEvent.changeText(getByTestId("guess-my-number"), "101");
      fireEvent.press(getByText("Confirm"));

      expect(Alert.alert).toBeCalledTimes(1);
    });

    it("Should picked a number when we click the confirm button", () => {
      const { getByTestId, getByText } = render(
        <StartGameScreen onPickNumber={onPickNumber} />
      );

      fireEvent.changeText(getByTestId("guess-my-number"), "21");
      fireEvent.press(getByText("Confirm"));

      expect(onPickNumber).toBeCalledTimes(1);
      expect(onPickNumber).toBeCalledWith(21);
    });

    it("Should reset the input when we click the reset button", () => {
      const { getByTestId, getByText } = render(
        <StartGameScreen onPickNumber={onPickNumber} />
      );

      fireEvent.press(getByText("Reset"));

      expect(getByTestId("guess-my-number").props.value).toBe("");
    });
  });
});
