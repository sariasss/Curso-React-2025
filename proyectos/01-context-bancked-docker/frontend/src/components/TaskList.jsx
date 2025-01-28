import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
    const { tasks, deleteTask, completeTask } = useContext(TaskContext);
    const [newNameInput, setNewNameInput] = useState(0);

    return (
        <div className="p-4 bg-gray-200 rounded-lg mt-10 shadow-md">
            <h2 className="text-xl font-bold mb-4">Lista de Tareas</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} className="flex justify-between items-center p-2 mb-2 bg-white rounded-md shadow-md">
                        {newNameInput === task.id ? (
                            <input type="text" placeholder={task.title} className={`flex-1 ${task.completed ? "line-through text-gray-600" : ""}`} />
                        ) : (
                            <span className={`flex-1 ${task.completed ? "line-through text-gray-600" : ""}`}>{task.title}</span>
                        )}
                        <button className="px-3 py-1 bg-blue-600 hover:bg-blue-900 rounded mr-2 text-white" onClick={() => completeTask(task.id)}>Completar</button>
                        <button className="px-3 py-1 bg-gray-400 hover:bg-gray-600 rounded mr-2 text-white" onClick={() => setNewNameInput(newNameInput === task.id ? 0 : task.id)}>Editar</button>
                        <button className="px-3 py-1 bg-red-600 hover:bg-red-900 rounded mr-2 text-white" onClick={() => deleteTask(task.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
