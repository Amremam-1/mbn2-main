"use client"

import { FaPassport } from "react-icons/fa6"
import { SlLocationPin } from "react-icons/sl"
import { HiOutlineMail } from "react-icons/hi"
import { PiPhoneCallLight } from "react-icons/pi"
import Image from "next/image"
import styles from "./styles.module.scss"

const CvPage = ({ cvData }) => {
  if (!cvData || !cvData.data) {
    return (
      <div className="spinner-grow" role="status">
        <span className="sr-only"></span>
      </div>
    )
  }

  const { data } = cvData
  const defaultImageSrc = "/images/img.png"

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.main_info}>
            <div className={styles.title}>
              <h3 className={styles.name}>
                {data.first_name} {data.father_name} {data.family_name}
              </h3>
            </div>
            <div className={styles.main_info_bottom}>
              <p>
                <HiOutlineMail className={styles.icon} />
                {data.email}
              </p>
              <p>
                <PiPhoneCallLight className={styles.icon} />
                {data.mobile_no}
              </p>
              <p>
                <SlLocationPin className={styles.icon} />
                {data.present_address}
              </p>
              <p>
                <FaPassport className={styles.icon} />
                {data.nationality}
              </p>
            </div>
          </div>

          <div className={styles.info_image}>
            <Image
              className={styles.image}
              src={data.imageSrc || defaultImageSrc}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              loading="lazy"
              onError={(e) => {
                e.target.src = defaultImageSrc
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CvPage
