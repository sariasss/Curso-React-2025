import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

const App = () => {
  return (
    <div className='container mx-auto p-4'>
      <h1 className="text-3xl font-bold text-center mb-">Gestor de Tareas con Contexto</h1>
      <TaskForm/>
      <TaskList/>
    </div>
  )
}

export default App