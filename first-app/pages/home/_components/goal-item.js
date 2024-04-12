import { Pressable, Text, View } from "react-native";

const GoalItem = ({ title, id, onPress }) => {
  const handleDelete = () => {
    onPress(id);
  };
  return (
    <Pressable onPress={handleDelete}>
      <View>
        <Text>{title}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;
