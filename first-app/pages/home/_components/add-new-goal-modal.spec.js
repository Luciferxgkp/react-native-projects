import AddNewGoalModal from "./add-new-goal-modal";
import { render } from "@testing-library/react-native";

describe("Add new goal modal suite", () => {
  const visible = true;
  const onCancel = jest.fn();
  const onSubmit = jest.fn();
  it("Should have basic rendering", () => {
    const { getByPlaceholderText, getByRole } = render(
      <AddNewGoalModal
        visible={visible}
        onCancel={onCancel}
        onSubmit={onSubmit}
      />
    );

    expect(getByPlaceholderText("Enter a new goal...")).toBeTruthy();
    expect(
      getByRole("button", {
        name: "Submit",
      })
    ).toBeTruthy();

    expect(
      getByRole("button", {
        name: "Cancel",
      })
    ).toBeTruthy();
  });
});
