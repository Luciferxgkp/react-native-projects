import { render } from "@testing-library/react-native";
import Title from "./index";

describe("Title Text Suite", () => {
  it("Should render the title in the screen", () => {
    const { getByText } = render(<Title>Guess My Number</Title>);

    expect(getByText("Guess My Number")).toBeTruthy();
  });
});
