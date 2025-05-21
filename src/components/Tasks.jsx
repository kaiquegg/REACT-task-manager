import { ChevronRightIcon, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

//Os parametros são utilizados para passar as props, sem incluir os proptypes
function Tasks({ tasks, handleTask, deleteTask }) {
  const navigate = useNavigate();

  function handleNavigate(task) {
    // Por questões de segurança
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => handleTask(task.id)}
            // É possivel criar um codigo JS dentro da classe
            className={`bg-slate-400 text-white text-left p-2 rounded-md w-full ${
              task.isCompleted ? "line-through" : ""
            }`}
          >
            {task.title}
          </button>
          <button
            onClick={() => handleNavigate(task)}
            className="text-white bg-slate-400 p-2 rounded-md "
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="text-white bg-slate-400 p-2 rounded-md "
          >
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
