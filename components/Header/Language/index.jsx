import React, { memo, useState } from "react";
import classNames from "classnames";

import styles from "@/styles/language.module.css";

function Languages() {
  const [selectedOption, setSelectedOption] = useState("EngLish");

  const handleLanguage = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className={classNames("flex bg-black h-12", styles.language)}>
      <div className="flex container justify-end">
        <div className="flex">
          <p
            className={classNames(
              "font-poppins text-text-1 text-sm font-normal mr-2 ",
              styles.text,
            )}
          >
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a
            href="http"
            className={classNames(
              "font-poppins font-3 text-sm text-text-1 underline  ",
              styles.shopNow,
            )}
          >
            Shop Now
          </a>
        </div>
        <div className={styles.select}>
          <select
            value={selectedOption}
            onChange={handleLanguage}
            className="bg-black text-text-1 font-poppins text-sm"
          >
            <option value="en" className="">
              English
            </option>
            <option value="vn">Tiếng việt</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default memo(Languages);
