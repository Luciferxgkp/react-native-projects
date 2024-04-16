import { render } from "@testing-library/react-native";
import NumberContainer from ".";

describe("Number container test suite", () => {
  it("Should render the number text", () => {
    const { getByText } = render(<NumberContainer>12</NumberContainer>);

    expect(getByText("12")).toBeTruthy();
  });
});
