import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./HamsterKombat.module.sass";
import "../../App.module.sass";

import HamsterKombatIcon from "../../assets/hamster_kombat.jpg";
import { Joystick as JoystickIcon } from "../../assets/svg/Joystick";
import { Search as SearchIcon } from "../../assets/svg/Search";
import { Wallet as WalletIcon } from "../../assets/svg/Wallet";

import GameFiIcon from "../../assets/hamster_kombat/gamefi_tokens.svg";
import P2PTradingIcon from "../../assets/hamster_kombat/p2p_trading.png";
import VillaForTheDEVTeamIcon from "../../assets/hamster_kombat/villa_for_dev_team.png";

const HamsterKombat = () => {
  const [selectedTab, setSelectedTab] = useState(1);

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
        <div className={styles.tabs_contents}>
          <div className={`${styles.content} ${selectedTab === 1 ? styles.active : ""}`}>
            <div className={styles.row}>
              <SearchIcon />
              Комбо-карточки (20-21 июня):
            </div>
            <div className={`${styles.row} ${styles.combo}`}>
              <div className={styles.card}>
                <img src={GameFiIcon} alt="" />
                <div className={styles.name}>GameFi tokens</div>
              </div>
              <div className={styles.card}>
                <img src={P2PTradingIcon} alt="" />
                <div className={styles.name}>P2P trading</div>
              </div>
              <div className={styles.card}>
                <img src={VillaForTheDEVTeamIcon} alt="" />
                <div className={styles.name}>Villa for the DEV team</div>
              </div>
            </div>
            <div className={`${styles.row} ${styles.vertical}`}>
              Где найти карточки:
              <div className={`${styles.row} ${styles.combo_description}`}>
                <span>GameFi tokens</span> - Markets
              </div>
              <div className={`${styles.row} ${styles.combo_description}`}>
                <span>P2P trading</span> - Markets
              </div>
              <div className={`${styles.row} ${styles.combo_description}`}>
                <span>Villa for the DEV team</span> - Specials
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
