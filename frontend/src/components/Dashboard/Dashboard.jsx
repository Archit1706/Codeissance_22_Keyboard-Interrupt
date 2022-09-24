import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Sidebar from '../Sidebar/Sidebar';
import Progress from '../Progress/Progress';

const Dashboard = () => {

  const [count, setCount] = useState(0);

    
  function increase() {
      setCount(count + 1);
  }

  function decrease() {
      setCount(count - 1);
  }

  const styles = {
      container: `flex flex-row w-fit   `,
      count: `flex flex-row  border-solid `,
      btn1: `text-2xl p-3 pl-8 pr-8 rounded-l-3xl border-solid border-black border-2  bg-gray-300`,
      btn2: `text-2xl p-3 pl-8 pr-8 rounded-r-3xl border-solid border-black border-2  bg-gray-300`,
      counter: `m-8 text-2xl`,
      dcard1: ` flex flex-col w-1/2  justify-center items-center h-34 mx-4 mt-4 px-6 py-2.5 border-4 border-solid shadow-lg shadow-cyan-300/50	 rounded-3xl hover:scale-105`,
      progress: `flex flex-row `

  };

    return (
      
      <div className={styles.container}>
          <Sidebar />
          <div >
              <img
                  className={styles.image}
                  src="../src/assets/start.jpg"
                  alt="landing-img"
                  width={1300}
              >
                </img>
                <div className={styles.progress} >
                <div className={styles.dcard1} >
                    <img src="../src/assets/water.png" />
                    <div className={styles.count}>
                    <button  className={styles.btn1} onClick={increase}>+</button>
                        <h1 className={styles.counter} >{ count}</h1>
                        <button  className={styles.btn2} onClick={decrease}>-</button>
                    </div>                        
                </div>  
                    <Progress   /> 
                    </div>    
         </div>
                
          </div>
         
 
  );
}

export default Dashboard;