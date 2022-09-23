import React from 'react'
import Box from '@mui/material/Box';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {

  const styles = {
    container: `flex flex-row`,

  }
  return (
      <div className={styles.container}>
          <Sidebar />
          <Box
              sx={{
                  width: 300,
                  height: 300,
                  backgroundColor: "primary.dark",
                  "&:hover": {
                      backgroundColor: "primary.main",
                      opacity: [0.9, 0.8, 0.7],
                  },
              }}
          />
      </div>
  );
}

export default Dashboard;