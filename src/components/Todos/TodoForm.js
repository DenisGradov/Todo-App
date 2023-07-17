import styles from "./TodoForm.module.css";
function TodoForm(props) {
  const setTodoList = props.buttonFunction;
  const listWithTodo = props.listWithTodo;
  function submit(e) {
    e.preventDefault();
    const newTodo = e.target.inputTodo.value;
    if (newTodo == "") {
      alert("Your todo is empty!");
    } else {
      let hasAlredy = false;
      listWithTodo.map((todo) => {
        if (todo == newTodo) {
          hasAlredy = true;
        }
      });
      if (!hasAlredy) {
        setTodoList(e.target.inputTodo.value);
        e.target.inputTodo.value = "";
      } else {
        alert("This todo alredy in your list!");
        e.target.inputTodo.value = "";
      }
    }
  }
  return (
    <form onSubmit={submit} className={styles.todoForm}>
      <label className={styles.label}>
        <input
          className={styles.inputNewTodo}
          type="text"
          name="inputTodo"
          placeholder="Enter new todo"
        />
        <button onSubmit={submit} className={styles.submitNewTodo}>
          Submit
        </button>
      </label>
    </form>
  );
}

export default TodoForm;
