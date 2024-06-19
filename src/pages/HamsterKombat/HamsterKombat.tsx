import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./HamsterKombat.module.sass";
import "../../App.module.sass";

import HamsterKombatIcon from "../../assets/hamster_kombat.jpg";
import { Joystick as JoystickIcon } from "../../assets/svg/Joystick";

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
          <div className={`${styles.content} ${selectedTab === 2 ? styles.active : ""}`}>878</div>
        </div>
      </div>
    </div>
  );
};

export default HamsterKombat;
