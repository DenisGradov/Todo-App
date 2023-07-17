import styles from "./Button.module.css";
import { RiRestartLine, RiDeleteBin6Line } from "react-icons/ri";
function Button({ cleverDellTodo }) {
  return (
    <div className={styles.deleateBox}>
      <RiRestartLine
        onClick={() => {
          cleverDellTodo(false);
        }}
        className={styles.deleateButton}
      />
      <RiDeleteBin6Line
        onClick={() => {
          cleverDellTodo(true);
        }}
        className={styles.deleateButton}
      />
    </div>
  );
}

export default Button;
