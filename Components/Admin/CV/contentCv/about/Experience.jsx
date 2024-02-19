import styles from "./styles.module.scss"

const Experience = ({ data }) => {
  return (
    <div className={styles.section}>
      <div className={styles.container_exper}>
        {data.previous_work.map((work, index) => (
          <div className={styles.box} key={index}>
            <h1>الأعمال التي مارستها لاحقا :</h1>
            <div className={styles.info}>
              <p>
                <span>مسمي الوظيفه</span>
                {work.job_title}
              </p>
              <p>
                <span>اسم الشركه / صاحب العمل</span>
                {work.company_name}
              </p>
              <p>
                <span>عنوان الشركه </span>
                {work.company_address || "غير محدد"}
              </p>
              <p>
                <span>هاتف الشركة </span>
                {work.company_mobile || "غير محدد"}
              </p>
              <p>
                <span>الفتره من </span>
                {work.start_date}
              </p>
              <p>
                <span>الفتره الي</span>
                {work.end_date}
              </p>
              <p>
                <span>الراتب</span> {work.salary || "غير محدد"}
              </p>
              <p>
                <span>البدلات</span> {work.allowance || "غير محدد"}
              </p>
              <p>
                <span>تفاصيل عن واجباتك </span>
                {work.description_of_duties || "غير محدد"}
              </p>
              <p>
                <span>سبب ترك العمل </span>
                {work.reason_for_quit || "غير محدد"}
              </p>
            </div>
          </div>
        ))}
        <div className={styles.box}>
          <h1>بيانات العمل :</h1>
          <div className={styles.info}>
            <p>
              <span>رقم التأمينات الإجتماعية إن وجد</span>
              {data.G_O_S_I_no || "لا يوجد"}
            </p>
            <p>
              <span> وقت العمل المناسب لك من</span>
              {data.suitable_work_time_from || "غير محدد"}
            </p>
            <p>
              <span> وقت العمل المناسب لك من</span>
              {data.suitable_work_time_to !== null
                ? data.suitable_work_time_to
                : "غير محدد"}
            </p>
            <p>
              <span>متي تستطيع مباشرة العمل ؟</span>
              {data.prefered_start_work || "غير محدد"}
            </p>
            <p>
              <span>هل لديك إستعداد للعمل خارج مدينتك ؟ </span>
              {data.work_outside_your_city ? "نعم" : "لا"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
