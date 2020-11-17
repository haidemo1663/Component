import React, {Component} from 'react';
import logo from '../logo@256.png';
import { FiArrowLeft } from "react-icons/fi";
import "./header.css";
class HeaderPage extends Component{
    render(){
        return (
            <div className='header-page-login'>
                <div className="back-arrow">
                    <FiArrowLeft />
                    <p>Go Back</p>
                </div>
    
                <img src={logo} alt="" />
                <div className="login-box">Sign Up</div>
            </div>
        )
    }
}
export default HeaderPage;