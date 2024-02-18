import styles from "./styles.module.scss";

const RadioInput = ({ name, values, placeholder, onChange, onBlur, errorMsg }) => {
  return (
    <div className={styles.radioInput}>
      <div className={styles.radioWrapper}>
        <label className={styles.radioLabel}>
          <input
            className={styles.radioInput}
            type="radio"
            id={name}
            name={name}
            value={values[0]}
            // onChange={(e) => {
            //   console.log(e.target.value);
            //   console.log(typeof e.target.value);
            // }}
            onChange={onChange}
            onBlur={onBlur}
          />
          {placeholder[0]}
        </label>
        <label className={styles.radioLabel}>
          <input
            className={styles.radioInput}
            type="radio"
            id={name}
            name={name}
            value={values[1]}
            // onChange={(e) => {
            //   console.log(e.target.value);
            //   console.log(typeof e.target.value);
            // }}
            onChange={onChange}
            onBlur={onBlur}
          />
          {placeholder[1]}
        </label>
      </div>
      {errorMsg ? <p className={styles.radioErrorMsg}>{errorMsg}</p> : null}
    </div>
  );
};

export default RadioInput;
