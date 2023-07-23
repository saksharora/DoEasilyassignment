import styles from "./KarigarPopup.module.css";
const KarigarPopup = () => {
  return (
    <div className={styles.karigarPopup}>
      <div className={styles.karigarPopupChild} />
      <div className={styles.addParty}>Add Party</div>
      <div className={styles.name}>Name *</div>
      <div className={styles.karigarPopupItem} />
      <div className={styles.gstin}>GSTIN</div>
      <div className={styles.karigarPopupInner} />
      <div className={styles.panNumber}>{`PAN Number *`}</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.aadhaar}>{`Aadhaar *`}</div>
      <div className={styles.karigarPopupChild1} />
      <div className={styles.enterName}>Enter Name</div>
      <div className={styles.partyGroups}>Party Groups *</div>
      <div className={styles.karigarPopupChild2} />
      <div className={styles.selectPartyGroups}>Select Party Groups</div>
      <div className={styles.phoneNumber}>Phone Number *</div>
      <div className={styles.karigarPopupChild3} />
      <div className={styles.enter10Digit}>Enter 10 digit number</div>
      <div className={styles.enter10Pan}>Enter 10 PAN number</div>
      <div className={styles.enter12Digit}>Enter 12 digit Aadhaar</div>
      <div className={styles.address}>{`Address `}</div>
      <div className={styles.karigarPopupChild4} />
      <div className={styles.enterAddress}>Enter Address</div>
      <div className={styles.city}>City</div>
      <div className={styles.karigarPopupChild5} />
      <div className={styles.enterCity}>Enter City</div>
      <div className={styles.pincode}>Pincode</div>
      <div className={styles.karigarPopupChild6} />
      <div className={styles.enterPincode}>Enter Pincode</div>
      <div className={styles.enter16Digit}>Enter 16 digit GSTIN</div>
      <img className={styles.eparrowDownIcon} alt="" src="/eparrowdown.svg" />
      <div className={styles.mditick} />
      <img className={styles.closeIcon} alt="" src="/close-icon.svg" />
      <div className={styles.karigarPartyAccount}>
        <div className={styles.karigarPartyAccountChild} />
        <div className={styles.karigar}>Karigar</div>
        <img
          className={styles.carboncloseFilledIcon}
          alt=""
          src="/carbonclosefilled.svg"
        />
      </div>
      <div className={styles.bullionPartyAccount}>
        <div className={styles.bullionPartyAccountChild} />
        <div className={styles.karigar}>Bullion</div>
        <img
          className={styles.carboncloseFilledIcon1}
          alt=""
          src="/carbonclosefilled.svg"
        />
      </div>
      <div className={styles.saveButton}>
        <div className={styles.saveButtonChild} />
        <div className={styles.save}>Save</div>
      </div>
      <div className={styles.cancelButton}>
        <div className={styles.cancelButtonChild} />
        <div className={styles.cancel}>Cancel</div>
      </div>
      <img
        className={styles.zondiconscamera}
        alt=""
        src="/zondiconscamera.svg"
      />
    </div>
  );
};

export default KarigarPopup;
