import { useEffect } from "react";
import styles from "./App.module.sass";

import { GameList } from "./data/gameList";
import { IGame } from "./types/game";

const telegram = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    telegram.ready();
    telegram.expand();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.game_list}>
        {GameList.map((game: IGame) => (
          <div className={styles.game}>
            <img src={game.icon} alt="" />
            <div className={styles.name}>{game.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
