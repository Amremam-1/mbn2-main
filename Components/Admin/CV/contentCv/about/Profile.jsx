import styles from "./styles.module.scss"

const Profile = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h1>بيانات الميلاد :</h1>
          <div className={styles.info}>
            <p>
              <span>تاريخ الميلاد</span>
              15/6/2000
            </p>
            <p>
              <span>مكان الميلاد</span>
              طنطا
            </p>
            <p>
              <span>الجنسية</span>
              مصرى
            </p>
            <p>
              <span>الديانة</span>
              مسلم
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <h1>بيانات بطاقة الأحوال المدنية :</h1>
          <div className={styles.info}>
            <p>
              <span>رقم البطاقة</span>
              30006151600398
            </p>
            <p>
              <span>مكان الإصدار</span>
              طنطا
            </p>
            <p>
              <span>تاريخ الإصدار</span>
              15-6-2019
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <h1>بيانات جواز السفر :</h1>
          <div className={styles.info}>
            <p>
              <span>رقم جواز السفر</span>
              30006151600398
            </p>
            <p>
              <span>مكان الإصدار</span>
              طنطا
            </p>
            <p>
              <span>تاريخ الإصدار</span>
              15-6-2019
            </p>
          </div>
        </div>

        <div className={styles.box}>
          <h1> بيانات التواصل :</h1>
          <div className={styles.info}>
            <p>
              <span>هاتف المنزل</span>
              0408521546
            </p>
            <p>
              <span>هاتف العمل</span>
              0110156848
            </p>
            <p>
              <span>الجوال</span>
              01065621168
            </p>
            <p>
              <span>البريد الالكتروني</span>
              info@gmail.com
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <h1> بيانات العنوان :</h1>
          <div className={styles.info}>
            <p>
              <span>الدولة</span>
              القاهره
            </p>
            <p>
              <span>المدينة</span>
              طنطا
            </p>
            <p>
              <span>العنوان الحالي</span>
              طنطا
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
