import styles from "./styles.module.scss"

const Education = ({ data }) => {
  return (
    <div className={styles.section}>
      <div className={styles.container_exper}>
        <div className={styles.box}>
          <h1>التحصيل العلمي :</h1>
          <div className={styles.info}>
            <p>
              <span>تحصيل علمي </span>
              {data.education.phase}
            </p>
            <p>
              <span>إسم المدرسة / الجامعة</span>
              {data.education.name_of_institute}
            </p>
            <p>
              <span>التخصص</span>
              {data.education.specialize}
            </p>
            <p>
              <span>الدرجه</span>
              {data.education.grade}
            </p>
            <p>
              <span>مدة الدراسة من سنه</span>
              {data.education.duration_study_from}
            </p>
            <p>
              <span>مدة الدراسة إلي سنه</span>
              {data.education.duration_study_to}
            </p>
          </div>
        </div>

        <div className={styles.box}>
          <h1>الدورات التدريبية :</h1>
          <div className={styles.info}>
            <p>
              <span>إسم المعهد </span>
              {data.education.name_of_institute}
            </p>
            <p>
              <span>المدينة / البلد</span>
              {data.education.city}
            </p>
            <p>
              <span>التخصص</span>
              {data.education.specialize}
            </p>
            <p>
              <span>من تاريخ</span>
              {data.education.duration_study_from}
            </p>
            <p>
              <span>إلي تاريخ</span>
              {data.education.duration_study_to}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
 