import { FunctionComponent } from "react";
import NEWWingsTransparent1Icon from "../components/NEWWingsTransparent1Icon";
import styles from "./IPhone171.module.css";

const IPhone171: FunctionComponent = () => {
  return (
    <div className={styles.iphone171}>
      <img className={styles.mergedAsset1Icon} alt="" />
      <div className={styles.slider}>
        <img className={styles.okIcon} alt="" src="/ok.svg" />
        <img
          className={styles.property1shadIcon}
          alt=""
          src="/Property-1-shad.svg"
        />
      </div>
      <img className={styles.maskGroupIcon2} alt="" src="/Mask-group@2x.png" />
      <div className={styles.blurb1}>
        <div className={styles.text}>
          <div className={styles.licensedAndInsured}>
            licensed and insured drone photography and videography in the
            greater Kokomo and Lafayette area.
          </div>
        </div>
      </div>
      <h1 className={styles.getTheShot}>
        Get
        <br />
        The
        <br />
        Shot
      </h1>
      <h1 className={styles.makeJawsDrop}>
        Make
        <br />
        Jaws
        <br />
        Drop
      </h1>
      <div className={styles.book}>
        <button className={styles.bookToday}>Book Today</button>
      </div>
      <NEWWingsTransparent1Icon property1="Default" />
    </div>
  );
};

export default IPhone171;
