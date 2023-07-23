import styles from "./KarigarSummaryPageTable1.module.css";
import React, { useState } from "react";

const KarigarSummaryPageTable1 = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  return (
    <div className={styles.karigarSummaryPageTable}>
      <div className={styles.tableRectangle} />
      <div className={styles.tableHeading}>
        <input className={styles.tableHeadingChild} type="text" />
        <div className={styles.partyName}>Party Name</div>
        <div className={styles.div}>#</div>
        <div className={styles.mobileNumber}>Mobile Number</div>
        <div className={styles.gold}>Gold</div>
        <div className={styles.silver}>Silver</div>
        <div className={styles.amount}>Amount</div>
        <div className={styles.actions}>Actions</div>
        <img
          className={styles.deleteIcon}
          alt=""
          src="/delete-icon.svg"
          onClick={() => setIsDeleteMode(true)}
        />
        <img
          className={styles.editIcon}
          alt=""
          src="/edit-icon.svg"
          onClick={() => setIsEditMode(true)}
        />
      </div>
      <div className={styles.tableFirstEntry}>
        <div className={styles.chanduBhaiya}>CHANDU BHAIYA</div>
        <div className={styles.div1}>1</div>
        <div className={styles.div2}>9717167563</div>
        <div className={styles.gm}>-25.966 Gm</div>
        <div className={styles.kg}>-14.200 Kg</div>
        <div className={styles.div3}>+₹1,850.00</div>
        {isEditMode ? (
          <input
            className={styles.editInput}
            type="text"
            value="CHANDU BHAIYA"
            onChange={(e) => setIsEditMode(false)}
          />
        ) : (
          <img
            className={styles.mdieditBoxIcon}
            alt=""
            src="/mdieditbox.svg"
            onClick={() => setIsEditMode(true)}
          />
        )}
      </div>
      <img className={styles.tableLinesIcon} alt="" src="/table-lines.svg" />
    </div>
  );
};

export default KarigarSummaryPageTable1;
