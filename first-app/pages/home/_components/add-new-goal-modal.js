import { useState } from "react";
import {
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const AddNewGoalModal = ({ visible, onCancel, onSubmit }) => {
  const [goal, setGoal] = useState("");

  const handleInputChange = (text) => {
    setGoal(text);
  };

  const handleSubmit = () => {
    onSubmit(goal);
    setGoal("");
  };
  return (
    <Modal animationType="slide" visible={visible} onRequestClose={onCancel}>
      <SafeAreaView style={styles.modal}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            value={goal}
            onChangeText={handleInputChange}
            placeholder="Enter a new goal..."
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Submit"
                onPress={handleSubmit}
                disabled={goal.length === 0}
              />
            </View>
            <View style={styles.button}>
              <Button title="Cancel" onPress={onCancel} color={"red"} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 40,
    gap: 10,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ffe6e6",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row-reverse",
    gap: 10,
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default AddNewGoalModal;
