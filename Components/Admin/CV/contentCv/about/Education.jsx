import styles from "./styles.module.scss"

const Education = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h1>التحصيل العلمي :</h1>
          <div className={styles.info}>
            <p>
              <span>تحصيل علمي </span>
              دراسات عليا
            </p>
            <p>
              <span>إسم المدرسة / الجامعة</span>
              جامعه طنطا
            </p>
            <p>
              <span>التخصص</span>
              هندسه برمجيات
            </p>
            <p>
              <span>الدرجه</span>
              جيد جدا
            </p>
            <p>
              <span>مدة الدراسة من سنه</span>
              2018/4/17
            </p>
            <p>
              <span>مدة الدراسة إلي سنه</span>
              2024/6/15
            </p>
          </div>
        </div>

        <div className={styles.box}>
          <h1>الدورات التدريبية :</h1>
          <div className={styles.info}>
            <p>
              <span>إسم المعهد </span>
              معهد حاسبات و معلومات
            </p>
            <p>
              <span>المدينة / البلد</span>
              طنطا
            </p>
            <p>
              <span>التخصص</span>
              هندسه برمجيات
            </p>
            <p>
              <span>من تاريخ</span>
              2018/4/17
            </p>
            <p>
              <span>إلي تاريخ</span>
              2024/6/15
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
