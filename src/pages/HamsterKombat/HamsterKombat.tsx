import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./HamsterKombat.module.sass";
import "../../App.module.sass";

import { HamsterKombatCodeLettersList } from "../../data/hamserKombatCodeLettersList";
import { IHamsterKombatCodeLetter } from "../../types/hamsterKombatCodeLetter";
import { HamsterKombatCardsList } from "../../data/hamsterKombatCardsList";
import { IHamsterKombatCard } from "../../types/hamsterKombatCard";

import HamsterKombatIcon from "../../assets/hamster_kombat.jpg";
import { Joystick as JoystickIcon } from "../../assets/svg/Joystick";
import { Search as SearchIcon } from "../../assets/svg/Search";
import { Wallet as WalletIcon } from "../../assets/svg/Wallet";

const HamsterKombat = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const currentCode = "FARM";

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
    <div className={styles.main} id="main">
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
        <div className={styles.tabs_contents}>
          <div className={`${styles.content} ${selectedTab === 1 ? styles.active : ""}`}>
            <div className={styles.row}>
              <SearchIcon />
              Комбо-карточки (22-23 июня):
            </div>
            <div className={`${styles.row} ${styles.combo}`}>
              {HamsterKombatCardsList.filter((card: IHamsterKombatCard) => card.isActive).map((card: IHamsterKombatCard) => (
                <div className={styles.card}>
                  <img src={card.icon} alt="" />
                  <div className={styles.name}>{card.name}</div>
                </div>
              ))}
            </div>
            <div className={`${styles.row} ${styles.vertical}`}>
              Где найти карточки:
              {HamsterKombatCardsList.filter((card: IHamsterKombatCard) => card.isActive).map((card: IHamsterKombatCard) => (
                <div className={`${styles.row} ${styles.combo_description}`}>
                  <span>{card.name}</span> - {card.group}
                </div>
              ))}
            </div>
            <div className={styles.row}>
              <WalletIcon />
              Получаемая награда = <span>5 000 000</span>
            </div>
          </div>
          <div className={`${styles.content} ${selectedTab === 2 ? styles.active : ""}`}>
            <div className={styles.row}>
              <SearchIcon />
              Шифр (21-22 июня) = <span>{currentCode}</span>
            </div>
            <div className={`${styles.row} ${styles.code}`}>
              {currentCode.split("").map((symbol: string, index: number) => (
                <div className={styles.code_letter}>
                  <div className={styles.position}>{index + 1}</div>
                  {symbol}
                  <span>
                    {HamsterKombatCodeLettersList.find((letter: IHamsterKombatCodeLetter) => letter.symbol === symbol)!.code}
                  </span>
                </div>
              ))}
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
