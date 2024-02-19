"use client"
import React from "react"
import { useState } from "react"
import styles from "./styles.module.scss"

const OtherInformation = () => {
  const [data, setData] = useState({
    hasLegalJudgements: true,
  })

  const [friends, setfriends] = useState({
    hasFriends: true,
  })

  return (
    <div className={styles.section}>
      <div className={styles.container_information}>
        <div className={styles.box}>
          <h1>بيانات السيارة إن وجدت</h1>
          <div className={styles.info}>
            <p>
              <span>هل لديك سياره ؟</span>
              نعم
            </p>
            <p>
              <span>نوعها</span>
              لا يوجد
            </p>
            <p>
              <span>سنة الصنع</span>
              لا يوجد
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <h1>بيانات رخصة القيادة</h1>
          <div className={styles.info}>
            <p>
              <span>نوعها</span>
              لا يوجد
            </p>
            <p>
              <span>رقمها</span>
              لا يوجد
            </p>
            <p>
              <span>تاريخ صدورها</span>
              لا يوجد
            </p>
            <p>
              <span>تاريخ انتهائها</span>
              لا يوجد
            </p>
            <p>
              <span>مكان الإصدار</span>
              لا يوجد
            </p>
            <p>
              <span>فصيلة الدم</span>
              A+
            </p>
          </div>
        </div>
        <div className={styles.box_boolean}>
          <div className={styles.info}>
            <p>
              <h1>كيف عرفت عن فرصة العمل؟</h1>

              <div className={styles.true}>
                من علي المواقع التواصل الاجتماعي وخاصه فيس بوك
              </div>
            </p>
          </div>
        </div>
        <div className={styles.box_boolean}>
          <div className={styles.info}>
            <p>
              <h1>هل صدرت بحقك أحكام قضائية؟</h1>

              {data.hasLegalJudgements ? (
                <div className={styles.true}>
                  بسبب اخذ قرض من البنك وعدم قدرتي علي دفع المصاريف .......
                </div>
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

              {friends.hasFriends ? (
                <React.Fragment>
                  <div className={styles.true}>احمد مصطفي مدير المالية</div>

                  <div className={styles.box_box}>
                    <h1>بيانات الشخص :</h1>
                    <div className={styles.info}>
                      <p>
                        <span>الاسم</span>
                        احمد مصطفي
                      </p>
                      <p>
                        <span>الوظيفه </span>
                        مدير المالية
                      </p>
                      <p>
                        <span>الهاتف</span>
                        لا يوجد
                      </p>
                      <p>
                        <span>الشركة</span>
                        لا يوجد
                      </p>
                      <p>
                        <span>العنوان</span>
                        لا يوجد
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
