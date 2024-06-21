import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./HamsterKombat.module.sass";
import "../../App.module.sass";

import HamsterKombatIcon from "../../assets/hamster_kombat.jpg";
import { Joystick as JoystickIcon } from "../../assets/svg/Joystick";
import { Search as SearchIcon } from "../../assets/svg/Search";
import { Wallet as WalletIcon } from "../../assets/svg/Wallet";

import GameFiIcon from "../../assets/hamster_kombat/hamster_youtube_gold_button.png";
import P2PTradingIcon from "../../assets/hamster_kombat/staking.svg";
import VillaForTheDEVTeamIcon from "../../assets/hamster_kombat/licence_bangladesh.png";

const HamsterKombat = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const num = 1;
  const scrollable = document.getElementById("main");

  function preventCollapse() {
    document.documentElement.style.marginTop = num + "px";
    document.documentElement.style.height = window.innerHeight + num + "px";
    document.documentElement.style.overflow = "hidden";
    window.scrollTo(0, num);
  }

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
    <div className={styles.main}>
      <img className={styles.game_icon} src={HamsterKombatIcon} alt="" />
      <div className={styles.title}>Hamster Kombat</div>
      <Link to={"https://t.me/hAmster_kombat_bot/start?startapp=kentId406006297"}>
        <button className={styles.play}>
          <JoystickIcon />
          Играть
        </button>
      </Link>
      <div className={styles.tab_container}>
        <div className={styles.tabs_list}>
          <div className={`${styles.tab} ${selectedTab === 1 ? styles.active : ""}`} onClick={() => setSelectedTab(1)}>
            Комбо
          </div>
          <div className={`${styles.tab} ${selectedTab === 2 ? styles.active : ""}`} onClick={() => setSelectedTab(2)}>
            Шифр
          </div>
        </div>
        <div className={styles.tabs_contents} id="main">
          <div className={`${styles.content} ${selectedTab === 1 ? styles.active : ""}`}>
            <div className={styles.row}>
              <SearchIcon />
              Комбо-карточки (21-22 июня):
            </div>
            <div className={`${styles.row} ${styles.combo}`}>
              <div className={styles.card}>
                <img src={GameFiIcon} alt="" />
                <div className={styles.name}>YouTube Gold Button</div>
              </div>
              <div className={styles.card}>
                <img src={P2PTradingIcon} alt="" />
                <div className={styles.name}>Staking</div>
              </div>
              <div className={styles.card}>
                <img src={VillaForTheDEVTeamIcon} alt="" />
                <div className={styles.name}>Licence Bangladesh</div>
              </div>
            </div>
            <div className={`${styles.row} ${styles.vertical}`}>
              Где найти карточки:
              <div className={`${styles.row} ${styles.combo_description}`}>
                <span>YouTube Gold Button</span> - Specials
              </div>
              <div className={`${styles.row} ${styles.combo_description}`}>
                <span>Staking</span> - Markets
              </div>
              <div className={`${styles.row} ${styles.combo_description}`}>
                <span>Licence Bangladesh</span> - Legal
              </div>
            </div>
            <div className={styles.row}>
              <WalletIcon />
              Получаемая награда = <span>5 000 000</span>
            </div>
          </div>
          <div className={`${styles.content} ${selectedTab === 2 ? styles.active : ""}`}>
            <div className={styles.row}>
              <SearchIcon />
              Шифр (20-21 июня) = <span>PUMP</span>
            </div>
            <div className={`${styles.row} ${styles.code}`}>
              <div className={styles.code_letter}>
                <div className={styles.position}>1</div>P<span>•--•</span>
              </div>
              <div className={styles.code_letter}>
                <div className={styles.position}>2</div>U<span>••-</span>
              </div>
              <div className={styles.code_letter}>
                <div className={styles.position}>3</div>M<span>--</span>
              </div>
              <div className={styles.code_letter}>
                <div className={styles.position}>4</div>P<span>•--•</span>
              </div>
            </div>
            <div className={`${styles.row} ${styles.vertical}`}>
              <div className={styles.row}>Чтобы активировать режим, нажмите на "Прибыль за тап" быстро 3 раза</div>
              Расшифровка:
              <div className={`${styles.row} ${styles.code_description}`}>
                <span>•</span>(точка) - это быстрый тап
              </div>
              <div className={`${styles.row} ${styles.code_description}`}>
                <span>-</span>(тире) - это долгий тап (~2 сек)
              </div>
            </div>
            <div className={styles.row}>
              <WalletIcon />
              Получаемая награда = <span>1 000 000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamsterKombat;
