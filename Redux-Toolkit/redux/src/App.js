
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
        <div className={styles.box_btn}>
            <button className={styles.btn}>
              ADD
            </button>
          </div>
        <div className={styles.box_btn}>
            <button className={styles.btn}>
              UPDATE
            </button>
          </div>
        <div className={styles.box_btn}>
            <button className={styles.btn}>
              REMOVE
            </button>
          </div>
    </div>
  );
}

export default App;
