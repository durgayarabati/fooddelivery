import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import prasadImagef from '../../assets/prasadv.png'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img className="footer-image"src={prasadImagef} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec ligula non quam viverra vestibulum. Donec dapibus eros at nulla ultricies, sed dictum ligula bibendum. Nullam ac sollicitudin eros, sit amet consequat nisi. Curabitur tincidunt, ligula ut aliquam placerat, lorem turpis gravida justo, vel viverra nulla ex in lacus. In hac habitasse platea dictumst. Integer eget dui a risus vehicula scelerisque at non erat. Vivamus tincidunt vehicula massa, in efficitur lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis imperdiet, arcu in cursus fermentum, dolor ex tristique velit, a lacinia justo est vel ante.

                        Suspendiss
                    </p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>

                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 9014434695</li>
                        <li>contact@prasad.com</li>
                    </ul>
                </div>

            </div>
            <hr />
            <p className="footer-copyright">copyright 2024 @ prasad.in - All Right Reserved.</p>


        </div>
    )
}

export default Footer