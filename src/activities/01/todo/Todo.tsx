import { useState } from "react"
import TitleButton from "../../components/TitleButton"

export default function ToDoList() {
    const [tasks, addTask] = useState<string[]>([])
    const [task, setTask] = useState("")
    
    const handleRead = () => {
        addTask([...tasks, task])
        setTask("")

    }

    return (
        <>
            <main>
                <input type="text" name="task" id="task" onChange={(text) => setTask(text.target.value)} value={task} placeholder="Adicione a Tarefa" />
                <button onClick={handleRead}>Adicionar!</button>
                {tasks.map((task, i) => (
                    <p key={i}>{task}</p>
                ))}
            </main>
            <TitleButton />
        </>
    )
}