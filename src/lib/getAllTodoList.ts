import { TodoData } from "@/types";

export async function getAllTodoList() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
      next: { tags: ["todo"] },
    });

    if (!response.ok) console.error(response.statusText);

    const todoList: TodoData[] = await response.json();

    return todoList;
  } catch (error) {
    console.log(error);
  }
}
