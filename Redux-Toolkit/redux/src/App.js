import { useSelector,useDispatch } from "react-redux";
import styles from "./App.module.css";
import { clearArray } from "./features/array/arraySlice";

function App() {
  const { counter,names } = useSelector((state) => state.arr);
  const dispatch=useDispatch();


  return (
    <div className={styles.App}>
      <div className={styles.box_btn}>
        <button className={styles.btn}>ADD</button>
      </div>
      <div className={styles.box_btn}>
        <button className={styles.btn}>UPDATE</button>
      </div>
      <div className={styles.box_btn}>
        <button className={styles.btn}>REMOVE</button>
      </div>
      <div className={styles.box_btn} onClick={()=>{dispatch(clearArray())}}>
        <button className={styles.btn}>REMOVE ALL</button>
      </div>
       <div>counter: {counter}</div>
       <div>Names: {names.map(n=><div>{n.name}</div>)}</div>
    </div>
  );
}

export default App;
