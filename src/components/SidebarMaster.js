import GoldfinLogo from "./GoldfinLogo";
import styles from "./SidebarMaster.module.css";
const SidebarMaster = () => {
  return (
    <div className={styles.sidebarMaster}>
      <div className={styles.menuSidebar}>
        <div className={styles.sidebar} />
        <GoldfinLogo
          goldfinLogoPosition="absolute"
          goldfinLogoTop="22px"
          goldfinLogoLeft="75px"
          goldFinColor="#462c2c"
        />
      </div>
      <div className={styles.dashboardSidebar}>
        <div className={styles.dashboardSidebarChild} />
        <div className={styles.karigar}>Karigar</div>
        <div className={styles.bullion}>Bullion</div>
        <div className={styles.supplier}>Supplier</div>
        <div className={styles.customer}>Customer</div>
        <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
        <img
          className={styles.iconMinusRectangle}
          alt=""
          src="/-icon-minus-rectangle.svg"
        />
        <div className={styles.dashboard}>Dashboard</div>
      </div>
      <div className={styles.stockSidebar}>
        <div className={styles.transactions}>Transactions</div>
        <div className={styles.addOrnament}>Add Ornament</div>
        <div className={styles.boxes}>Boxes</div>
        <div className={styles.stock}>Stock</div>
        <img className={styles.vectorIcon1} alt="" src="/vector11.svg" />
        <img
          className={styles.vectorIcon2}
          alt=""
          src="/-icon-minus-rectangle.svg"
        />
      </div>
      <div className={styles.accountsSidebar}>
        <div className={styles.cashbook}>Cashbook</div>
        <div className={styles.daybook}>Daybook</div>
        <div className={styles.accounts}>Accounts</div>
        <img
          className={styles.heroiconscurrencyRupee20So}
          alt=""
          src="/heroiconscurrencyrupee20solid.svg"
        />
        <img
          className={styles.iconMinusRectangle1}
          alt=""
          src="/-icon-minus-rectangle.svg"
        />
      </div>
      <div className={styles.settingsSidebar}>
        <div className={styles.userMatrix}>User Matrix</div>
        <div className={styles.shortcuts}>Shortcuts</div>
        <div className={styles.settings}>Settings</div>
        <img className={styles.maskGroupIcon} alt="" src="/mask-group1.svg" />
        <img
          className={styles.vectorIcon3}
          alt=""
          src="/-icon-minus-rectangle.svg"
        />
      </div>
    </div>
  );
};

export default SidebarMaster;
