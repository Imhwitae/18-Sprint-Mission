import { TodoData } from "@/types";

export async function getAllTodoList() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
      next: { tags: ["todo"] },
    });

    if (!response.ok) {
      alert("리스트를 불러오는데 실패했습니다.");
      console.error(response.statusText);
    }

    const todoList: TodoData[] = await response.json();

    return todoList;
  } catch (error) {
    throw new Error(`리스트를 불러오지 못했습니다. ${error}`);
  }
}
