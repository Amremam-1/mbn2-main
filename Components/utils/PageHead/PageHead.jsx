import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";

const PageHead = ({ pageTitle, links }) => {
  return (
    <section className={styles.pageHead}>
      <div className={styles.container}>
        <div className={styles.pageInfo}>
          <h1 className={styles.title}>{pageTitle}</h1>
          <ul className={styles.linksList}>
            {links?.map((item, index) => (
              <li className={links.length === index+1 ? styles.linkItemActive : styles.linkItem} key={index}>
                <Link className={styles.link} href={item.link}>
                  {item.titleAr}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageHead;
