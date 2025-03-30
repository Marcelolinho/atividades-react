import { Routes, Route, useNavigate } from "react-router-dom";
import Counter from "./counter/Counter";
import ToDo from "./todo/Todo";
import TitleButton from "../components/TitleButton";

function Home01() {
  const navigate = useNavigate();

  return (
    <>
      <main>
        <h1>Contador e ToDoList</h1>
        <button onClick={() => navigate("counter")}>Contador</button>
        <button onClick={() => navigate("todo")}>ToDoList</button>
      </main>
      <TitleButton />
    </>
  );
}

export default function Atividade01() {
  return (
    <Routes>
      <Route path="/" element={<Home01 />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/todo" element={<ToDo />} />
    </Routes>
  );
}