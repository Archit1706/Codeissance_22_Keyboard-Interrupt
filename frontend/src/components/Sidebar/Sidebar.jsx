import React from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const SidebarData = [
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        link: "/dashboard",
    },
    {
        title: "Calorie Tracker",
        icon: <EmojiFoodBeverageIcon />,
        link: "/calorie-tracker",
    },
    {
        title: "Weight Tracker",
        icon: <MonitorWeightIcon />,
        link: "/weight-tracker",
    },
    {
        title: "Diet Recipes",
        icon: <MenuBookIcon />,
        link: "/recipes",
    },
    {
        title: "Fitness Center",
        icon: <FitnessCenterIcon />,
        link: "/fitness-center",
    },
    {
        title: "Settings",
        icon: <SettingsIcon />,
        link: "/settings",
    },
    {
        title: "Logout",
        icon: <ExitToAppIcon />,
        link: "/login",
    },
];

const Sidebar = ({ isLoggedin }) => {
    const styles = {
        sidebar: `h-full  w-[230px] bg-teal-400`,
        menu: `ml-8`,
        menuItem: `text-slate-800 hover:text-lg hover:font-bold focus:bg-blue-500`,
        sidebarlist: `h-screen w-screen flex flex-col overflow-x-hidden`,
        sidebarlistitem: `flex flex-row py-2.5 hover:cursor-pointer text-slate-800 hover:text-lg w-fit`,
        icon: `mr-4`,
    };
    return (
        <div className={styles.sidebar}>
            <div className={styles.menu}>
                <ul className={styles.sidebarlist}>
                    {SidebarData.map((item, index) => {
                        return (
                            <li
                                className={styles.sidebarlistitem}
                                key={index}
                                id={
                                    window.location.pathname == item.link
                                        ? "active"
                                        : ""
                                }
                                onClick={(e) => {
                                    isLoggedin =
                                        e.target.innerHTML == "Logout"
                                            ? false
                                            : true;
                                    localStorage.removeItem("token");
                                    window.location.pathname = item.link;
                                }}
                            >
                                <div className={styles.icon}>{item.icon}</div>
                                <div>{item.title}</div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
