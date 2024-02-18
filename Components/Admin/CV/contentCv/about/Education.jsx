import styles from "./styles.module.scss"

const Education = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h1>التحصيل العلمي :</h1>
          <div className={styles.info}>
            <p>
              دراسات عليا
              <span>تحصيل علمي </span>
            </p>
            <p>
              جامعه طنطا
              <span>إسم المدرسة / الجامعة</span>
            </p>
            <p>
              هندسه برمجيات
              <span>التخصص</span>
            </p>
            <p>
              جيد جدا
              <span>الدرجه</span>
            </p>
            <p>
              2018/4/17
              <span>مدة الدراسة من سنه</span>
            </p>
            <p>
              2024/6/15
              <span>مدة الدراسة إلي سنه</span>
            </p>
          </div>
        </div>

        <div className={styles.box}>
          <h1>الدورات التدريبية :</h1>
          <div className={styles.info}>
            <p>
              معهد حاسبات و معلومات
              <span>إسم المعهد </span>
            </p>
            <p>
              طنطا
              <span>المدينة / البلد</span>
            </p>
            <p>
              هندسه برمجيات
              <span>التخصص</span>
            </p>
            <p>
              2018/4/17
              <span>من تاريخ</span>
            </p>
            <p>
              2024/6/15
              <span>إلي تاريخ</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
