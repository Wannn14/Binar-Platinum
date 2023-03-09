import React, {useEffect, useState} from "react";

const Timer = ({duration}) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  useEffect(() => {
    if (time <= 0) {
      clearInterval();
      alert("waktumu habis");
    }
  });

  const getFormattedTime = (millsecconds) => {
    let total_secconds = parseInt(Math.floor(millsecconds / 1000));
    let total_minutes = parseInt(Math.floor(total_secconds / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));

    let secconds = parseInt(total_secconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 24);

    return `${hours}: ${minutes}: ${secconds}`;
  };
  return <div>{getFormattedTime(time)}</div>;
};

export default Timer;
