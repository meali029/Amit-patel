import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from "./components/Header";
import Footer from './components/Footer';



const App = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Outlet />
            <Footer />

            
            
        </>
    );
};

export default App;
