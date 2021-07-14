import React, { useState, useEffect } from "react";

const ConnectionStatus = () => {
  const [status, setStatus] = useState(true);

  const statusOn = () => {
    setStatus(true);
  };
  const statusOff = () => {
    setStatus(false);
  };

  useEffect(() => {
    window.addEventListener("online", statusOn);
    window.addEventListener("offline", statusOff);

    return () => {
      window.removeEventListener("online", statusOn);
      window.removeEventListener("offline", statusOff);
    };
  });

  const classStatus = status ? "status" : "status status_offline";

  return <div className={classStatus}>{status ? "online" : "offline"}</div>;
};

export default ConnectionStatus;
