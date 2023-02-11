import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./App.module.css";
import Modal from "./components/Modal";
import People from "./components/People";
import {
  clearArray,
  removeName,
  addName,
  updateName,
} from "./features/array/arraySlice";
import { getSwapi } from "./features/swapi/swapiSlice";

function App() {
  const { counter, names } = useSelector((state) => state.arr);
  const { isOpen } = useSelector((state) => state.modal);
  const { isLoading,star } = useSelector((state) => state.swapi);

  const dispatch = useDispatch();
  useEffect(()=>{
     dispatch(getSwapi())
  },[])
  console.log(isLoading,'star')
  return (
    <div className={styles.App}>
      {<Modal/>}
      {star[0] !==undefined && <h1>{star[0].name}</h1>}
      <div className={styles.box_btn}>
        <button
          className={styles.btn}
          onClick={() => {
            dispatch(addName({ name: "Hens" }));
          }}
        >
          ADD
        </button>
      </div>
      <div className={styles.box_btn}>
        <button
          className={styles.btn}
          onClick={() => {
            dispatch(updateName({ name: "Hens", value: "Venst" }));
          }}
        >
          Update
        </button>
      </div>
      <div className={styles.box_btn}>
        <button
          className={styles.btn}
          onClick={() => {
            dispatch(removeName("Hens"));
          }}
        >
          REMOVE
        </button>
      </div>
      <div
        className={styles.box_btn}
        onClick={() => {
          dispatch(clearArray());
        }}
      >
        <button className={styles.btn}>REMOVE ALL</button>
      </div>
      <div>counter: {counter}</div>
      {names !== undefined ? (
        <div>
          Names:{" "}
          {names.map((n) => (
            <div key={n.name}>{n.name}</div>
          ))}
        </div>
      ) : (
        <p>isLoading....</p>
      )}
    </div>
  );
}

export default App;
