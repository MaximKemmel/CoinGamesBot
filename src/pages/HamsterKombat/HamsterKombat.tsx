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
        <div className={styles.tabs_contents}></div>
      </div>
    </div>
  );
};

export default HamsterKombat;
