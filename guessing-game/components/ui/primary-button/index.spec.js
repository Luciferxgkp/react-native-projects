import { fireEvent, render } from "@testing-library/react-native";
import PrimaryButton from ".";

describe("Primary Button Text Suite", () => {
  const onPress = jest.fn();
  it("Should display a button with certain text", () => {
    const { getByText } = render(
      <PrimaryButton onPress={onPress}>Confirm</PrimaryButton>
    );

    expect(getByText("Confirm")).toBeTruthy();
  });

  it("Should call the onPress function when we click the button", () => {
    const { getByText } = render(
      <PrimaryButton onPress={onPress}>Confirm</PrimaryButton>
    );

    fireEvent.press(getByText("Confirm"));
    expect(onPress).toBeCalledWith();
    expect(onPress).toBeCalledTimes(1);
  });
});
