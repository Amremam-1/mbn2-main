import styles from "./styles.module.scss"

const Profile = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h1>بيانات الميلاد :</h1>
          <div className={styles.info}>
            <p>
              15/6/2000
              <span>تاريخ الميلاد</span>
            </p>
            <p>
              طنطا
              <span>مكان الميلاد</span>
            </p>
            <p>
              مصرى
              <span>الجنسية</span>
            </p>
            <p>
              مسلم
              <span>الديانة</span>
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <h1>بيانات بطاقة الأحوال المدنية :</h1>
          <div className={styles.info}>
            <p>
              30006151600398
              <span>رقم البطاقة</span>
            </p>
            <p>
              طنطا
              <span>مكان الإصدار</span>
            </p>
            <p>
              15-6-2019
              <span>تاريخ الإصدار</span>
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <h1>بيانات جواز السفر :</h1>
          <div className={styles.info}>
            <p>
              30006151600398
              <span>رقم جواز السفر</span>
            </p>
            <p>
              طنطا
              <span>مكان الإصدار</span>
            </p>
            <p>
              15-6-2019
              <span>تاريخ الإصدار</span>
            </p>
          </div>
        </div>

        <div className={styles.box}>
          <h1> بيانات التواصل :</h1>
          <div className={styles.info}>
            <p>
              0408521546
              <span>هاتف المنزل</span>
            </p>
            <p>
              0110156848
              <span>هاتف العمل</span>
            </p>
            <p>
              01065621168
              <span>الجوال</span>
            </p>
            <p>
              info@gmail.com
              <span>البريد الالكتروني</span>
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <h1> بيانات العنوان :</h1>
          <div className={styles.info}>
            <p>
              القاهره
              <span>الدولة</span>
            </p>
            <p>
              طنطا
              <span>المدينة</span>
            </p>
            <p>
              طنطا
              <span>العنوان الحالي</span>
            </p>
          </div>
        </div>
        <div className={styles.box_last}>
          <p>
            الحالة الاجتماعية :<span>اعزب</span>
          </p>
          <p>
            هل سبق و عملت في هذه الشركة؟ :<span>لا</span>
          </p>
          <p>
            هل تعمل حاليا ؟ :<span>نعم</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile
