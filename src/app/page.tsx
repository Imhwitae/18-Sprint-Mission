import Taskbar from "@/components/addTask/taskbar";
import styles from "./page.module.css";
import TodoList from "@/components/todo/todoList";
import { TodoData } from "@/types";

async function getAllTodoList() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
    next: { tags: ["todo"] },
  });

  if (!response.ok) console.error(response.statusText);

  const todoList: TodoData[] = await response.json();

  return todoList;
}

export default async function Home() {
  const allTodoList = await getAllTodoList();

  return (
    <div>
      <Taskbar />
      <div className={styles.list_container}>
        <TodoList data={allTodoList} />
      </div>
    </div>
  );
}
