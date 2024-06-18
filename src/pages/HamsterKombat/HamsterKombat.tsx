import { useState } from "react";
import styles from "./HamsterKombat.module.sass";

const HamsterKombat = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className={styles.main}>
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
