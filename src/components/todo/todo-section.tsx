import { TodoSectionProps } from "@/types";
import Image from "next/image";
import CheckList from "./check-list";
import styles from "./todo-section.module.css";
import Spinner from "../loading/spinner";

export default function TodoSection({
  img,
  imgAlt,
  list,
  emptyImg,
  emptyMsg,
  changeTodo,
}: TodoSectionProps) {
  return (
    <>
      <Image src={img} width={101} height={36} alt={imgAlt} priority />
      {list ? (
        list.length > 0 ? (
          <ul className={styles.custom_ul}>
            {list?.map((todo) => (
              <li key={todo.id}>
                <CheckList {...todo} changeTodo={changeTodo} />
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.empty}>
            <Image
              src={emptyImg}
              width={240}
              height={240}
              alt="리스트 없음"
              priority
            />
            <p className={styles.empty_msg}>{emptyMsg}</p>
          </div>
        )
      ) : (
        <div className={styles.loading_box}>
          <Spinner />
        </div>
      )}
    </>
  );
}
