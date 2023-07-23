import styles from "./ExportPopup.module.css";
const ExportPopup = () => {
  return (
    <div className={styles.exportPopup}>
      <div className={styles.excel}>Excel</div>
      <div className={styles.pdf}>
        <p className={styles.pdf1}>PDF</p>
      </div>
      <div className={styles.detailed}>Detailed</div>
      <div className={styles.summary}>Summary</div>
      <div className={styles.exportPopupChild} />
      <div className={styles.exportPopupItem} />
      <div className={styles.exportPopupInner} />
      <div className={styles.ellipseDiv} />
      <div className={styles.exportPopupChild1} />
      <div className={styles.exportPopupChild2} />
      <div className={styles.rectangleDiv} />
      <button className={styles.exportButton}>
        <div className={styles.exportButtonChild} />
        <div className={styles.export}>Export</div>
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
      </button>
      <button className={styles.exportButton1}>
        <div className={styles.exportButtonItem} />
        <div className={styles.print}>Print</div>
      </button>
      <img
        className={styles.materialSymbolsprintOutlineIcon}
        alt=""
        src="/materialsymbolsprintoutline.svg"
      />
    </div>
  );
};

export default ExportPopup;
