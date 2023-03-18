import React from "react"
import image from './Images/Airbnb_Logo_Bélo.svg.png'
export default function Navbar() {
    return (
        <nav className="navcss">
            {/* eslint-disable-next-line */}
            <img src={image}/>
            <ul className="list">
                <li className="list-item">Home</li>
                <li className="list-item">Pricing</li>
                <li className="list-item">About Us</li>
                <li className="list-item">Contact Us</li>
            </ul>
        </nav>
    )
}