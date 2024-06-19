import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import HamsterKombat from "./pages/HamsterKombat/HamsterKombat";

import "./App.module.sass";

const telegram = window.Telegram.WebApp;

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  telegram.BackButton.onClick(() => {
    navigate(-1);
  });

  document.addEventListener(
    "touchmove",
    function (event) {
      event.preventDefault();
    },
    {
      passive: false,
    }
  );

  useEffect(() => {
    telegram.ready();
    telegram.expand();
    telegram.setHeaderColor("#353759");
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (pathname !== "/") {
      telegram.BackButton.show();
    } else {
      telegram.BackButton.hide();
    }
  }, [pathname]);

  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hamster_kombat" element={<HamsterKombat />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </section>
  );
}

export default App;
