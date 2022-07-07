import React from "react";
import NavBar from './../NavBar/NavBar';
import image from "../images/homeImg.jpg";
import "./stylesHome.scss";

const Home = () => {
    return (
    <>
    <NavBar></NavBar>
        <div className="home">
            <img src={image} alt='homeImage' /> 
        </div>
    </>
    ); 
}

export default Home;