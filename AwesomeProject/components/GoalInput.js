import { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

function GoalInput(props) {
  const [text, setText] = useState("");

  function goalInputHandler(enteredText) {
    setText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(text);
    setText("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
        value={text}
      />
      <Button title="Add goal" onPress={addGoalHandler} />
    </View>
  );
}
export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
  },
});
