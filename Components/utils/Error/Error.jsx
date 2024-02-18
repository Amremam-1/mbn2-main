import styles from "./styles.module.scss";


const Error = ({errMsg}) => {
  return (
    <section className={styles.errorPage}>
      <div className={styles.errorPage__container}>
        <h1 className={styles.title}>
          {errMsg ? <span>{errMsg}</span> :  <span>خطأ في السيرفر</span>}
          <span>- 404</span>
        </h1>
      </div>
    </section>
  )
}

export default Error