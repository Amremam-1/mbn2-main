import Image from "next/image";
import styles from "./styles.module.scss";

const Spinner = ({custom}) => {
  return (
    <div className={custom ? styles.customSpinner : styles.fullWidthSpinner}>
      <div className={styles.image}>
        {/* <img src="/images/new-logo.svg" alt="" /> */}
        <Image
          src="/images/logo.png"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
         />
      </div>
    </div>
  )
}

export default Spinner;