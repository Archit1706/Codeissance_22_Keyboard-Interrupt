import * as React from "react";
import Time from "../Time/Time";
import Sidebar from "../Sidebar/Sidebar";

const CalorieTracker = () => {

    const styles = {
        container: `flex flex-row w-fit`,
        meal: `flex flex-row cursor-pointer justify-center items-center  h-fit `
    };

    return (
        // <div className='{styles.container}'>
        //   < Time time="Breakfast" />
        //   < Time time="Lunch" />
        //   < Time time="Dinner" />

        // </div>

        <div className={styles.container}>
          <Sidebar />
          <div className={styles.meal}>
            <Time time="Breakfast" />
            <Time time="Lunch" />
            <Time time="Dinner" />
        </div>
          
      </div>

       
    );
};

export default CalorieTracker;
