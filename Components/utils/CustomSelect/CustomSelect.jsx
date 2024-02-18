"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const CustomSelect = ({
  custom,
  label,
  width,
  placeHolder,
  optionsList,
  getSelectedOption,
  resetSelection,
  filteredOption,
  name,
  value,
  errorMsg,
  onChange,
  onBlur,
}) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(placeHolder);
  const [selectedValue, setSelectedValue] = useState(null);
  const [menuToggled, setMenuToggled] = useState(false);
  const [error, setError] = useState(null);

  const onSelectItem = (option, value) => {
    setSelectedOption(option);
    setSelectedValue(value);
    onChange(value);
    setIsListOpen(false);
    // getSelectedOption(value);
  };

  const openDropMenuHandler = () => {
    setIsListOpen((prev) => !prev);
    setMenuToggled(true);
  };

  useEffect(() => {
    if (menuToggled) {
      if (selectedValue === null) {
        setError(errorMsg);
      } else {
        setError(null);
      }

    }
  }, [selectedValue, menuToggled])


  // console.log("selectedValue: ", selectedValue);

  const clearSelection = () => {
    setSelectedOption(placeHolder);
  };

  useEffect(() => {
    if (filteredOption === null) {
      clearSelection();
    }
  }, [filteredOption]);

  //   resetSelection = () => {
  //     clearSelection();
  //   }

  return (
    <div
      className={custom ? styles.selectBoxCustom : styles.selectBox}
      style={{ width: width }}
    >
      {/* {label ? <label className={styles.label}>{label}</label> : null} */}
      <div onClick={openDropMenuHandler} className={styles.selectedItem}>
        <span className={styles.text}>{selectedOption}</span>
        {isListOpen ? (
          <MdKeyboardArrowUp className={styles.listIcon} />
        ) : (
          <MdKeyboardArrowDown className={styles.listIcon} />
        )}
      </div>
      {isListOpen ? (
        <ul className={styles.dropMenuSelection}>
          {optionsList?.map((item, index) => (
            <li
              onClick={() => onSelectItem(item.optionTitleAr, item?.value)}
              className={styles.dropMenuItem}
              key={index}
            >
              {item.optionTitleAr}
            </li>
          ))}
        </ul>
      ) : null}
      {error ? <p className={styles.errorMsg}>{error}</p> : null}
    </div>
  );
};

export default CustomSelect;
