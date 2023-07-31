import { filteredData } from "../../utils/helpers";
import styles from "./Filter.module.css";
import { useState } from "react";

const FilterForm = ({ data, onFilter }) => {
  const [checkedColors, setCheckedColors] = useState([]);
  const [checkedPrice, setCheckedPrice] = useState([]);

  const colorArr = data.map((x) => x.color);
  const uniqueArr = [...new Set(colorArr)];

  const handleColorChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setCheckedColors((prevColors) => [...prevColors, value]);
    } else {
      setCheckedColors((prevColors) =>
        prevColors.filter((color) => color !== value)
      );
    }
  };

  const handlePriceChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedPrice((prevPrice) => [...prevPrice, value]);
    } else {
      setCheckedPrice((prevPrice) =>
        prevPrice.filter((price) => price !== value)
      );
    }
  };

  const handleFilter = () => {
    let filtered = filteredData(data, checkedColors, checkedPrice);
    console.log(filtered, "tytryrtyrtuyrt");
    onFilter(filtered);
  };
  const handleFilterReset = () => {
    setCheckedColors([]);
    setCheckedPrice([]);
  };
  return (
    <div className={styles.filter_container}>
      <h3 className={styles.filter_title}>Filter</h3>
      <h4>Colors:</h4>
      <div className={styles.filter_box}>
        {uniqueArr.map((color) => (
          <label key={color} htmlFor={color} className={styles.label_box}>
            {color}
            <input
              id={color}
              className={styles.check}
              type="checkbox"
              value={color}
              checked={checkedColors.includes(color) || false}
              onChange={handleColorChange}
            />
          </label>
        ))}
      </div>
      <h4>Prices:</h4>
      <div className={styles.filter_box}>
        <label htmlFor="price" className={styles.label_box}>
          0:25
          <input
            className={styles.check}
            type="checkbox"
            value="0-25"
            checked={checkedPrice.includes("0-25") || false}
            onChange={handlePriceChange}
          />
        </label>
        <label htmlFor="price" className={styles.label_box}>
          25:100
          <input
            className={styles.check}
            type="checkbox"
            value="25-100"
            checked={checkedPrice.includes("25-100") || false}
            onChange={handlePriceChange}
          />
        </label>
      </div>
      <div>
        <button onClick={handleFilter}>Filter</button>
        <button onClick={handleFilterReset}>Reset</button>
      </div>
    </div>
  );
};

export default FilterForm;
