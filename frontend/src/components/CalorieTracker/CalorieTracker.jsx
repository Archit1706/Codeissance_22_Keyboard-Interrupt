import * as React from "react";
import Time from "../Time/Time";

const CalorieTracker = () => {

    const styles = {
        container: `flex flex-row justify-around`,
    };

    return (
        // <div className='{styles.container}'>
        //   < Time time="Breakfast" />
        //   < Time time="Lunch" />
        //   < Time time="Dinner" />

        // </div>

        <div className={styles.container}>
            <Time time="Breakfast" />
            <Time time="Lunch" />
            <Time time="Dinner" />
        </div>
    );
};

export default CalorieTracker;
