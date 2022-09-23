import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const SidebarData = [
    {
        title: 'Dashboard',
        icon: <DashboardIcon />,
        link: '/dashboard',
        
    },
    {
        title: 'Calorie Tracker',
        icon: <EmojiFoodBeverageIcon />,
        link: '/calorie-tracker',
        
    },
    {
        title: 'Weight Tracker',
        icon: <MonitorWeightIcon />,
        link: '/weight-tracker',
        
    },
    {
        title: 'Diet Recipes',
        icon: <MenuBookIcon />,
        link: '/recipes',
        
    },
    {
        title: 'Fitness Center',
        icon: <FitnessCenterIcon />,
        link: '/fitness-center',
        
    },
    {
        title: 'Settings',
        icon: <SettingsIcon />,
        link: '/settings',
        
    },
    {
        title: 'Logout',
        icon: <ExitToAppIcon />,
        link: '/login',
    }
];