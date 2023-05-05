import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
  return (
    <View  style={styles.item}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  text: {
    color: "white",
  },
});
export default GoalItem;
