import styles from "./styles.module.scss"

const Languages = ({ data }) => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        {data.language.map((language, index) => (
          <div className={styles.box} key={index}>
            <h1>{language.lang}:</h1>
            <div className={styles.info}>
              <p>
                <span>مستوى التحدث باللغة</span>
                {language.speaking || "لا يوجد"}
              </p>
              <p>
                <span>مستوى القراءة باللغة</span>
                {language.reading || "لا يوجد"}
              </p>
              <p>
                <span>مستوى الكتابة باللغة</span>
                {language.writing || "لا يوجد"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Languages
