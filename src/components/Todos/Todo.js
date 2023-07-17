import { RiTodoFill, RiDeleteBin6Line, RiCheckLine } from "react-icons/ri";
import styles from "./Todo.module.css";
function Todo(props) {
  const { dellTodo, key, id, text, completed, changeComplete } = props;
  let style;
  completed
    ? (style = styles.todoBlock)
    : (style = styles.todoBlockNotCompleted);
  return (
    <div className={style}>
      <div className={styles.section}>
        <RiTodoFill className={styles.icon} />
        <h2 className={styles.todoText}>{text}</h2>
      </div>
      <div className={styles.section}>
        <RiDeleteBin6Line
          onClick={() => dellTodo(id)}
          className={styles.button}
        />
        <RiCheckLine
          className={styles.button}
          onClick={() => changeComplete(id)}
        />
      </div>
    </div>
  );
}

export default Todo;
