import React, { useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AuthRoutes from "./routes/authRoutes";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


    const renderDashboard = () => {
            return <AuthRoutes />;

    };


    return (
        <Router>
            {renderDashboard()}
            <ToastContainer
                position="bottom-right"
                className="absolute bottom-0 right-0 mb-6 mr-6 max-w-xs z-50"
            />
        </Router>
    );
}

export default App;
