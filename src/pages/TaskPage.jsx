import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();

  // O useSearchParams é um hook que retorna os parametros da URL
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-slate-500 p-6 space-y-4">
      <div className="flex justify-center relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 p-2 bg-slate-400 rounded-md text-white"
        >
          <ChevronLeftIcon />
        </button>
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          {title}
        </h1>
      </div>

      <div className="bg-slate-400 p-4 rounded-md shadow">
        <p className="text-slate-50">{description}</p>
      </div>
    </div>
  );
}

export default TaskPage;
