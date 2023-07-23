import styles from "./KarigarBox.module.css";
const KarigarBox = () => {
  return (
    <div className={styles.karigarBox}>
      <div className={styles.karigarBoxChild} />
      <div className={styles.karigarRect} />
      <div className={styles.amount1356000}>
        <p className={styles.amount}>Amount</p>
        <p className={styles.p}>+₹13,56,000</p>
      </div>
      <div className={styles.gold1239GmContainer}>
        <p className={styles.amount}>Gold</p>
        <p className={styles.p}>+123.9 Gm</p>
      </div>
      <div className={styles.silver142Kg}>
        <p className={styles.amount}>Silver</p>
        <p className={styles.kg}>
          <span>
            <span className={styles.span}>-</span>
            <span className={styles.kg1}>14.2 Kg</span>
          </span>
        </p>
      </div>
      <div className={styles.karigar}>Karigar</div>
    </div>
  );
};

export default KarigarBox;
