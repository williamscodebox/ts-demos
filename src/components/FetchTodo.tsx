import { useEffect, useState } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function FetchTodo() {
  const [data, setData] = useState<Todo>();

  useEffect(() => {
    const fetchDataAsync = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      if (!data.ok) {
        throw new Error("Failed to fetch weather");
      }
      const data2 = await data.json();
      setData(data2);
    };
    fetchDataAsync();
  }, []);

  return <div>{data ? data.title : "Loading..."}</div>;
}

export default FetchTodo;
