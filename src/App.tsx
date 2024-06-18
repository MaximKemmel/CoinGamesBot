import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./App.module.sass";

import { GameList } from "./data/gamesList";
import { IGame } from "./types/game";

import JoystickIcon from "./assets/joystick.png";
import InfoIcon from "./assets/information.png";

const telegram = window.Telegram.WebApp;

function App() {
  const [selectedGame, setSelectedGame] = useState(-1);

  useEffect(() => {
    telegram.ready();
    telegram.expand();
    telegram.setHeaderColor("#2C2D3F");
  }, []);

  useEffect(() => {
    if (selectedGame === -1) {
      if (telegram.BackButton.isVisible) {
        telegram.BackButton.hide();
      }
    } else {
      if (!telegram.BackButton.isVisible) {
        telegram.BackButton.show();
      }
    }
  }, [selectedGame]);

  return (
    <div className={styles.main}>
      <div className={styles.game_list}>
        {GameList.map((game: IGame) => (
          <div className={styles.game}>
            <img src={game.icon} alt="" />
            <div className={styles.name}>{game.name}</div>
            <div className={styles.buttons}>
              <button onClick={() => setSelectedGame(game.id)}>
                <img src={InfoIcon} alt="" />
              </button>
              <Link to={game.url}>
                <button>
                  <img className={styles.joystick} src={JoystickIcon} alt="" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
