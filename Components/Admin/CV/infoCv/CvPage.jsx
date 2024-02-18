import React from "react"
import { FaPassport } from "react-icons/fa6"
import { SlLocationPin } from "react-icons/sl"
import { HiOutlineMail } from "react-icons/hi"
import { PiPhoneCallLight } from "react-icons/pi"
import Image from "next/image"
import styles from "./styles.module.scss"

const CvPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.main_info}>
            <div className={styles.title}>
              <h3 className={styles.name}>عمرو محمد عيد امام</h3>
              <span>برمجة تطبيقات</span>
            </div>
            <div className={styles.main_info_bottom}>
              <p>
                <HiOutlineMail className={styles.icon} />
                user@email.com
              </p>
              <p>
                <PiPhoneCallLight className={styles.icon} />
                01065621168
              </p>
              <p>
                <SlLocationPin className={styles.icon} />
                القاهره - الغربيه - طنطا
              </p>
              <p>
                <FaPassport className={styles.icon} />
                مصرى
              </p>
            </div>
          </div>

          <div className={styles.info_image}>
            <Image
              className={styles.image}
              src={"/images/img.png"}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CvPage
