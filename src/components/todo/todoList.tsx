"use client";

import styles from "./todoList.module.css";
import todoImg from "../../../public/todo.png";
import doneImg from "../../../public/done.png";
import emptyTodo from "../../../public/empty_todo.png";
import emptyDone from "../../../public/empty_done.png";
import TodoSection from "./todo-section";
import { SeparatedTodos, TodoData } from "@/types";
import { useCallback, useEffect, useState } from "react";

export default function TodoList({ data }: { data: TodoData[] }) {
  const [allTodoList, setAllTodoList] = useState<TodoData[]>(data);
  /**
   * 분리된 리스트를 담을 상태
   */
  const [separatedTodos, setSeparatedTodos] = useState<SeparatedTodos>();

  /**
   * 리스트를 분리할 함수
   */
  const changeSeparatedTodos = useCallback(() => {
    setSeparatedTodos(
      allTodoList.reduce<SeparatedTodos>(
        (acc, todo) => {
          if (todo.isCompleted) {
            acc.completed.push(todo);
          } else {
            acc.incomplete.push(todo);
          }
          return acc;
        },
        {
          completed: [],
          incomplete: [],
        }
      )
    );
  }, [allTodoList]);

  /**
   * 리스트의 완료 / 미완료 상태를 변경한다.
   * @param id 리스트의 고유 ID
   */
  const onClickChangeTodo = (id: number) => {
    setAllTodoList((prevList) =>
      prevList.map((value) => {
        if (value.id === id) {
          return { ...value, isCompleted: !value.isCompleted };
        } else {
          return value;
        }
      })
    );
  };

  useEffect(() => {
    changeSeparatedTodos();
  }, [allTodoList]);

  return (
    <>
      <div className={styles.todo_list_container}>
        <section className={styles.todo_list_box}>
          <TodoSection
            img={todoImg}
            imgAlt="TODO 이미지"
            list={separatedTodos?.incomplete}
            emptyImg={emptyTodo}
            emptyMsg={
              <>
                할 일이 없어요.
                <br />
                TODO를 새롭게 추가해주세요!
              </>
            }
            changeTodo={onClickChangeTodo}
          />
        </section>

        <section className={styles.todo_list_box}>
          <TodoSection
            img={doneImg}
            imgAlt="TODO 이미지"
            list={separatedTodos?.completed}
            emptyImg={emptyDone}
            emptyMsg={
              <>
                아직 다 한 일이 없어요.
                <br />
                해야 할 일을 체크해보세요!
              </>
            }
            changeTodo={onClickChangeTodo}
          />
        </section>
      </div>
    </>
  );
}
