import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Modal,
  Image,
} from "react-native";

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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder=" Your course goal"
          onChangeText={goalInputHandler}
          value={text}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={addGoalHandler}
              color={"#5e0acc"}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color={"#31282"} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    color: "#12043",
    borderRadius: 6,
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
