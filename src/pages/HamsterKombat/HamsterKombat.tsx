import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./HamsterKombat.module.sass";
import "../../App.module.sass";

import HamsterKombatIcon from "../../assets/hamster_kombat.jpg";
import { Joystick as JoystickIcon } from "../../assets/svg/Joystick";
import { Search as SearchIcon } from "../../assets/svg/Search";
import { Wallet as WalletIcon } from "../../assets/svg/Wallet";

const HamsterKombat = () => {
  const [selectedTab, setSelectedTab] = useState(0);

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
          <div className={`${styles.tab} ${selectedTab === 0 ? styles.active : ""}`} onClick={() => setSelectedTab(0)}>
            О проекте
          </div>
          <div className={`${styles.tab} ${selectedTab === 1 ? styles.active : ""}`} onClick={() => setSelectedTab(1)}>
            Комбо
          </div>
          <div className={`${styles.tab} ${selectedTab === 2 ? styles.active : ""}`} onClick={() => setSelectedTab(2)}>
            Шифр
          </div>
        </div>
        <div className={styles.tabs_contents}>
          <div className={`${styles.content} ${selectedTab === 0 ? styles.active : ""}`}>5445</div>
          <div className={`${styles.content} ${selectedTab === 1 ? styles.active : ""}`}>654646</div>
          <div className={`${styles.content} ${selectedTab === 2 ? styles.active : ""}`}>
            <div className={styles.row}>
              <SearchIcon />
              Новый шифр = <span>FORK</span>
            </div>
            <div className={`${styles.row} ${styles.code}`}>
              <div className={styles.code_letter}>
                <div className={styles.position}>1</div>F<span>••-•</span>
              </div>
              <div className={styles.code_letter}>
                <div className={styles.position}>2</div>O<span>---</span>
              </div>
              <div className={styles.code_letter}>
                <div className={styles.position}>3</div>R<span>•-•</span>
              </div>
              <div className={styles.code_letter}>
                <div className={styles.position}>4</div>K<span>-•-</span>
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
