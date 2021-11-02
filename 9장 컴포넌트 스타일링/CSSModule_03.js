import styles from "./CSSModule.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CSSModule = () => {
  return (
    /*<div className={[styles.wrapper, styles.inverted].join(' ')}>*/
    /*<div className={`${styles.wrapper} ${styles.inverted}`}>*/
    <div className={cx("wrapper", "inverted")}>
      안녕하세요, 저는 <span className="something">CSS Module! </span> 입니다
    </div>
  );
};

export default CSSModule;
