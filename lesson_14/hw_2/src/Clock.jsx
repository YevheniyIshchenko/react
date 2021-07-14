import React, { useState, useEffect } from "react";
import moment from "moment";

const Clock = ({ location, offset }) => {
  const [clocks, setClock] = useState(new Date());

  useEffect(() => {
    const clock = setInterval(() => {
      setClock(new Date());
    }, 1000);

    return () => {
      clearInterval(clock);
    };
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">
        {moment(clocks).utcOffset(offset).format("LTS")}
      </div>
    </div>
  );
};

export default Clock;
