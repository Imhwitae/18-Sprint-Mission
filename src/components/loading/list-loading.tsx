import Spinner from "./spinner";
import styles from "../todo/todoList.module.css";
import Image from "next/image";
import todoImg from "../../../public/todo.png";
import doneImg from "../../../public/done.png";

export default function ListLoading() {
  return (
    <>
      <div className={styles.todo_list_container}>
        <section className={styles.todo_list_box}>
          <Image src={todoImg} width={101} height={36} alt={"todo"} priority />
          <div style={{ height: "150px" }}>
            <Spinner />
          </div>
        </section>

        <section className={styles.todo_list_box}>
          <Image src={doneImg} width={101} height={36} alt={"done"} priority />
          <Spinner />
        </section>
      </div>
    </>
  );
}
