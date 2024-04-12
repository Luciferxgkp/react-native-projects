import { FlatList, Pressable, Text, View } from "react-native";
import GoalItem from "./goal-item";

const GoalList = ({ goals, onPress }) => {
  return (
    <FlatList
      data={goals}
      renderItem={({ item }) => (
        <GoalItem title={item.title} id={item.id} onPress={onPress} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default GoalList;
