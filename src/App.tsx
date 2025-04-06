// App.jsx
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Atividade01 from './activities/01/Atividade01';
import Atividade02 from './activities/02/Atividade02';
import Atividade03 from './activities/03/Atividade03';
import Atividade04 from './activities/04/Atividade04';
import Atividade05 from './activities/05/Atividade05';
import Atividade06 from './activities/06/Atividade06';
import Atividade07 from './activities/07/Atividade07';
import './App.css';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <main>
        <div className="main-container">
          <div className="presentation-container">
            <div className="presentation-box">
              <h1>Práticas de React</h1>
              <h3>By Marcelo Pozzobon</h3>
            </div>
          </div>
          <div className="activities-container">
            <div className="activities" id="activitie-01">
              <h2>Atividade useState</h2>
              <button className="activitie-button" onClick={() => navigate('/01')}>Atividade 01</button>
            </div>
            <div className="activities" id="activitie-02">
              <h2>Atividade useEffect</h2>
              <button className="activitie-button" onClick={() => navigate('/02')}>Atividade 02</button>
            </div>
            <div className="activities" id="activitie-03">
              <h2>Atividade useMemo</h2>
              <button className="activitie-button" onClick={() => navigate('/03')}>Atividade 03</button>
            </div>
            <div className="activities" id="activitie-04">
              <h2>Atividade useRef</h2>
              <button className="activitie-button" onClick={() => navigate('/04')}>Atividade 04</button>
            </div>
            <div className="activities" id="activitie-05">
              <h2>Atividade Ciclo de Vida</h2>
              <button className="activitie-button" onClick={() => navigate('/05')}>Atividade 05</button>
            </div>
            <div className="activities" id="activitie-07">
              <h2>Atividade Componentização</h2>
              <button className="activitie-button" onClick={() => navigate('/07')}>Atividade 07</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/01/*" element={<Atividade01 />} />
        <Route path="/02/*" element={<Atividade02 />} />
        <Route path="/03/*" element={<Atividade03 />} />
        <Route path="/04/*" element={<Atividade04 />} />
        <Route path="/05/*" element={<Atividade05 />} />
        <Route path="/06/*" element={<Atividade06 />} />
        <Route path="/07/*" element={<Atividade07 />} />
      </Routes>
    </Router>
  );
}
