import "../styles/Cards.css"
import { FcDataSheet } from "react-icons/fc";
import React from 'react'
import { TbTruckLoading } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { FaBoxesPacking } from "react-icons/fa6";
import { MdOutlineTour } from "react-icons/md";


const Services = () => {
  return (
    <main className="main">
        <div className="ser-contant">
          
          <div className="top-div-ser">
            <h2 className="s-title"> My Services</h2>
            <p className="s-para">Lorem ipsum dolor sit amet consectetur adipisicing elit <br />. Neque nulla quasi est id et atque?</p>
          </div>
          
          <div className="boxes-container">
            <div className="box">
            <FcDataSheet className="s-icon"/>
            <h3>Hight Quality services</h3>
            <span>All over the world</span>
            </div>
            <div className="box"><TbTruckLoading  className="s-icon"/> 
            <h3>Loading</h3>
            <span>All kinds of metarials</span></div>
            <div className="box"><TbTruckDelivery className="s-icon"/>
            <h3>Deliverd</h3>
            <span>All Pakistan</span></div>
            <div className="box"><FaBoxesPacking className="s-icon"/>
            <h3>Packing</h3>
            <span>In cantainers</span></div>
            <div className="box"><MdOutlineTour className="s-icon" />
            <h3>Tourism</h3>
            <span>Travlling all in the world</span></div>
           
          </div>
        </div>
    </main>
  )
}

export default Services