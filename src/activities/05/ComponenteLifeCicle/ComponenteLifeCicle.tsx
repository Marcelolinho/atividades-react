import { useState } from "react"
import ComponentToShowTheLifeCicle from "./ComponentToShowTheLifeCicle";


export default function ComponenteLifeCicle() {
    const [show, setShow] = useState(false);
    
    return (
        <>
            <h2>Monitor de componentes</h2>
            <button onClick={() => setShow(!show)}>
                { show ? 'Desmontar' : 'Montar' }
            </button>
            {
                show ? <ComponentToShowTheLifeCicle /> : null 
            }
            
        </>
    )
}