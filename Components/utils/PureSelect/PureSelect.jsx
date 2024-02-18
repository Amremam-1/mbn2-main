import styles from "./styles.module.scss";

const PureSelect = ({
  optionsList,
  defaultOption,
  name,
  errorMsg,
  onChange,
  onBlur,
  customStyles
}) => {
  return (
    <div className={styles.pureSelect} style={customStyles}>
      <div className={errorMsg ? styles.containerError : styles.container}>
        <select name={name} id={name} onChange={onChange} onBlur={onBlur} className={styles.select}>
          <option disabled selected className={styles.option}>
            {defaultOption}
          </option>
          {optionsList?.map((item, index) => (
            <option className={styles.option} key={index} value={item.value}>
              {item.optionTitleAr}
            </option>
          ))}
        </select>
      </div>
      {errorMsg ? <p className={styles.error}>{errorMsg}</p> : null}
    </div>
  );
};

export default PureSelect;
