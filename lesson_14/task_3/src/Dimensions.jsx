import React, { useState, useEffect } from "react";
// import { useParams } from "react-router";

const Dimensions = () => {
  // const { userId } = useParams();
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerHeight, innerWidth } = window;
    setDimensions({ width: innerWidth, height: innerHeight });
    const handleResize = (e) => {
      const { innerHeight, innerWidth } = e.target;
      setDimensions({ width: innerWidth, height: innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { width, height } = dimensions;
  return <div className="dimensions">{`${width}px  ${height}`}</div>;
};

export default Dimensions;
