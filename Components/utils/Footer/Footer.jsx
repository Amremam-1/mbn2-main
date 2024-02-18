"use client"

import styles from "./styles.module.scss"
import Image from "next/image"
import { IoLocationOutline } from "react-icons/io5"
import { AiOutlineMail } from "react-icons/ai"
import { IoIosPhonePortrait } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"

const services = [
  {
    title: "الخدمات",
    links: [
      {
        href: "http://www.mahercp.net/job_request.html#",
        display: "موشن جرافيك",
      },
      {
        href: "http://www.mahercp.net/job_request.html#",
        display: "تصميم مواقع",
      },
      {
        href: "http://www.mahercp.net/job_request.html#",
        display: "تسويق ومشاهير",
      },
      {
        href: "http://www.mahercp.net/job_request.html#",
        display: "خدمات الانتاج الفني",
      },
      {
        href: "http://www.mahercp.net/job_request.html#",
        display: "تصوير المنتجات",
      },
      {
        href: "http://www.mahercp.net/job_request.html#",
        display: "فاست كارت",
      },
    ],
  },
]
const usefulLinks = [
  {
    title: "روابط مفيدة",
    links: [
      {
        href: "http://www.mahercp.net/job_request.html#",
        display: "من نحن",
      },
      {
        href: "http://www.mahercp.net/job_request.html#",
        display: "الأعمال",
      },
      {
        href: "http://www.mahercp.net/job_request.html#",
        display: "اتصل بنا",
      },
      {
        href: "https://mbn2.vercel.app/job-request",
        display: "طلب توظيف",
      },
      {
        href: "http://www.mahercp.net/job_request.html#",
        display: "سياسية الخصوصية",
      },
    ],
  },
]

const Footer = () => {
  const date = new Date().getFullYear();

  const goTopScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} secContainer`}>
        <div className={styles.logo}>
          <Image
            className={styles.image}
            src={"/images/logo.png"}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
          />
          <p>ماهر بن نايف للإنتاج التقني والفني والخدمات التسويقية</p>
        </div>

        <div className={styles.servcies}>
          {services.map((item, index) => (
              <div className={styles.servcies_content} key={index}>
                <h3 className={styles.title}>{item.title}</h3>

                <div className={styles.links}>
                  <ul className={styles.nav}>
                    {item.links.map((link, index) => (
                      <li key={index}>
                        <a href={link.href}>{link.display}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
          ))}
        </div>

        <div className={styles.usefulLinks}>
          {usefulLinks.map((item, index) => (
              <div className={styles.usefulLinks_content} key={index}>
                <h3 className={styles.title}>{item.title}</h3>

                <div className={styles.links}>
                  <ul className={styles.nav}>
                    {item.links.map((link, index) => (
                      <li key={index}>
                        <a href={link.href}>{link.display}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
          ))}
        </div>

        <div className={styles.contact}>
          <h3 className={styles.title}>تواصل معانا</h3>

          <div className={styles.contact_content}>
            <div className={styles.info}>
              <IoLocationOutline className={styles.icon} />
              <a
                href="http://www.mahercp.net/job_request.html#"
                className={styles.location}
              >
                جدة - الخالدية - برج الغيداء
              </a>
            </div>
            <div className={styles.info}>
              <AiOutlineMail className={styles.icon} />
              <a
                href="http://www.mahercp.net/job_request.html#"
                className={styles.location}
              >
                INFO@MAHERCP.NET
              </a>
            </div>
            <div className={styles.info}>
              <IoIosPhonePortrait className={styles.icon} />

              <a
                href="http://www.mahercp.net/job_request.html#"
                className={styles.location}
              >
                0126059755
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright_area}>
        <div className={styles.go_top}>
          <IoIosArrowUp className={styles.top} onClick={goTopScroll} />
        </div>
        <p>© {date} جميع الحقوق محفوظة</p>
      </div>
      <div className={styles.shapes}>
        <Image
          className={styles.shape1}
          src={"/images/footer-shape1.png"}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          loading="lazy"
        />
        <Image
          className={styles.shape2}
          src={"/images/footer-shape2.png"}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          loading="lazy"
        />
      </div>
    </footer>
  )
}

export default Footer
