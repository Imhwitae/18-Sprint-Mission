import styles from "./todo-detail-title.module.css";
import Image from "next/image";
import notChecked from "../../../public/not_check.svg";
import checked from "../../../public/checked.svg";
import { TodoData, TodoDetailData } from "@/types";
import { Dispatch, SetStateAction } from "react";

export default function TodoDetailTitle({
  name,
  isCompleted,
  setFormData,
}: {
  name: string;
  isCompleted: boolean;
  setFormData: Dispatch<SetStateAction<TodoDetailData>>;
}) {
  const handleClick = () => {
    setFormData((prevData) => ({ ...prevData, isCompleted: !isCompleted }));
  };

  return (
    <div
      className={
        isCompleted
          ? `${styles.todo_detail_title_container} ${styles.checked}`
          : styles.todo_detail_title_container
      }
    >
      <button type="button" onClick={handleClick}>
        <Image
          src={isCompleted ? checked : notChecked}
          width={32}
          height={32}
          alt={isCompleted ? "완료" : "미완료"}
        />
      </button>
      <p className={styles.todo_detail_title}>{name}</p>
    </div>
  );
}
