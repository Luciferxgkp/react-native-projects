import { render } from "@testing-library/react-native";
import Card from "./index";
import { Text } from "react-native";

describe("Card Test Suite", () => {
  it("Should render the card component in the screen", () => {
    const { getByText } = render(
      <Card>
        <Text>This is a card component</Text>
      </Card>
    );

    expect(getByText("This is a card component")).toBeTruthy();
  });
});
