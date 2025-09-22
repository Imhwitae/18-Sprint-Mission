"use client";

import Taskbar from "@/components/addTask/taskbar";
import styles from "./page.module.css";
import useGetAllTodo from "@/hooks/useGetAllTodo";
import TodoList from "@/components/todo/todoList";
import ListLoading from "@/components/loading/list-loading";

export default function Home() {
  const { data, isLoading } = useGetAllTodo();

  return (
    <div>
      <Taskbar data={data} />
      <div className={styles.list_container}>
        {isLoading ? <ListLoading /> : <TodoList data={data || []} />}
      </div>
    </div>
  );
}
