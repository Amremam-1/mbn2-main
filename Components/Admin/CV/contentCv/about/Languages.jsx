
import styles from "./styles.module.scss"

const Languages = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h1>اللغة العربية :</h1>
          <div className={styles.info}>
            <p>
              ممتاز
              <span>مستوى التحدث باللغة</span>
            </p>
            <p>
              ممتاز
              <span>مستوى القراءه باللغة</span>
            </p>
            <p>
              جيد
              <span>متسوى الكتابة باللغة</span>
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <h1>اللغة الإنجليزية :</h1>
          <div className={styles.info}>
            <p>
              ممتاز
              <span>مستوى التحدث باللغة</span>
            </p>
            <p>
              ممتاز
              <span>مستوى القراءه باللغة</span>
            </p>
            <p>
              جيد
              <span>متسوى الكتابة باللغة</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Languages
