import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Home.module.sass";

import { GameList } from "../../data/gamesList";
import { IGame } from "../../types/game";

import JoystickIcon from "../../assets/joystick.png";
import InfoIcon from "../../assets/information.png";

const telegram = window.Telegram.WebApp;

const Home = () => {
  const [selectedGame, setSelectedGame] = useState({ id: -1 } as IGame);
  const navigate = useNavigate();

  useEffect(() => {
    telegram.ready();
    telegram.expand();
    telegram.setHeaderColor("#2C2D3F");
  }, []);

  useEffect(() => {
    if (selectedGame.id === -1) {
      if (telegram.BackButton.isVisible) {
        telegram.BackButton.hide();
      }
    } else {
      navigate(selectedGame.description_url);
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
              {game.show_description ? (
                <button onClick={() => setSelectedGame(game)}>
                  <img src={InfoIcon} alt="" />
                </button>
              ) : null}
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
};

export default Home;
