import { Link, useNavigate } from "react-router-dom";

import styles from "./Home.module.sass";
import "../../App.module.sass";

import { GameList } from "../../data/gamesList";
import { IGame } from "../../types/game";

import { Joystick as JoystickIcon } from "../../assets/svg/Joystick";
import { Information as InfoIcon } from "../../assets/svg/Information";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.main} main`}>
      <div className={styles.title}>Список игр</div>
      <div className={styles.game_list}>
        {GameList.map((game: IGame, index: number) => (
          <div className={`${styles.game} ${index > 0 ? styles.bordered : ""}`}>
            <img src={game.icon} alt="" />
            <div className={styles.name}>{game.name}</div>
            <div className={styles.buttons}>
              {game.show_description ? (
                <button className={styles.info} onClick={() => navigate(game.description_url)}>
                  <InfoIcon />
                </button>
              ) : null}
              <Link to={game.url}>
                <button className={styles.play}>
                  <JoystickIcon />
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
