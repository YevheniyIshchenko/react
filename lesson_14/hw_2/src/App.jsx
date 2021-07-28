import React, { useEffect, useState } from "react";
import Clock from "./Clock.jsx";

const App = () => {
  const [btnStatus, setBtn] = useState(true);
  return (
    <>
      <button className='btn' onClick={() => setBtn(!btnStatus)}>
        Toggle
      </button>
      <div>{btnStatus && <Clock location='New York' offset={-4} />}</div>
      <div>{btnStatus && <Clock location='Kyiv' offset={3} />}</div>
      <div>{btnStatus && <Clock location='London' offset={0} />}</div>
    </>
  );
};

export default App;
