import React from "react";
import { render } from "react-dom";
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Button from '@mui/material/Box'
import { Box } from "@mui/system";

const Time = ({ type }) => {
    const styles = {
        container: `h-62 w-60 mx-4  px-6 py-2.5 border-4 border-solid shadow-lg shadow-cyan-300/50	 rounded-3xl hover:scale-105 `,
        horizontal: `mt-3`,
        head: `text-3xl text-center`,
    };

    const breakfastCal = 230;
    const lunchCal = 708;
    const dinnerfastCal = 509;
    const breakfastPer = 23.0;
    const lunchPer = 70.8;
    const dinnerPer = 50.9;

    return (
        <>
            <div className={styles.container}>
                <CircularProgressbar
                    value={breakfastPer}
                    text={`${breakfastCal} cal`}
                />
                <hr className={styles.horizontal} />
                <h1 className={styles.head}>{type}</h1>
            </div>
        </>
    );
};

export default Time;
