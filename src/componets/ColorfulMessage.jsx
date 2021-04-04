import React from "react";

const ColerfulMassage = (props) => {
  const { color, message } = props;
  const ContentStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={ContentStyle}>{message}</p>;
};

export default ColerfulMassage;
