"use client"
import React from "react"
import { useState } from "react"
import styles from "./styles.module.scss"

const OtherInformation = ({ data }) => {
  const [hasLegalJudgements, setHasLegalJudgements] = useState(
    data.have_convicted
  )
  const [hasFriends, setHasFriends] = useState(data.have_employed_relatives)

  return (
    <div className={styles.section}>
      <div className={styles.container_information}>
        <div className={styles.box}>
          <h1>بيانات السيارة إن وجدت</h1>
          <div className={styles.info}>
            <p>
              <span>هل لديك سياره ؟</span>
              {data.have_car}
            </p>
            <p>
              <span>نوعها</span>
              {data.car_Type}
            </p>
            <p>
              <span>سنة الصنع</span>
              {data.date_of_manufacturing}
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <h1>بيانات رخصة القيادة</h1>
          <div className={styles.info}>
            <p>
              <span>نوعها</span>
              {data.licence_category}
            </p>
            <p>
              <span>رقمها</span>
              {data.licence_number}
            </p>
            <p>
              <span>تاريخ صدورها</span>
              {data.licence_date_of_issue}
            </p>
            <p>
              <span>تاريخ انتهائها</span>
              {data.licence_date_of_expiry}
            </p>
            <p>
              <span>مكان الإصدار</span>
              {data.licence_place_of_issue}
            </p>
            <p>
              <span>فصيلة الدم</span>
              {data.blood_group}
            </p>
          </div>
        </div>
        <div className={`${styles.box_boolean} ${styles.box_boo}`}>
          <div className={styles.info}>
            <p>
              <h1>كيف عرفت عن فرصة العمل؟</h1>

              {data.how_know_job ? (
                <div className={styles.true}></div>
              ) : (
                "غير محدد"
              )}
            </p>
          </div>
        </div>
        <div className={styles.box_boolean}>
          <div className={styles.info}>
            <p>
              <h1>هل صدرت بحقك أحكام قضائية؟</h1>

              {hasLegalJudgements ? (
                <div className={styles.true}>{data.convict_description}</div>
              ) : (
                "لا"
              )}
            </p>
          </div>
        </div>

        <div className={styles.box_boolean}>
          <div className={styles.info}>
            <p>
              <h1>هل لديك أصحاب من غير الأقارب يعملون في شركتنا ؟</h1>

              {hasFriends ? (
                <React.Fragment>
                  <div className={styles.box_box}>
                    <h1>بيانات الشخص :</h1>
                    <div className={styles.info}>
                      <p>
                        <span>الاسم</span>
                        {data.name}
                      </p>
                      <p>
                        <span>الوظيفه </span>
                        {data.jobTitle ? data.jobTitle : "غير محدد"}
                      </p>
                      <p>
                        <span>الهاتف</span>
                        {data.phone ? data.phone : "غير محدد"}
                      </p>
                      <p>
                        <span>الشركة</span>
                        {data.company_name ? data.phone : "غير محدد"}
                      </p>
                      <p>
                        <span>العنوان</span>
                        {data.company_address ? data.phone : "غير محدد"}
                      </p>
                    </div>
                  </div>
                </React.Fragment>
              ) : (
                "لا"
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherInformation
