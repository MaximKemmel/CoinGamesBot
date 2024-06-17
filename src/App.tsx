import { useEffect } from "react";
import "./App.module.sass";

const telegram = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    telegram.ready();
  }, []);

  const onClose = () => {
    telegram.close();
  };

  return (
    <>
      <button onClick={onClose}>Pfrhs</button>
    </>
  );
}

export default App;
