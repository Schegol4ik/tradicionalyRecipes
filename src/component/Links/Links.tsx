import React from 'react';
import './Links.scss'
import {AiFillGithub, AiOutlineMail} from "react-icons/ai";
import {BsTelegram} from "react-icons/bs";
import { Link } from 'react-router-dom';

const Links = () => {
    return (
        <div className='wrapper--links'>
            <a target="_blank" href='https://github.com/Schegol4ik'><AiFillGithub color='black' style={{marginRight: '10px'}}/></a>
            <a target="_blank" href="https://t.me/JonesBaker"><BsTelegram color='blue' style={{marginRight: '10px'}}/></a>
            <a target='_blank' href="mailto:iliyinchikartem@gmail.com"><AiOutlineMail color='black'/></a>
        </div>
    );
};

export default Links;