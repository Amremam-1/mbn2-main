import styles from "./styles.module.scss"

const Experience = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container_exper}>
        <div className={styles.box}>
          <h1>الأعمال التي مارستها لاحقا :</h1>
          <div className={styles.info}>
            <p>
              <span>مسمي الوظيفه</span>
              مصمم جرافيك
            </p>
            <p>
              <span>اسم الشركه / صاحب العمل</span>
              Route
            </p>
            <p>
              <span>عنوان الشركه </span>
              شارع حسان - طنطا
            </p>
            <p>
              <span>هاتف الشركة </span>
              0100099148
            </p>
            <p>
              <span>الفتره من </span>
              2018/4/17
            </p>
            <p>
              <span>الفتره الي</span>
              2024/6/15
            </p>
            <p>
              <span>الراتب</span>$ 800
            </p>
            <p>
              <span>البدلات</span>
              لا يوجد
            </p>
            <p>
              <span>تفاصيل عن واجباتك </span>
              مسئول عن تصيمات الخاصه بالشركه وانشاء لوجات
            </p>
            <p>
              <span>سبب ترك العمل </span>
              اريد اكتسب خبرات اكثر
            </p>
          </div>
        </div>

        <div className={styles.box}>
          <h1>بيانات العمل :</h1>
          <div className={styles.info}>
            <p>
              <span>رقم التأمينات الإجتماعية إن وجد</span>
              لا يوجد
            </p>
            <p>
              <span> وقت العمل المناسب لك من</span>
              10 صباحا
            </p>
            <p>
              <span> وقت العمل المناسب لك من</span>5 مساء
            </p>
            <p>
              <span>متي تستطيع مباشرة العمل ؟</span>
              3/1/2024
            </p>
            <p>
              <span>هل لديك إستعداد للعمل خارج مدينتك ؟ </span>
              نعم
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
