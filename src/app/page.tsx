"use client";

import Taskbar from "@/components/addTask/taskbar";
import styles from "./page.module.css";
import useGetAllTodo from "@/hooks/useGetAllTodo";
import TodoList from "@/components/todo/todoList";
import ListLoading from "@/components/loading/list-loading";
import { useEffect } from "react";

export default function Home() {
  const { data, isLoading, setData } = useGetAllTodo();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <Taskbar data={data} setData={setData} />
      <div className={styles.list_container}>
        {isLoading ? <ListLoading /> : <TodoList data={data || []} />}
      </div>
    </div>
  );
}
