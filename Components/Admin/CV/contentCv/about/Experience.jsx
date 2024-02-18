import styles from "./styles.module.scss"

const Experience = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container_exper}>
        <div className={styles.box}>
          <h1>الأعمال التي مارستها لاحقا :</h1>
          <div className={styles.info}>
            <p>
              مصمم جرافيك
              <span>مسمي الوظيفه</span>
            </p>
            <p>
              Route
              <span>اسم الشركه / صاحب العمل</span>
            </p>
            <p>
              شارع حسان - طنطا
              <span>عنوان الشركه </span>
            </p>
            <p>
              0100099148
              <span>هاتف الشركة </span>
            </p>
            <p>
              2018/4/17
              <span>الفتره من </span>
            </p>
            <p>
              2024/6/15
              <span>الفتره الي</span>
            </p>
            <p>
              $ 800
              <span>الراتب</span>
            </p>
            <p>
              لا يوجد
              <span>البدلات</span>
            </p>
            <p>
              مسئول عن تصيمات الخاصه بالشركه وانشاء لوجات
              <span>تفاصيل عن واجباتك </span>
            </p>
            <p>
              اريد اكتسب خبرات اكثر
              <span>سبب ترك العمل </span>
            </p>
          </div>
        </div>

        <div className={styles.box}>
          <h1>بيانات العمل :</h1>
          <div className={styles.info}>
            <p>
              لا يوجد
              <span>رقم التأمينات الإجتماعية إن وجد</span>
            </p>
            <p>
              10 صباحا
              <span> وقت العمل المناسب لك من</span>
            </p>
            <p>
              5 مساء
              <span> وقت العمل المناسب لك من</span>
            </p>
            <p>
              3/1/2024
              <span>متي تستطيع مباشرة العمل ؟</span>
            </p>
            <p>
              نعم
              <span>هل لديك إستعداد للعمل خارج مدينتك ؟ </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
