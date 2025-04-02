import { Route, Routes, useNavigate } from "react-router-dom";
import TitleButton from "../components/TitleButton";
import Timer from "./timer/Timer"
import AmiboRequest from "./amibo/AmiboRequest"


function Home02() {
    const navigate = useNavigate();
  
    return (
      <>
        <main>
          <h1>Timer e Amiibo</h1>
          <button onClick={() => navigate("timer")}>Timer</button>
          <button onClick={() => navigate("amiibo")}>Amiibo</button>
        </main>
        <TitleButton />
      </>
    );
  }
  
export default function Atividade02() {
    return (
        <Routes>
        <Route path="/" element={<Home02 />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/amiibo" element={<AmiboRequest />} />
        </Routes>
    );
}