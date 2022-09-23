import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {

  const [count, setCount] = useState(0);

  function increase() {
      setCount(count + 1);
  }

  function decrease() {
      setCount(count - 1);
  }

  const styles = {
      container: `flex flex-row w-fit`,
      // subContainer: `flex flex-col content-center flex-wrap`,
      subContainer: ``,
      image: `rounded w-fit`,
      waterContainer: `h-3/6 w-3/6 bg-red-600 items-center content-center text-center`,
      water: `flex flex-row m-auto items-center content-center text-center`,
      waterBtn: `inline-block bg-green-500 border-0 w-16 m-2.5 text-center text-white text-xl font-bold py-2 px-6 focus:outline-none hover:bg-green-600 rounded`,
      glassImage: ``,

  };

  return (
      <div className={styles.container}>
          <Sidebar />
          <div className={styles.subContainer}>
              <img
                  className={styles.image}
                  src="../src/assets/start.jpg"
                  alt="landing-img"
                  height={10}
                  width={10}
              ></img>
          </div>

          <div className={styles.waterContainer}>
              <img
                  className={styles.glassImage}
                  src="../src/assets/water.png"
                  alt="glass-img"
              ></img>
              <div className={styles.water}>
                  <button className={styles.waterBtn} onClick={increase}>
                      +
                  </button>
                  <h1>{count}</h1>
                  <button className={styles.waterBtn} onClick={decrease}>
                      -
                  </button>
              </div>
          </div>
      </div>
  );
}

export default Dashboard;