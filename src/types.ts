import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface TodoData {
  id: number;
  name: string;
  isCompleted: boolean;
}

export interface TodoDetailData {
  name: string;
  isCompleted: boolean;
  memo: string;
  imageUrl: string;
}

export interface SeparatedTodos {
  completed: TodoData[];
  incomplete: TodoData[];
}

export interface TodoSectionProps {
  img: StaticImageData;
  list: TodoData[] | undefined;
  emptyImg: StaticImageData;
  imgAlt: string;
  emptyMsg: ReactNode;
  changeTodo: Function;
}

export interface ActionState {
  status: boolean;
  error: string;
}
