import { Route, Routes, useNavigate } from "react-router-dom";
import TitleButton from "../components/TitleButton";
import FilteredList from "./FilteredList/FilteredList"
import Calculator from "./Calculator/Calculator"


function Home03() {
    const navigate = useNavigate();
  
    return (
      <>
        <main>
          <h1>FilteredList e Calculator</h1>
          <button onClick={() => navigate("filteredlist")}>FilteredList</button>
          <button onClick={() => navigate("calculator")}>Calculator</button>
        </main>
        <TitleButton />
      </>
    );
  }
  
export default function Atividade03() {
    return (
        <Routes>
        <Route path="/" element={<Home03 />} />
        <Route path="/filteredlist" element={<FilteredList />} />
        <Route path="/calculator" element={<Calculator />} />
        </Routes>
    );
}