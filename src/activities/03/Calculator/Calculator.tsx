import { useMemo, useState } from "react"
import TitleButton from "../../components/TitleButton"

export default function Calculator() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [operation, setOperation] = useState('')

    const conta = useMemo(() => {
        switch (operation) {
            case "+" :
                return num1 + num2
            case "-" :
                return num1 - num2
            case "*" :
                return num1 * num2
            case "/" :
                return num1 / num2
            case "%" :
                return num1 % num2
        }
    }, [num1, num2, operation]) 

    return (
        <>
            <main>
                <h1>Calculator</h1>
                <div className="calculator-container">
                    <div className="input-container">
                        <input type="text" className="first" onChange={(e) => {setNum1(Number(e.target.value))}} />
                        <input type="text" className="second" onChange={(e) => {setNum2(Number(e.target.value))}} />
                    </div>
                    <div className="operation-container">
                        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                            <option value="+">+</option>
                            <option value="-">-</option>
                            <option value="*">*</option>
                            <option value="/">/</option>
                            <option value="%">%</option>
                        </select>
                    </div>
                    <div className="result">
                        <p>{conta}</p>
                    </div>
                </div>
                <TitleButton />
            </main>
        </>
    )
}