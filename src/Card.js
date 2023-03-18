import React from "react"
// import image from './img12.png'

export default function Card(props) {

  let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
        // badgeText.style.color = 'red';

    }
    
  return (
    <div className="card-main">
    {badgeText && <div className="card--badge">{badgeText}</div>}
      {/* eslint-disable-next-line */}
      <img src={require(`../src/Images/${props.item.coverImg}`)} alt={`./Images/${props.item.coverImg}`} className="mainPic" />
      <div className="card-stats">
      {/* eslint-disable-next-line */}
        <img src={require("./Images/Star 1.png")} className="starPic" />
        <span> {props.item.stats.rating} </span>
        <span> ({props.item.stats.reviewCount}) </span>
        <span> • {props.item.location}</span>
      </div>
      <p className="card-title">{props.item.title}</p>
      <p className="card-price">
        <b>${props.item.price}</b> / person
      </p>
    </div>
  )
}