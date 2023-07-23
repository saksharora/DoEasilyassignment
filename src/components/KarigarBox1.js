import styles from "./KarigarBox1.module.css";
const KarigarBox1 = () => {
  return (
    <div className={styles.karigarBox}>
      <div className={styles.karigarRect} />
      <div className={styles.amount185000DenaContainer}>
        <p className={styles.amount}>Amount</p>
        <p className={styles.p}>₹1,850.00</p>
        <p className={styles.p}>Dena</p>
      </div>
      <div className={styles.gold25966GmContainer}>
        <p className={styles.amount}>Gold</p>
        <p className={styles.p}>25.966 Gm</p>
        <p className={styles.p}>Lena</p>
      </div>
      <div className={styles.silver14200KgLenaContainer}>
        <p className={styles.silver14200Kg}>
          <span className={styles.silver}>Silver</span>
          <span className={styles.blankLine}>&nbsp;</span>
          <span className={styles.kg}>14.200 Kg</span>
        </p>
        <p className={styles.p}>Lena</p>
      </div>
      <div className={styles.party}>Party</div>
      <button className={styles.addKarigarButton}>
        <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
        <div className={styles.addParty}>Add Party</div>
      </button>
    </div>
  );
};

export default KarigarBox1;
