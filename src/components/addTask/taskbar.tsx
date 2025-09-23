"use client";

import Image from "next/image";
import styles from "./taskbar.module.css";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useActionState,
  useEffect,
  useState,
} from "react";
import plus from "../../../public/plus.svg";
import plusWhite from "../../../public/plus_white.svg";
import addTaskAction from "@/actions/add-task.action";
import Spinner from "../loading/spinner";
import { TodoData } from "@/types";

export default function Taskbar({
  data,
  setData,
}: {
  data: TodoData[];
  setData: Dispatch<SetStateAction<TodoData[]>>;
}) {
  const [task, setTask] = useState("");
  const [state, formAction, isPending] = useActionState(addTaskAction, {
    status: true,
    error: "",
  });

  const onChangeTask = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  /**
   * 폼 submit때 낙관적 업데이트 + 서버에 등록 요청
   * @param formData 입력한 할 일
   */
  const handleSubmit = async (formData: FormData) => {
    const taskName = formData.get("name")?.toString() || "";
    const newTodo: TodoData = {
      id: data[0].id + 1,
      name: taskName,
      isCompleted: false,
    };

    setData((prevData) => [newTodo, ...prevData]);

    formAction(formData);
  };

  useEffect(() => {
    if (state && !state.status) {
      setData((prevData) => prevData.slice(1));
      alert(state.error);
    }
    setTask("");
  }, [state]);

  return (
    <form action={handleSubmit}>
      <div className={styles.taskbar_box}>
        <input
          name="name"
          className={styles.taskbar}
          placeholder="할 일을 입력해주세요"
          onChange={onChangeTask}
        />
        <button
          className={
            task !== ""
              ? `${styles.add_btn} ${styles.writing_task}`
              : styles.add_btn
          }
          disabled={isPending}
        >
          {task && isPending ? (
            <Spinner />
          ) : (
            <>
              <Image
                src={task !== "" ? plusWhite : plus}
                width={16}
                height={16}
                alt="추가이미지"
              />
              추가하기
            </>
          )}
        </button>
      </div>
    </form>
  );
}
