import { render, fireEvent } from "@testing-library/react-native";
import GoalList from "./goal-list";

jest.mock("./goal-item", () => {
  const { Text } = require("react-native");
  return () => <Text>Goal Item</Text>;
});

describe("Goal List Suite Test", () => {
  const onPress = jest.mock();
  const goals = [
    {
      title: "Goal 1",
      id: Math.random(),
    },
    {
      title: "Goal 2",
      id: Math.random(),
    },
    {
      title: "Goal 3",
      id: Math.random(),
    },
    {
      title: "Goal 4",
      id: Math.random(),
    },
    {
      title: "Goal 5",
      id: Math.random(),
    },
  ];
  it("Should render the goals", () => {
    const { getAllByText } = render(
      <GoalList goals={goals} onPress={onPress} />
    );

    expect(getAllByText("Goal Item")).toBeTruthy();
  });
});
