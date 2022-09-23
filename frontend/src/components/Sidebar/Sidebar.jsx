import React from "react";
import { Link } from "react-router-dom";


export const Sidebar = () => {

    const styles = {
        container: ``,
        sidebar: ``,
    }
  return (
    <div className={styles.container}>
        <div className={styles.sidebar}>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/calorie">Login</Link>
        </div>
    </div>
  )
}
