import styles from "./styles.module.scss";

const InputBox = ({
  isTextArea,
  label,
  id,
  type,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  errorMsg,
  cols,
  rows,
  width,
  height,
  minWidth,
  isCustom,
}) => {
  return (
    <div className={isCustom ? styles.inputBoxCustom : styles.inputBox}>
      <div className={styles.inputWrapper}>
        {label ? <label htmlFor={id}>{label}</label> : null}
        {isTextArea ? (
          <textarea
            className={errorMsg ? styles.inputError : styles.input}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            cols={cols}
            rows={rows}
            id={id}
            placeholder={placeholder}
            style={{ width: width, height: height, minWidth: minWidth }}
          />
        ) : (
          <input
            className={errorMsg ? styles.inputError : styles.input}
            name={name}
            // value={name}
            onChange={onChange}
            onBlur={onBlur}
            id={id}
            type={type}
            // type="text"
            // onfocus="(this.type = 'date')"
            placeholder={placeholder}
            style={{ width: width, height: height, minWidth: minWidth }}
          />
        )}
      </div>
      {errorMsg ? <p className={styles.errorMsg}>{errorMsg}</p> : null}
    </div>
  );
};

export default InputBox;
