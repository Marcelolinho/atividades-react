import { Route, Routes, useNavigate } from "react-router-dom";
import TitleButton from "../components/TitleButton";
import Cache from "./Cache/Cache"
import ComponentLifeCicle from "./ComponenteLifeCicle/ComponenteLifeCicle"


function Home05() {
    const navigate = useNavigate();
  
    return (
      <>
        <main>
          <h1>InputFocus e TimerV2</h1>
          <button onClick={() => navigate("cache")}>Cache</button>
          <button onClick={() => navigate("component")}>ComponentLifeCicle</button>
        </main>
        <TitleButton />
      </>
    );
  }
  
export default function Atividade02() {
    return (
        <Routes>
        <Route path="/" element={<Home05 />} />
        <Route path="/cache" element={<Cache />} />
        <Route path="/component" element={<ComponentLifeCicle />} />
        </Routes>
    );
}