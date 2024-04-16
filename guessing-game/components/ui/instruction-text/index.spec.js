import { render } from "@testing-library/react-native";
import InstructionText from ".";

describe("Instruction Text Test Suite", () => {
  it("Should render the instruction text in the screen", () => {
    const { getByText } = render(
      <InstructionText>This is a instruction text</InstructionText>
    );

    expect(getByText("This is a instruction text")).toBeTruthy();
  });
});
