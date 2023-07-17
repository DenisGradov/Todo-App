import styles from "./TodoList.module.css";
import Todo from "./Todo";
import Button from "../UI/Button";
function TodoList(props) {
  const { listWithTodo, dellTodo, changeComplete, cleverDellTodo } = props;
  const countCompletedTodo = listWithTodo.filter(
    (todo) => !todo.completed
  ).length;
  if (listWithTodo.length === 0) {
    return <h2 className={styles.noTodo}>No todo in your list</h2>;
  } else {
    return (
      <>
        <Button cleverDellTodo={cleverDellTodo} />
        <div className={styles.todoListBlock}>
          {listWithTodo.map((todo, index) => {
            return (
              <Todo
                dellTodo={dellTodo}
                key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
                changeComplete={changeComplete}
              />
            );
          })}
        </div>
        {countCompletedTodo !== 0 && (
          <h2 className={styles.info}>
            You have completed{" "}
            {listWithTodo.filter((todo) => !todo.completed).length}
          </h2>
        )}
      </>
    );
  }
}

export default TodoList;
