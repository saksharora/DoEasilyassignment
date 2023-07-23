import KarigarSummaryPageTable1 from "../components/KarigarSummaryPageTable1";
import ExportPopup from "../components/ExportPopup";
import KarigarBox1 from "../components/KarigarBox1";
import styles from "./KarigarSummaryPage.module.css";

const KarigarSummaryPage = () => {
  return (
    <div className={styles.karigarSummaryPage}>
      <div className={styles.karigarSummaryPageChild} />
      <img
        className={styles.topLeftProfile}
        alt=""
        src="/top-left-profile.svg"
      />
      <div className={styles.searchKarigar}>
        <input className={styles.searchKarigarChild} type="text" />
        <div className={styles.searchKarigarItem} />
        <div className={styles.search}>Search</div>
        <div className={styles.searchKarigar1}>Search Karigar</div>
      </div>
      <KarigarSummaryPageTable1 />
      <button className={styles.exportButton}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <div className={styles.export}>Export</div>
      </button>
      <ExportPopup />
      <div className={styles.metalToggle}>
        <div className={styles.metalToggleChild} />
        <div className={styles.gold}>Gold</div>
        <div className={styles.both}>Both</div>
        <div className={styles.silver}>Silver</div>
      </div>
      <div className={styles.sidebarMaster}>
        <div className={styles.doeasilyLogo}>
          <div className={styles.doeasily}>
            <span>Do</span>
            <span className={styles.easily}>easily</span>
          </div>
          <div className={styles.businessMadeEasy}>Business Made Easy</div>
        </div>
        <div className={styles.dashboardSidebar}>
          <div className={styles.dashboardSidebarChild} />
          <div className={styles.karigar}>Karigar</div>
          <div className={styles.bullion}>Bullion</div>
          <div className={styles.supplier}>Supplier</div>
          <div className={styles.customer}>Customer</div>
          <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
          <img
            className={styles.vectorIcon2}
            alt=""
            src="/-icon-minus-rectangle.svg"
          />
          <div className={styles.parties}>Parties</div>
        </div>
      </div>
      <KarigarBox1 />
    </div>
  );
};

export default KarigarSummaryPage;
