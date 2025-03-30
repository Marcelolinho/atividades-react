import { useState } from "react";
import TitleButton from "../../components/TitleButton";

function Counter() {
    const [counter, setCount] = useState(0)

    return (
        <>
          <main>
            <h1>{counter}</h1>
             <button onClick={() => setCount((count) => count + 1)}>
                Adicionar Valor
             </button>
          </main>
          <TitleButton />
        </>
    )
}

export default Counter