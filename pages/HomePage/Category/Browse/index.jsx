import React, { memo } from "react";
import classNames from "classnames";
import { ArrowLeft, ArrowRight } from "lucide-react";

import styles from "../../../../styles/HomePage/Category/category.module.css";

function Browse() {
  return (
    <div className="flex justify-between">
      <p
        className={classNames(
          "font-inter lg:text-4xl font-semibold text-text-2 not-italic sm:text-2xl mb-14",
          styles.text_center,
        )}
      >
        Browse By Category
      </p>
      <div className={classNames("flex gap-2", styles.text_center)}>
        <div className="relative w-6 h-6 bg-second-2 rounded-full">
          <ArrowLeft />
        </div>
        <div className="relative w-6 h-6 bg-second-2 rounded-full">
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}

export default memo(Browse);
