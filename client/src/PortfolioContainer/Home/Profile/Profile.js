import React from 'react';
import Typical from 'react-typical';

import ScrollService from '../../../utilities/ScrollService';
import './Profile.css';

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://github.com/SNEHAASHISH'>
                                <i className="fa fa-github"></i>
                            </a>
                            <a href='https://twitter.com/sneh_aashish'>
                                <i className='fa fa-twitter'></i>
                            </a>
                            <a href='https://www.linkedin.com/in/sneh-aashish-gupta-b33259199/'>
                                <i className='fa fa-linkedin'></i>
                            </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Sneh</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1

                            >
                                {" "}   
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        `Enthusiastic Developer 💻`,
                                        1000,
                                        "Competitive Programmer 🥷",
                                        1000,
                                        "Smart Contract Developer 🔐",
                                        1000,
                                        "MUNner 🇺🇳",
                                        1000,
                                        "React.js Developer ⚛",
                                        1000,
                                        "MNITian 🎓",
                                        1000,
                                    ]}
                                />
                            </h1>
                        </span>
                        <span className="profile-role-tagline">
                            Knack of Building Swanky Frontend, Powerful Smart Contracts and Competitive Programming!
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button 
                            className='btn primary-btn'
                            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        >
                            {""}
                            Hire Me{" "}
                        </button>
                        <a href='Resume_Sneh_Aashish_Gupta_CSE_Undergrad_4_months_SDE.pdf' download='Sneh Aashish Gupta Resume NIT Jaipur 3rd Year SDE Intern'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;