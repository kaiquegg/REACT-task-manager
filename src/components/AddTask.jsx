import { Check } from "lucide-react";
import { useState } from "react";
import Input from "./input";

function AddTask({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <h2 className="text-2xl text-slate-700 font-bold text-center mb-6">
        Add Task{" "}
      </h2>
      <Input
        type="text"
        placeholder="Enter the title of the task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Enter the description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          //Verifica se o campo title e description não estão vazios, tirando também os espaços
          if (title.trim() && description.trim()) {
            addTask(title, description);
            setTitle("");
            setDescription("");
          } else {
            alert("Plaese fill in all fields");
          }
        }}
        className="bg-slate-500 px-4 text-white py-2 rounded-md font-medium flex items-center justify-center gap-2"
      >
        <Check />
      </button>
    </div>
  );
}

export default AddTask;
