import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsOpen, setModalVisible] = useState(false);

  function controlOpenModal() {
    setModalVisible(true);
  }
  function controlCloseModal() {
    setModalVisible(false);
  }

  function addGoalHandler(text) {
    setGoals((current) => [
      ...current,
      { text: text, id: Math.random().toString() },
    ]);
    console.log(text);
    controlCloseModal();
  }
  function deleteGoalHendler(id) {
    setGoals((current) => {
      return current.filter((x) => x.id !== id);
    });
  }
  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color={"#a065ec"}
          onPress={controlOpenModal}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsOpen}
          onCancel={controlCloseModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            alwaysBounceVertical={false}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDelete={deleteGoalHendler}
                  id={itemData.item.id}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
