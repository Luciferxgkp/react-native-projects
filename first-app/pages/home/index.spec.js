import Home from "./index";
import { render, fireEvent } from "@testing-library/react-native";

jest.mock("./_components/add-new-goal-modal", () => {
  const { Text } = require("react-native");
  return ({ visible }) => <Text>{visible ? "open" : "close"}</Text>;
});

jest.mock("./_components/goal-list", () => {
  const { Text } = require("react-native");
  return () => <Text>goal list</Text>;
});

describe("Home page suite", () => {
  it("Should have a button to open an modal", () => {
    const { getByRole } = render(<Home />);
    expect(
      getByRole("button", {
        name: "Add new goal",
      })
    ).toBeDefined();
  });

  it("Should open an modal when we press the add new goal button", () => {
    const { getByText, getByRole } = render(<Home />);

    expect(getByText("close")).toBeTruthy();
    fireEvent.press(
      getByRole("button", {
        name: "Add new goal",
      })
    );
    expect(getByText("open")).toBeTruthy();
  });

  it("Should show the goal list", () => {
    const { getByText } = render(<Home />);

    expect(getByText("goal list")).toBeTruthy();
  });
});
