import { render } from "@testing-library/react-native";
import GoalItem from "./goal-item";
describe("Goal Item Suite Test", () => {
  const onPress = jest.mock();
  it("Should render the title", () => {
    const { getByText } = render(
      <GoalItem title={"Goal 1"} id={1} onPress={onPress} />
    );

    expect(getByText("Goal 1")).toBeTruthy();
  });
});
