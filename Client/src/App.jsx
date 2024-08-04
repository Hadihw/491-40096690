import React, { useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AuthRoutes from "./routes/authRoutes";
import ClientDashboard from "./pages/Dashboards/ClientDashboard";
import TrainerDashboard from "./pages/Dashboards/TrainerDashboard";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedIn, setLoggedOut, setLoading, selectLoggedIn, selectLoading } from './Redux/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const loggedIn = useSelector(selectLoggedIn);
    const loading = useSelector(selectLoading);
    const dispatch = useDispatch();
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        axios.get('/api/auth/checkAuth')
            .then(async (response) => {
                if (response.status === 200) {
                    dispatch(setLoggedIn());
                    if (response.data.accessToken) {
                        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
                    }
                    const userID = localStorage.getItem('userID');
                    const user = await axios.get(`/api/user/users/${userID}`);
                    setUserRole(user.data.userRole);

                } else {
                    dispatch(setLoggedOut());
                }
            })
            .catch((error) => {
                dispatch(setLoggedOut());
            })
            .finally(() => {
                dispatch(setLoading(false));
            });


    }, [dispatch]);

    useEffect(() => {

        if (loggedIn) {
            const userID = localStorage.getItem('userID');
        }
    }, [loggedIn]);

    const renderDashboard = () => {
        if (!loggedIn) {
            return <AuthRoutes />;
        }

        switch(userRole) {
            case 'client':
                return <ClientDashboard />;
            case 'trainer':
                return <TrainerDashboard />;
            default:
                return <ClientDashboard />;
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

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
