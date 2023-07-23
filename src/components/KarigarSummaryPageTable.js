import styles from "./KarigarSummaryPageTable.module.css";
import React, { useState } from "react";

const KarigarSummaryPageTable = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  return (
    <div className={styles.karigarSummaryPageTable}>
      <div className={styles.tableRectangle} />
      <div className={styles.tableHeading}>
        <div className={styles.tableHeadingChild} />
        <div className={styles.karigarName}>Karigar Name</div>
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
  onClick={(event) => {
    setIsDeleteMode(true);
    event.preventDefault();
  }}
/>
<img
  className={styles.editIcon}
  alt=""
  src="/edit-icon.svg"
  onClick={(event) => {
    setIsEditMode(true);
    event.preventDefault();
  }}
/>
      </div>
      <div className={styles.tableFirstEntry}>
        <div className={styles.mukeshSingh}>Mukesh Singh</div>
        <div className={styles.div1}>1</div>
        <div className={styles.div2}>9717167563</div>
        <div className={styles.gm}>+123.2 Gm</div>
        <div className={styles.kg}>-19.3 Kg</div>
        <div className={styles.div3}>-₹1,32,000</div>
        {isEditMode ? (
          <input
            className={styles.editInput}
            type="text"
            value="Mukesh Singh"
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
      <img className={styles.tableLinesIcon} alt="" src="/table-lines1.svg" />
    </div>
  );
};

export default KarigarSummaryPageTable;
