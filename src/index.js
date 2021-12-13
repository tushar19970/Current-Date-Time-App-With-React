import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();
const img1 = "https://picsum.photos/800/300";
const links = "https://www.timeanddate.com/worldclock/india"

ReactDom.render(
    <React.Fragment>
        <h1 contentEditable="true">Hello, This is a current Indian Date or Time App with React..!</h1>
        <img src= {img1} alt="randomImages" />
        <a href= {links} target="_tushar">
            <h3>Today's Date is = {currentDate}</h3>
            <h3>Current Time is = {currentTime}</h3>
        </a>
    </React.Fragment>,
    document.getElementById('root'))