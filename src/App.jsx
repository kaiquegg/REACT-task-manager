import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
    //Verifica se existe alguma tarefa no localStorage, caso não exista, retorna um array vazio
  );

  //Salva as tarefas no localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //CASO SEJA UTILIZADA UMA API PARA PEGAR TAREFAS

  // useEffect(() => {
  //   // Não se usa async, por isso se usa função
  //   //Chamar a API - Pode utilizar o fetch ou o Axios.
  //   async function fetchTasks() {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //       {
  //         method: "GET",
  //       }
  //     );
  //     //Pega os dados que ela retorna
  //     const data = await response.json(); // Converte a resposta em JSON, que não eh o padrão

  //     // Armazana/Persistir no State
  //     setTasks(data);
  //   }
  //   fetchTasks();
  // }, []);

  //Atualizar o estado da tarefa
  function handleTask(taskId) {
    const newTasks = tasks.map((task) => {
      //Se for necessário atualizar o estado da tarefa
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      //Caso contrário, retorna a tarefa sem alterações | Mesma coisa de colocar else
      return task;
    });
    // Atualizando o status da task "tasks" para "newTasks"
    setTasks(newTasks);
  }

  function deleteTask(taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  function addTask(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Task Manager
        </h1>
        <AddTask addTask={addTask} />
        <Tasks tasks={tasks} handleTask={handleTask} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
