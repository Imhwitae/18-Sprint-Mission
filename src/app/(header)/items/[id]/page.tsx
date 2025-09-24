"use client";

import TodoDetailTitle from "@/components/todo-detail/todo-detail-title";
import styles from "./page.module.css";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { TodoDetailData } from "@/types";
import UploadImg from "@/components/upload/upload-img";

export default function Page() {
  const { id } = useParams();
  const taskName = useSearchParams().get("name");
  const isCompletedStr = useSearchParams().get("isCompleted");
  const isCompleted = isCompletedStr === "true";
  const [formData, setFormData] = useState<TodoDetailData>({
    name: "",
    memo: "",
    imageUrl: "",
    isCompleted: isCompleted,
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className={styles.todo_detail_container}>
      <div className={styles.todo_detail_background}>
        <form action="" className={styles.todo_detail_contents}>
          <TodoDetailTitle
            name={taskName ?? ""}
            isCompleted={formData.isCompleted}
            setFormData={setFormData}
          />
          <div>
            <UploadImg />
          </div>
        </form>
      </div>
    </div>
  );
}
