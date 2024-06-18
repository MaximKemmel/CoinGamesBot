import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import HamsterKombat from "./pages/HamsterKombat/HamsterKombat";

const telegram = window.Telegram.WebApp;

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  telegram.BackButton.onClick(() => {
    navigate(-1);
  });

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
