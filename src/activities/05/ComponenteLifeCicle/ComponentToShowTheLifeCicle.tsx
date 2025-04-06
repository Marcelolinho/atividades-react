import { useEffect } from "react";

export default function ComponentToShowTheLifeCicle() {
  useEffect(() => {
    console.log("Componente construído");

    const interval = setInterval(() => {
      console.log("Interval rodando");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Componente destruído");
      console.log("Destuiu o interval");
    };
  }, []);

  return (
    <div>
      <h2>Monitor de Componentes</h2>
      <p>componente exemplo</p>
    </div>
  );
}
