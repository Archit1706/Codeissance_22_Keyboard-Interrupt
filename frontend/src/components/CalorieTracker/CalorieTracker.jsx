import React, {useState} from "react";
import Time from "../Time/Time";
import Sidebar from "../Sidebar/Sidebar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./styles.css";
import Calendar from "./Calendar";
import Details from "./Details";

const CalorieTracker = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [food, setFood] = useState([
      {
        type: "",
        name: "",
        quantity: ""
      }
    ]); 

    const {type, name, quantity} = food;

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };

    const styles = {
        container: `flex flex-row w-fit`,
        meal: `flex flex-row cursor-pointer justify-center items-center h-fit`,
        subContainer: ``,
        calendar: ``,
    };

    const [showDetails, setShowDetails] = useState(false);
    const [data, setData] = useState(null);

    const showDetailsHandle = (dayStr) => {
        setData(dayStr);
        setShowDetails(true);
    };

    return (
        <div className={styles.container}>
            <Sidebar isLoggedin={true} />
            <div className={styles.subContainer}>
                <div className={styles.calendar}>
                    <div className="App">
                        <Calendar showDetailsHandle={showDetailsHandle} />
                        {/* {showDetails && <Details data={data} />} */}
                    </div>
                </div>

                <div className={styles.meal}>
                    <Time onClick={() => {
                        console.log(e.target);
                        handleOpen();
                        }} time="Breakfast" />

                    <Time onClick={() => {
                        console.log(e.target);
                        handleOpen();
                        }} time="Lunch" />

                    <Time onClick={() => {
                        console.log(e.target);
                        handleOpen();
                        }} time="Dinner" />
                </div>
            </div>

            <div>
          
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <input
                                type="text"
                                placeholder="Dish Name"
                                value={name}
                            />
                            Duis mollis, est non commodo luctus, nisi erat
                            porttitor ligula.
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div>
    );
};

export default CalorieTracker;
