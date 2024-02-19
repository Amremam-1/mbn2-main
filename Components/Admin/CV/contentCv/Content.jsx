"use client"
import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"
import { ImProfile } from "react-icons/im"
import styles from "./styles.module.scss"
import { PiStudentBold } from "react-icons/pi"
import { GrLanguage } from "react-icons/gr"
import { MdBusinessCenter } from "react-icons/md"
import { IoIosInformationCircle } from "react-icons/io"

import Profile from "./about/Profile"
import Education from "./about/Education"
import Experience from "./about/Experience"
import Languages from "./about/Languages"
import OtherInformation from "./about/OtherInformation"

const Content = ({ cvData }) => {
  if (!cvData || !cvData.data) {
    return (
      <div className="spinner-grow" role="status">
        <span className="sr-only">Loading ...</span>
      </div>
    )
  }

  const { data } = cvData

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeClick, setActiveClick] = useState(null)

  const handleClick = (index) => {
    setActiveClick((prevState) => (prevState === index ? null : index))
  }

  const sections = [
    {
      id: 1,
      title: "الملف الشخصي",
      icon: ImProfile,
      component: Profile,
    },
    {
      id: 2,
      title: "التحصيل العلمي",
      icon: PiStudentBold,
      component: Education,
    },
    {
      id: 3,
      title: " اللغات",
      icon: GrLanguage,
      component: Languages,
    },
    {
      id: 4,
      title: "الخبره",
      icon: MdBusinessCenter,
      component: Experience,
    },
    {
      id: 5,
      title: "معلومات اخري",
      icon: IoIosInformationCircle,
      component: OtherInformation,
    },
  ]
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content_wrapper}>
          {sections.map((section) => (
            <div
              className={`${styles.profile} ${
                activeClick === section.id ? styles.active : ""
              }`}
              key={section.id}
            >
              <div
                className={styles.content_profile}
                onClick={() => handleClick(section.id)}
              >
                <div>
                  <section.icon className={styles.icon} />
                  <h4>{section.title}</h4>
                </div>
                {activeClick === section.id ? (
                  <IoIosArrowUp className={styles.arrow} />
                ) : (
                  <IoIosArrowDown className={styles.arrow} />
                )}
              </div>

              {activeClick === section.id && (
                <div className={styles.sectionContent}>
                  <section.component data={data} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Content
