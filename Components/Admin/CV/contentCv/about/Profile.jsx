import styles from "./styles.module.scss"

const Profile = ({ data }) => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h1>بيانات الميلاد :</h1>
          <div className={styles.info}>
            <p>
              <span>تاريخ الميلاد</span>
              {data.date_of_birth}
            </p>
            <p>
              <span>مكان الميلاد</span>
              {data.place_of_birth}
            </p>
            <p>
              <span>الجنسية</span>
              {data.nationality}
            </p>
            <p>
              <span>الديانة</span>
              {data.religion}
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <h1>بيانات بطاقة الأحوال المدنية :</h1>
          <div className={styles.info}>
            <p>
              <span>رقم البطاقة</span>
              {data.no_of_id}
            </p>
            <p>
              <span>مكان الإصدار</span>
              {data.id_place_of_issue}
            </p>
            <p>
              <span>تاريخ الإصدار</span>
              {data.id_date_of_issue}
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <h1>بيانات جواز السفر :</h1>
          <div className={styles.info}>
            <p>
              <span>رقم جواز السفر</span>
              {data.no_of_passport}
            </p>
            <p>
              <span>مكان الإصدار</span>
              {data.passport_place_of_issue}
            </p>
            <p>
              <span>تاريخ الإصدار</span>
              {data.passport_date_of_issue}
            </p>
          </div>
        </div>

        <div className={styles.box}>
          <h1> بيانات التواصل :</h1>
          <div className={styles.info}>
            <p>
              <span>هاتف المنزل</span>
              {data.home_phone_no}
            </p>
            <p>
              <span>هاتف العمل</span>
              {data.work_phone_no}
            </p>
            <p>
              <span>الجوال</span>
              {data.mobile_no}
            </p>
            <p>
              <span>البريد الالكتروني</span>
              {data.email}
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <h1> بيانات العنوان :</h1>
          <div className={styles.info}>
            <p>
              <span>الدولة</span>
              {data.present_address}
            </p>
            <p>
              <span>المدينة</span>
              {data.favorite_city}
            </p>
            <p>
              <span>العنوان الحالي</span>
              {data.country}
            </p>
          </div>
        </div>
        <div className={styles.box_last}>
          <p>
            الحالة الاجتماعية : <span>{data?.sponsorship || "لا يوجد"}</span>
          </p>
          <p>
            هل سبق وعملت في هذه الشركة؟ :
            <span>
              {data?.employed_here_before !== null
                ? data.employed_here_before
                : "لا يوجد"}
            </span>
          </p>
          <p>
            هل تعمل حاليا ؟ :{" "}
            <span>
              {data?.employed_now !== null ? data.employed_now : "لا يوجد"}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile
