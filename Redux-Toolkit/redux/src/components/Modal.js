import { useDispatch } from "react-redux";
import { clearArray } from "../features/array/arraySlice";
import { closeModal } from "../features/modal/modalSlice";

function Modal() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="box">
        <h1>Model</h1>
        <button
          onClick={() => {
            dispatch(clearArray());
            dispatch(closeModal());
          }}
        >
          Confirm
        </button>
        <button
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          Cancel
        </button>
      </div>
    </>
  );
}
export default Modal;
