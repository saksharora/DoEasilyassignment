import { useMemo } from "react";
import styles from "./GoldfinLogo.module.css";
const GoldfinLogo = ({
  goldfinLogoPosition,
  goldfinLogoTop,
  goldfinLogoLeft,
  goldFinColor,
}) => {
  const goldfinLogoStyle = useMemo(() => {
    return {
      position: goldfinLogoPosition,
      top: goldfinLogoTop,
      left: goldfinLogoLeft,
    };
  }, [goldfinLogoPosition, goldfinLogoTop, goldfinLogoLeft]);

  const goldFinStyle = useMemo(() => {
    return {
      color: goldFinColor,
    };
  }, [goldFinColor]);

  return (
    <div className={styles.goldfinLogo} style={goldfinLogoStyle}>
      <img
        className={styles.goldfinLogoChild}
        alt=""
        src="/rectangle-101.svg"
      />
      <img className={styles.goldfinLogoItem} alt="" src="/rectangle-100.svg" />
      <div className={styles.goldfin} style={goldFinStyle}>
        GoldFin
      </div>
    </div>
  );
};

export default GoldfinLogo;
