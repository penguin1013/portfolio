import React, { useEffect, useState } from 'react';

const About = () => {
    // Basic animation logic using IntersectionObserver or similar could be added here
    // For now, static rendering to match structure

    return (
        <section id="section2">
            <div className="title" data-ani="About">About<span></span></div>
            <i className="title-sm">자기소개</i>
            <div className="wrapper">
                <div className="photo"><img src="/image/common/sujin.jpg" alt="" /></div>
                <ul className="profile">
                    <li># Name _ Lee.Su.Jin</li>
                    <li># Birthday _ 1983. 10. 13</li>
                    <li># Address _ 경기도 군포시 당동</li>
                    <li># Phone _ 010.3771.5267</li>
                    <li># Email _ penguion1013@naver.com</li>
                </ul>
            </div>
        </section>
    );
};

export default About;
