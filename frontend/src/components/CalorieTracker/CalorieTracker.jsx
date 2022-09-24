import React, { useState } from "react";
import Time from "../Time/Time";
import Sidebar from "../Sidebar/Sidebar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./styles.css";
import Calendar from "./Calendar";
import Details from "./Details";
import TextField from "@mui/material/TextField";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";

const CalorieTracker = () => {
    const [food, setFood] = useState([
        {
            type: "",
            name: "",
            quantity: "",
        },
    ]);

    const { type, name, quantity } = food;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...food, [name]: value });
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Submitted");
        axios
            .post("http://localhost:5000/meals/tasty", food, {
                headers: {
                    token: localStorage.token,
                },
            })
            .then((res) => {
                console.log(res.body);
            });
    }

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
        subContainer: `w-fit pl-[100px]`,
        calendar: `mb-[50px]`,
        dataBtn: `mt-[20px] p-3 pl-8 pr-8 rounded-3xl flex item-center text-center justify-center items-center bg-blue-300 hover:bg-blue-400 m-[]`,
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
                    <Time type="breakfast" />

                    <Time type="lunch" />

                    <Time type="dinner" />
                </div>

                <div className={styles.dataBtn}>
                    <Button type="button" onClick={handleOpen}>
                        Add Data
                    </Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Meal"
                                defaultValue="Lunch"
                                onChange={handleChange}
                                value={food.type}
                            />
                            <br />
                            <br />
                            <br />

                            <TextField
                                required
                                id="outlined-required"
                                label="Food Name"
                                defaultValue="Roti"
                                onChange={handleChange}
                                value={food.name}
                            />
                            <br />
                            <br />
                            <br />
                            <TextField
                                id="outlined-number"
                                label="Quantity"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={handleChange}
                                value={food.quantity}
                            />
                            <br />
                            <br />
                            <br />
                            <Button variant="contained" onClick={handleSubmit}>
                                Add
                            </Button>

                            {/* <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                            >
                                Text in a modal
                            </Typography>
                            <Typography
                                id="modal-modal-description"
                                sx={{ mt: 2 }}
                            >
                                <input
                                    type="text"
                                    placeholder="Dish Name"
                                    value={name}
                                />
                                Duis mollis, est non commodo luctus, nisi erat
                                porttitor ligula.
                            </Typography> */}
                        </Box>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default CalorieTracker;
