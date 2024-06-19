import { Link, useNavigate } from "react-router-dom";

import styles from "./Home.module.sass";
import "../../App.module.sass";

import { GameList } from "../../data/gamesList";
import { IGame } from "../../types/game";

import { Joystick as JoystickIcon } from "../../assets/svg/Joystick";
import { Information as InfoIcon } from "../../assets/svg/Information";

const Home = () => {
  const navigate = useNavigate();

  function ensureDocumentIsScrollable() {
    const isScrollable = document.documentElement.scrollHeight > window.innerHeight;
    // Check if the document is scrollable
    if (!isScrollable) {
      /*
      Set the document's height to 100 % of
      the viewport height plus one extra pixel
      to make it scrollable.
      */
      document.documentElement.style.setProperty("height", "calc(100vh + 1px)", "important");
    }
  }

  // Call ensureDocumentIsScrollable function when the entire page has loaded.
  window.addEventListener("load", ensureDocumentIsScrollable);

  function preventCollapse(_event) {
    if (window.scrollY === 0) {
      window.scrollTo(0, 1);
    }
  }

  // Attach the above function to the touchstart event handler of the scrollable element
  const scrollableElement = document.querySelector(".main");
  scrollableElement?.addEventListener("touchstart", preventCollapse);

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
