import styles from "./styles.module.scss"

const Languages = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h1>اللغة العربية :</h1>
          <div className={styles.info}>
            <p>
              <span>مستوى التحدث باللغة</span>
              ممتاز
            </p>
            <p>
              <span>مستوى القراءه باللغة</span>
              ممتاز
            </p>
            <p>
              <span>متسوى الكتابة باللغة</span>
              جيد
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <h1>اللغة الإنجليزية :</h1>
          <div className={styles.info}>
            <p>
              <span>مستوى التحدث باللغة</span>
              ممتاز
            </p>
            <p>
              <span>مستوى القراءه باللغة</span>
              ممتاز
            </p>
            <p>
              <span>متسوى الكتابة باللغة</span>
              جيد
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Languages
