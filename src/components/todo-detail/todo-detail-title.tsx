import styles from "./todo-detail-title.module.css";
import Image from "next/image";
import notChecked from "../../../public/not_check.svg";
import checked from "../../../public/checked.svg";
import { TodoData } from "@/types";

export default function TodoDetailTitle({
  name,
  isCompleted,
}: {
  name: string;
  isCompleted: boolean;
}) {
  return (
    <div className={styles.todo_detail_title_container}>
      <Image
        src={isCompleted ? checked : notChecked}
        width={32}
        height={32}
        alt={isCompleted ? "완료" : "미완료"}
      />
      <p className={styles.todo_detail_title}>{name}</p>
    </div>
  );
}
