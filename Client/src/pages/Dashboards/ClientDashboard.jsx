import React, {lazy, Suspense, useEffect, useState} from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ClientNavbar from '../../components/Client/ClientNavbar';
import axios from "axios";
import LoadingIndicator from "../../components/UI/LoadingIndicator";
import {useDispatch} from "react-redux";
import {setNotSubscribed, setSubscribed} from "../../Redux/authSlice";


const Home = lazy(() => import('../../components/Client/Home/Home'));
const Profile = lazy(() => import('../../components/Client/Profile/Profile'));
const Workout = lazy(() => import('../../components/Client/Workout/Workout'));

function RedirectToHome() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/ClientDashboard/Home');
    }, [navigate]);

    return null;
}

const ClientDashboard = () => {

    const dispatch = useDispatch();
    const userID = localStorage.getItem('userID');
    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        // Fetch user data
        axios.get(`/api/user/users/${userID}`)
            .then(response => {
                const user = response.data;
                setUserData(user);

                if (user && user.subscription && user.subscription.endDate) {
                    const currentDate = new Date();
                    const endDate = new Date(user.subscription.endDate._seconds * 1000);

                    // Check endDate
                    if (endDate > currentDate) {
                        dispatch(setSubscribed());
                    } else {
                        dispatch(setNotSubscribed());
                    }
                }
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching subscription status:", error);
                setIsLoading(false);
            });
    }, [dispatch]);

    if (isLoading) {
        return (
            <div className="flex h-screen justify-center items-center">
                <LoadingIndicator/>
            </div>
        );
    }

    return (
                <div className="h-screen w-screen flex bg-gray-200 overflow-hidden">
                    <div className="rounded-lg shadow-lg flex-grow flex">
                        <div className="border-r border-gray-300">
                            <ClientNavbar userData={userData} />
                        </div>
                        <div className="flex-1 h-full overflow-hidden">
                            <div className="bg-manatee rounded-lg shadow-lg h-full">
                                <div className="py-2 px-4 md:px-6">
                                    <Suspense fallback={
                                        <div className="flex h-screen justify-center items-center">
                                            <LoadingIndicator/>
                                        </div>
                                    }>
                                        <Routes>
                                            <Route path="/ClientDashboard/Home" element={<Home  userData={userData}/>} />
                                            <Route path="/ClientDashboard/Profile" element={<Profile userData={userData}/>} />
                                            <Route path="/ClientDashboard/Workout" element={<Workout/>} />
                                            <Route path="/ClientDashboard" element={<RedirectToHome />} />
                                            <Route path="*" element={<RedirectToHome />} />
                                        </Routes>
                                    </Suspense>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )};

export default ClientDashboard;