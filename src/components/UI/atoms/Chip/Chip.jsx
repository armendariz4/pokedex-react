import React from "react";
import "./styles.css";

export const Chip = ({ type }) => {
  const styles = {
    backgroundColor: `var(--type-${type})`,
    textTransform: `capitalize`,
  };

  return (
    <span className="chip" style={styles}>
      {type}
    </span>
  );
};
