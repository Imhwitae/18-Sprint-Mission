"use client";

import TodoDetailTitle from "@/components/todo-detail/todo-detail-title";
import styles from "./page.module.css";
import { useParams, useSearchParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();
  const taskName = useSearchParams().get("name");
  const isCompletedStr = useSearchParams().get("isCompleted");
  const isCompleted = isCompletedStr === "true";

  return (
    <div className={styles.todo_detail_container}>
      <div className={styles.todo_detail_background}>
        <div className={styles.todo_detail_contents}>
          <TodoDetailTitle name={taskName ?? ""} isCompleted={isCompleted} />
        </div>
      </div>
    </div>
  );
}
