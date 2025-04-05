import { Route, Routes, useNavigate } from "react-router-dom";
import TitleButton from "../components/TitleButton";
import InputFocus from "./InputFocus/InputFocus"
import TimerV2 from "./TimerV2/TimerV2"


function Home04() {
    const navigate = useNavigate();
  
    return (
      <>
        <main>
          <h1>InputFocus e TimerV2</h1>
          <button onClick={() => navigate("inputfocus")}>InputFocus</button>
          <button onClick={() => navigate("timerv2")}>TimerV2</button>
        </main>
        <TitleButton />
      </>
    );
  }
  
export default function Atividade02() {
    return (
        <Routes>
        <Route path="/" element={<Home04 />} />
        <Route path="/inputfocus" element={<InputFocus />} />
        <Route path="/timerv2" element={<TimerV2 />} />
        </Routes>
    );
}