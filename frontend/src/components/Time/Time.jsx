import React from "react";
import { render } from "react-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Button from '@mui/material/Box'
import { Box } from "@mui/system";


const percentage = 66;

const Time = ({ time }) => {
    const styles = {
        container: `h-62 w-60 mx-4  px-6 py-2.5 border-4 border-solid shadow-lg shadow-cyan-300/50	 rounded-3xl hover:scale-105 `,
        horizontal: `mt-3`,
        head: `text-3xl text-center`,
    };

    const percentage = 66;

    return (
        <>
        <div className={styles.container}>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
            <hr className={styles.horizontal} />
                <h1 className={styles.head}>{time}</h1>

                {/* <Button > Add </Button> */}
                
            
            {/* <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
>
    <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
    </Box>
    </Modal> */}
            </div>
            
        </> 
    );
};

export default Time;
