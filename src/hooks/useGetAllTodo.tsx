import { getAllTodoList } from "@/lib/getAllTodoList";
import { TodoData } from "@/types";
import { useEffect, useState } from "react";

export default function useGetAllTodo() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<TodoData[]>([]);

  const getTodos = async () => {
    setIsLoading(true);

    try {
      const response = await getAllTodoList();

      if (!response) {
        alert("리스트를 불러오는데 실패했습니다.");
        setError(true);
      } else {
        setData(response);
      }
    } catch (error) {
      alert("리스트를 불러오는데 실패했습니다.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return { data, isLoading, error };
}
