import { FunctionComponent, type CSSProperties } from "react";
import styles from "./NEWWingsTransparent1Icon.module.css";

export type NEWWingsTransparent1IconType = {
  className?: string;

  /** Variant props */
  property1?: CSSProperties["property1"];
};

const NEWWingsTransparent1Icon: FunctionComponent<
  NEWWingsTransparent1IconType
> = ({ className = "", property1 = "Default" }) => {
  return (
    <img
      className={[styles.newwingstransparent1Icon, className].join(" ")}
      alt=""
      data-property1={property1}
    />
  );
};

export default NEWWingsTransparent1Icon;
