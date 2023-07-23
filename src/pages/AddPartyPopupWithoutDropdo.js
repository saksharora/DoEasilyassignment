import SidebarMaster from "../components/SidebarMaster";
import KarigarBox from "../components/KarigarBox";
import KarigarSummaryPageTable from "../components/KarigarSummaryPageTable";
import KarigarPopup from "../components/KarigarPopup";
import styles from "./AddPartyPopupWithoutDropdo.module.css";
const AddPartyPopupWithoutDropdo = () => {
  return (
    <div className={styles.addPartyPopupWithoutDropdo}>
      <div className={styles.masterBackground} />
      <SidebarMaster />
      <img
        className={styles.topLeftProfile}
        alt=""
        src="/top-left-profile2.svg"
      />
      <div className={styles.metalToggle}>
        <div className={styles.metalToggleChild} />
        <div className={styles.metalToggleItem} />
        <div className={styles.gold}>Gold</div>
        <div className={styles.both}>Both</div>
        <div className={styles.silver}>Silver</div>
      </div>
      <KarigarBox />
      <div className={styles.searchKarigar}>
        <div className={styles.searchKarigarChild} />
        <div className={styles.searchKarigarItem} />
        <div className={styles.search}>Search</div>
        <div className={styles.searchKarigar1}>Search Karigar</div>
      </div>
      <KarigarSummaryPageTable />
      <img
        className={styles.deleteButtonIcon}
        alt=""
        src="/delete-button.svg"
      />
      <div className={styles.addKarigarButton}>
        <div className={styles.addKarigarButtonChild} />
        <div className={styles.addKarigar}>Add Karigar</div>
        <img className={styles.vectorIcon} alt="" src="/vector21.svg" />
      </div>
      <div className={styles.dimmingRectangle} />
      <KarigarPopup />
    </div>
  );
};

export default AddPartyPopupWithoutDropdo;
const handleAddParty = () => {
  // This function will add a new party to the system.
};
