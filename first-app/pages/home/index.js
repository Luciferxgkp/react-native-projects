import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import AddNewGoalModal from "./_components/add-new-goal-modal";
import GoalList from "./_components/goal-list";

export default function Home() {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);
  const handleAddModalVisible = () => {
    setIsAddModalVisible(true);
  };

  const handleAddModalCancel = () => {
    setIsAddModalVisible(false);
  };

  const handleAddNewGoal = (title) => {
    setGoals((prev) => {
      return [
        ...prev,
        {
          title,
          id: Math.random(),
        },
      ];
    });
    setIsAddModalVisible(false);
  };

  const handleDelete = (id) => {
    setGoals((prev) => {
      return prev.filter((goal) => goal.id !== id);
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.modalButton}>
        <Button title="Add new goal" onPress={handleAddModalVisible} />
        <AddNewGoalModal
          visible={isAddModalVisible}
          onCancel={handleAddModalCancel}
          onSubmit={handleAddNewGoal}
        />
      </View>
      <View style={styles.goalsContainer}>
        <GoalList goals={goals} onPress={handleDelete} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modalButton: {
    flex: 1,
    width: "100%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  goalsContainer: {
    flex: 20,
  },
});
