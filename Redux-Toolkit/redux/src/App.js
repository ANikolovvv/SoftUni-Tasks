import { useSelector, useDispatch } from "react-redux";
import styles from "./App.module.css";
import {
  clearArray,
  removeName,
  addName,
  updateName,
} from "./features/array/arraySlice";

function App() {
  const { counter, names } = useSelector((state) => state.arr);

  const dispatch = useDispatch();

  return (
    <div className={styles.App}>
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
            dispatch(updateName({ name: "Hens",value:'Venst'}));
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
