import { Link, useNavigate } from "react-router-dom";

import styles from "./Home.module.sass";
import "../../App.module.sass";

import { GameList } from "../../data/gamesList";
import { IGame } from "../../types/game";

import { Joystick as JoystickIcon } from "../../assets/svg/Joystick";
import { Information as InfoIcon } from "../../assets/svg/Information";

const Home = () => {
  const navigate = useNavigate();

  const num = 9999;
  const scrollable = document.getElementById("main");

  // The preventCollapse function should be called when the scrollable content scrollTop is not equal to zero.
  function preventCollapse() {
    document.documentElement.style.marginTop = num + "px";
    document.documentElement.style.height = window.innerHeight + num + "px";
    document.documentElement.style.overflow = "hidden";
    window.scrollTo(0, num);
  }

  // The allowCollapse function should be called when the scrollable content is finished being touched.
  // Do not use this function if you want to lock the mini app completely on scroll.
  function allowCollapse() {
    document.documentElement.style.marginTop = "auto";
    document.documentElement.style.height = "auto";
    document.documentElement.style.overflow = "auto";
  }

  document.body.addEventListener("touchstart", function () {
    if (scrollable?.scrollTop !== 0) {
      preventCollapse();
    }
  });
  scrollable?.addEventListener("touchend", function () {
    allowCollapse();
  });

  return (
    <div className={styles.main} id="main">
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
