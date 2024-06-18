import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Home.module.sass";

import { GameList } from "../../data/gamesList";
import { IGame } from "../../types/game";

import JoystickIcon from "../../assets/joystick.png";
import InfoIcon from "../../assets/information.png";

const telegram = window.Telegram.WebApp;

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    telegram.ready();
    telegram.expand();
    telegram.setHeaderColor("#2C2D3F");
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.game_list}>
        {GameList.map((game: IGame) => (
          <div className={styles.game}>
            <img src={game.icon} alt="" />
            <div className={styles.name}>{game.name}</div>
            <div className={styles.buttons}>
              {game.show_description ? (
                <button onClick={() => navigate(game.description_url)}>
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
