import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
export const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: colors.accent500,
    fontSize: 36,
    fontFamily: "open-sans-bold",
  },
});
